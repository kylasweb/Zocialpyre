from rest_framework import serializers
from .models import (
    User, Rank, BinaryTree, InvestmentPlan, Investment,
    Commission, Feature, Task, Achievement, Pool, PoolParticipant,
    CustomToken, UserToken, TokenTransaction, WebsiteTemplate,
    WebsiteSection, UserProfile, AnalyticsData, UserActivity
)

class UserSerializer(serializers.ModelSerializer):
    sponsor = serializers.SerializerMethodField()
    referral_link = serializers.SerializerMethodField()
    
    class Meta:
        model = User
        fields = ['id', 'username', 'email', 'sponsor_id', 'level', 'rank', 'wallet_balance', 
                 'sponsor', 'referral_link', 'left_leg', 'right_leg']
        read_only_fields = ['sponsor_id', 'wallet_balance', 'referral_link']
    
    def get_sponsor(self, obj):
        # Get the sponsor information based on binary tree relationship
        try:
            binary_node = BinaryTree.objects.get(user=obj)
            if binary_node.parent:
                sponsor = binary_node.parent.user
                return {
                    'id': sponsor.id,
                    'username': sponsor.username,
                    'sponsor_id': sponsor.sponsor_id
                }
        except BinaryTree.DoesNotExist:
            pass
        return None
    
    def get_referral_link(self, obj):
        request = self.context.get('request')
        if request and obj.sponsor_id:
            domain = request.build_absolute_uri('/').rstrip('/')
            return f"{domain}/register?sponsor={obj.sponsor_id}"
        return None

class RankSerializer(serializers.ModelSerializer):
    class Meta:
        model = Rank
        fields = '__all__'

class BinaryTreeSerializer(serializers.ModelSerializer):
    user_details = UserSerializer(source='user', read_only=True)
    parent_details = serializers.SerializerMethodField()
    children = serializers.SerializerMethodField()
    
    class Meta:
        model = BinaryTree
        fields = ['id', 'user', 'parent', 'position', 'level', 'created_at', 
                 'user_details', 'parent_details', 'children']
    
    def get_parent_details(self, obj):
        if obj.parent:
            return {
                'id': obj.parent.id,
                'user_id': obj.parent.user.id,
                'username': obj.parent.user.username,
                'position': obj.parent.position
            }
        return None
    
    def get_children(self, obj):
        children = BinaryTree.objects.filter(parent=obj)
        return BinaryTreeSerializer(children, many=True, context=self.context).data

class InvestmentPlanSerializer(serializers.ModelSerializer):
    active_investments_count = serializers.SerializerMethodField()
    
    class Meta:
        model = InvestmentPlan
        fields = '__all__'
    
    def get_active_investments_count(self, obj):
        return Investment.objects.filter(plan=obj, status='active').count()

class InvestmentSerializer(serializers.ModelSerializer):
    plan_details = InvestmentPlanSerializer(source='plan', read_only=True)
    user_details = UserSerializer(source='user', read_only=True)
    expected_return = serializers.SerializerMethodField()
    
    class Meta:
        model = Investment
        fields = ['id', 'user', 'plan', 'amount', 'start_date', 'end_date', 'status',
                 'plan_details', 'user_details', 'expected_return']
        read_only_fields = ['start_date', 'expected_return']
    
    def get_expected_return(self, obj):
        return obj.amount * (1 + obj.plan.roi_percentage / 100)

class CommissionSerializer(serializers.ModelSerializer):
    user_details = UserSerializer(source='user', read_only=True)
    source_user_details = UserSerializer(source='source_user', read_only=True)
    
    class Meta:
        model = Commission
        fields = ['id', 'user', 'amount', 'commission_type', 'source_user', 'created_at',
                 'user_details', 'source_user_details']
        read_only_fields = ['created_at']

class FeatureSerializer(serializers.ModelSerializer):
    class Meta:
        model = Feature
        fields = '__all__'

