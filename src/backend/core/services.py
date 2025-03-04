from decimal import Decimal
from django.db.models import Sum
from django.utils import timezone
from .models import User, Commission, Investment, BinaryTree, Rank, Pool, PoolParticipant

class CommissionService:
    @staticmethod
    def calculate_referral_commission(referrer, new_user, investment_amount=None):
        """
        Calculate and create referral commission when a new user is referred
        """
        if not referrer or referrer == new_user:
            return None
        
        # Get referrer's rank to determine commission rate
        rank = referrer.rank
        if not rank:
            return None
        
        # If investment amount is provided, calculate commission based on that
        # Otherwise, use a fixed amount based on rank
        if investment_amount:
            commission_amount = Decimal(investment_amount) * (rank.commission_rate / 100)
        else:
            commission_amount = Decimal('10.00')  # Default fixed amount
        
        # Create commission record
        commission = Commission.objects.create(
            user=referrer,
            amount=commission_amount,
            commission_type='referral',
            source_user=new_user
        )
        
        # Update referrer's wallet balance
        referrer.wallet_balance += commission_amount
        referrer.save()
        
        return commission
    
    @staticmethod
    def calculate_binary_commission(user):
        """
        Calculate binary commission based on the balance of left and right legs
        """
        # Get total investment volume from left and right legs
        left_volume = 0
        right_volume = 0
        
        # Calculate left leg volume
        if user.left_leg:
            left_investments = Investment.objects.filter(
                user=user.left_leg,
                status='active'
            ).aggregate(total=Sum('amount'))
            left_volume = left_investments['total'] or 0
        
        # Calculate right leg volume
        if user.right_leg:
            right_investments = Investment.objects.filter(
                user=user.right_leg,
                status='active'
            ).aggregate(total=Sum('amount'))
            right_volume = right_investments['total'] or 0
        
        # Binary commission is calculated on the weaker leg
        weaker_leg_volume = min(left_volume, right_volume)
        
        # Get user's rank to determine commission rate
        rank = user.rank
        if not rank:
            return None
        
        # Calculate commission amount
        commission_amount = Decimal(weaker_leg_volume) * (rank.commission_rate / 100)
        
        # Create commission record
        commission = Commission.objects.create(
            user=user,
            amount=commission_amount,
            commission_type='binary'
        )
        
        # Update user's wallet balance
        user.wallet_balance += commission_amount
        user.save()
        
        return commission
    
    @staticmethod
    def calculate_pool_commissions(pool_id):
        """
        Calculate and distribute commissions from a pool
        """
        try:
            pool = Pool.objects.get(id=pool_id, is_active=True)
            
            # Check if pool end date has passed
            if pool.end_date > timezone.now():
                return False, "Pool has not ended yet"
            
            # Get all participants
            participants = PoolParticipant.objects.filter(pool=pool)
            
            # Calculate total distribution amount
            distribution_amount = pool.total_amount * (pool.distribution_percentage / 100)
            
            # Distribute to participants based on their share percentage
            for participant in participants:
                user = participant.user
                share = participant.share_percentage / 100
                commission_amount = distribution_amount * Decimal(share)
                
                # Create commission record
                Commission.objects.create(
                    user=user,
                    amount=commission_amount,
                    commission_type='pool',
                    source_user=None  # Pool commission doesn't have a source user
                )
                
                # Update user's wallet balance
                user.wallet_balance += commission_amount
                user.save()
            
            # Mark pool as inactive after distribution
            pool.is_active = False
            pool.save()
            
            return True, "Pool commissions distributed successfully"
            
        except Pool.DoesNotExist:
            return False, "Pool not found or not active"
    
    @staticmethod
    def update_user_rank(user):
        """
        Update user's rank based on their performance
        """
        # Count direct referrals
        direct_referrals = BinaryTree.objects.filter(parent__user=user).count()
        
        # Calculate team volume
        team_volume = 0
        
        # Get all users in the downline (this is simplified, in reality you'd need a recursive function)
        downline_users = []
        if user.left_leg:
            downline_users.append(user.left_leg)
        if user.right_leg:
            downline_users.append(user.right_leg)
        
        # Calculate team volume from investments
        for downline_user in downline_users:
            investments = Investment.objects.filter(
                user=downline_user,
                status='active'
            ).aggregate(total=Sum('amount'))
            team_volume += investments['total'] or 0
        
        # Find eligible rank
        eligible_rank = None
        for rank in Rank.objects.all().order_by('-required_team_volume'):
            if (direct_referrals >= rank.required_direct_referrals and 
                team_volume >= rank.required_team_volume):
                eligible_rank = rank
                break
        
        # Update user's rank if eligible for a higher rank
        if eligible_rank and (not user.rank or user.rank.id < eligible_rank.id):
            user.rank = eligible_rank
            user.save()
            return True, f"User rank updated to {eligible_rank.name}"
        
        return False, "No rank update needed"