class TaskSerializer(serializers.ModelSerializer):
    assigned_to_details = UserSerializer(source='assigned_to', read_only=True)
    created_by_details = UserSerializer(source='created_by', read_only=True)
    
    class Meta:
        model = Task
        fields = ['id', 'title', 'description', 'assigned_to', 'created_by', 'due_date',
                 'status', 'priority', 'created_at', 'updated_at', 
                 'assigned_to_details', 'created_by_details']
        read_only_fields = ['created_at', 'updated_at']

class AchievementSerializer(serializers.ModelSerializer):
    user_details = UserSerializer(source='user', read_only=True)
    
    class Meta:
        model = Achievement
        fields = ['id', 'user', 'title', 'description', 'badge_image', 'achieved_at', 'points',
                 'user_details']
        read_only_fields = ['achieved_at']

class PoolSerializer(serializers.ModelSerializer):
    participant_count = serializers.SerializerMethodField()
    
    class Meta:
        model = Pool
        fields = '__all__'
    
    def get_participant_count(self, obj):
        return obj.participants.count()

class PoolParticipantSerializer(serializers.ModelSerializer):
    user_details = UserSerializer(source='user', read_only=True)
    pool_details = PoolSerializer(source='pool', read_only=True)
    
    class Meta:
        model = PoolParticipant
        fields = ['id', 'pool', 'user', 'contribution_amount', 'share_percentage', 
                 'joined_at', 'user_details', 'pool_details']

class CustomTokenSerializer(serializers.ModelSerializer):
    class Meta:
        model = CustomToken
        fields = '__all__'

class UserTokenSerializer(serializers.ModelSerializer):
    token_details = CustomTokenSerializer(source='token', read_only=True)
    user_details = UserSerializer(source='user', read_only=True)
    
    class Meta:
        model = UserToken
        fields = ['id', 'user', 'token', 'balance', 'token_details', 'user_details']

class TokenTransactionSerializer(serializers.ModelSerializer):
    token_details = CustomTokenSerializer(source='token', read_only=True)
    from_user_details = UserSerializer(source='from_user', read_only=True)
    to_user_details = UserSerializer(source='to_user', read_only=True)
    
    class Meta:
        model = TokenTransaction
        fields = ['id', 'token', 'from_user', 'to_user', 'amount', 'transaction_hash',
                 'timestamp', 'description', 'token_details', 'from_user_details', 'to_user_details']

class WebsiteSectionSerializer(serializers.ModelSerializer):
    class Meta:
        model = WebsiteSection
        fields = '__all__'

class WebsiteTemplateSerializer(serializers.ModelSerializer):
    sections = WebsiteSectionSerializer(many=True, read_only=True)
    
    class Meta:
        model = WebsiteTemplate
        fields = ['id', 'name', 'description', 'is_active', 'created_at', 'updated_at', 'sections']
class UserProfileSerializer(serializers.ModelSerializer):
    two_factor_qr = serializers.SerializerMethodField()
    
    class Meta:
        model = UserProfile
        fields = ['id', 'user', 'profile_picture', 'phone_number', 'address', 
                 'date_of_birth', 'two_factor_enabled', 'two_factor_qr']
        read_only_fields = ['two_factor_secret', 'two_factor_qr']

    def get_two_factor_qr(self, obj):
        if obj.two_factor_enabled:
            totp = pyotp.TOTP(obj.two_factor_secret)
            return totp.provisioning_uri(name=obj.user.email, issuer_name="NetworkMarketing")
        return None
class AnalyticsDataSerializer(serializers.ModelSerializer):
    class Meta:
        model = AnalyticsData
        fields = '__all__'

class UserActivitySerializer(serializers.ModelSerializer):
    user_details = UserSerializer(source='user', read_only=True)
    
    class Meta:
        model = UserActivity
        fields = ['id', 'user', 'activity_type', 'ip_address', 'user_agent', 
                 'timestamp', 'details', 'user_details']