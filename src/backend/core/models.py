from django.db import models
from django.contrib.auth.models import AbstractUser
from django.utils.crypto import get_random_string

class User(AbstractUser):
    sponsor_id = models.CharField(max_length=10, unique=True, blank=True)
    left_leg = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL, related_name='left_children')
    right_leg = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL, related_name='right_children')
    level = models.IntegerField(default=1)
    rank = models.ForeignKey('Rank', on_delete=models.SET_NULL, null=True)
    wallet_balance = models.DecimalField(max_digits=15, decimal_places=2, default=0)
    
    def save(self, *args, **kwargs):
        if not self.sponsor_id:
            self.sponsor_id = self.generate_sponsor_id()
        super().save(*args, **kwargs)
    
    def generate_sponsor_id(self):
        while True:
            sponsor_id = get_random_string(8).upper()
            if not User.objects.filter(sponsor_id=sponsor_id).exists():
                return sponsor_id
    
    def get_extreme_left_leg(self):
        """Find the extreme left leg (leftmost node) in the user's downline"""
        current = self
        while current.left_leg:
            current = current.left_leg
        return current
    
    def get_extreme_right_leg(self):
        """Find the extreme right leg (rightmost node) in the user's downline"""
        current = self
        while current.right_leg:
            current = current.right_leg
        return current
    
    def place_in_binary_tree(self, new_user, position=None):
        """
        Place a new user in the binary tree structure
        If position is not specified, it will be placed at the first available position
        """
        if position not in ['left', 'right', None]:
            raise ValueError("Position must be 'left', 'right', or None")
        
        # If position is specified and that leg is empty, place directly
        if position == 'left' and not self.left_leg:
            self.left_leg = new_user
            self.save()
            return True
        elif position == 'right' and not self.right_leg:
            self.right_leg = new_user
            self.save()
            return True
        
        # If position is specified but that leg is taken, place at extreme of that leg
        if position == 'left':
            extreme_left = self.get_extreme_left_leg()
            if not extreme_left.left_leg:
                extreme_left.left_leg = new_user
                extreme_left.save()
                return True
            elif not extreme_left.right_leg:
                extreme_left.right_leg = new_user
                extreme_left.save()
                return True
        elif position == 'right':
            extreme_right = self.get_extreme_right_leg()
            if not extreme_right.left_leg:
                extreme_right.left_leg = new_user
                extreme_right.save()
                return True
            elif not extreme_right.right_leg:
                extreme_right.right_leg = new_user
                extreme_right.save()
                return True
        
        # If no position specified or couldn't place at extreme, find first available position
        # using breadth-first search
        from collections import deque
        queue = deque([self])
        while queue:
            current = queue.popleft()
            if not current.left_leg:
                current.left_leg = new_user
                current.save()
                return True
            elif not current.right_leg:
                current.right_leg = new_user
                current.save()
                return True
            else:
                if current.left_leg:
                    queue.append(current.left_leg)
                if current.right_leg:
                    queue.append(current.right_leg)
        
        return False  # Could not place user

class Rank(models.Model):
    name = models.CharField(max_length=50)
    required_direct_referrals = models.IntegerField()
    required_team_volume = models.DecimalField(max_digits=15, decimal_places=2)
    commission_rate = models.DecimalField(max_digits=5, decimal_places=2)
    
    def __str__(self):
        return self.name

class BinaryTree(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    parent = models.ForeignKey('self', null=True, blank=True, on_delete=models.SET_NULL)
    position = models.CharField(max_length=10, choices=[('left', 'Left'), ('right', 'Right')])
    level = models.IntegerField()
    created_at = models.DateTimeField(auto_now_add=True)
    
    def __str__(self):
        return f"{self.user.username}'s position - {self.position} (Level {self.level})"

class InvestmentPlan(models.Model):
    name = models.CharField(max_length=100)
    minimum_amount = models.DecimalField(max_digits=15, decimal_places=2)
    maximum_amount = models.DecimalField(max_digits=15, decimal_places=2)
    duration_days = models.IntegerField()
    roi_percentage = models.DecimalField(max_digits=5, decimal_places=2)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return f"{self.name} - {self.roi_percentage}% ROI"

class Investment(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    plan = models.ForeignKey(InvestmentPlan, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=15, decimal_places=2)
    start_date = models.DateTimeField(auto_now_add=True)
    end_date = models.DateTimeField()
    status = models.CharField(
        max_length=20, 
        choices=[
            ('active', 'Active'),
            ('completed', 'Completed'),
            ('cancelled', 'Cancelled')
        ],
        default='active'
    )
    def __str__(self):
        return f"{self.user.username}'s {self.plan.name} investment of {self.amount}"

class Commission(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    amount = models.DecimalField(max_digits=15, decimal_places=2)
    commission_type = models.CharField(
        max_length=50, 
        choices=[
            ('referral', 'Referral'),
            ('binary', 'Binary'),
            ('rank', 'Rank'),
            ('pool', 'Pool')
        ]
    )
    source_user = models.ForeignKey(User, on_delete=models.SET_NULL, null=True, related_name='generated_commissions')
    created_at = models.DateTimeField(auto_now_add=True)
    def __str__(self):
        return f"{self.user.username}'s {self.commission_type} commission: {self.amount}"

class Feature(models.Model):
    name = models.CharField(max_length=100)
    key = models.CharField(max_length=50, unique=True)
    description = models.TextField()
    is_enabled = models.BooleanField(default=False)
    requires_subscription = models.BooleanField(default=False)
    def __str__(self):
        status = "Enabled" if self.is_enabled else "Disabled"
        return f"{self.name} ({status})"

class Task(models.Model):
    title = models.CharField(max_length=200)
    description = models.TextField()
    assigned_to = models.ForeignKey(User, on_delete=models.CASCADE, related_name='assigned_tasks')
    created_by = models.ForeignKey(User, on_delete=models.CASCADE, related_name='created_tasks')
    due_date = models.DateTimeField()
    status = models.CharField(
        max_length=20, 
        choices=[
            ('pending', 'Pending'),
            ('in_progress', 'In Progress'),
            ('completed', 'Completed'),
            ('cancelled', 'Cancelled')
        ],
        default='pending'
    )
    priority = models.CharField(
        max_length=20, 
        choices=[
            ('low', 'Low'),
            ('medium', 'Medium'),
            ('high', 'High'),
            ('urgent', 'Urgent')
        ],
        default='medium'
    )
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    def __str__(self):
        return f"{self.title} - {self.status} (Assigned to: {self.assigned_to.username})"

class Achievement(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    title = models.CharField(max_length=100)
    description = models.TextField()
    badge_image = models.ImageField(upload_to='badges/')
    achieved_at = models.DateTimeField(auto_now_add=True)
    points = models.IntegerField(default=0)
    
    def __str__(self):
        return f"{self.user.username}'s achievement: {self.title} ({self.points} points)"

# New models for the missing components

class Pool(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    total_amount = models.DecimalField(max_digits=15, decimal_places=2, default=0)
    distribution_percentage = models.DecimalField(max_digits=5, decimal_places=2)
    is_active = models.BooleanField(default=True)
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()
    
    def __str__(self):
        return f"{self.name} Pool - {self.total_amount}"

class PoolParticipant(models.Model):
    pool = models.ForeignKey(Pool, on_delete=models.CASCADE, related_name='participants')
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    contribution_amount = models.DecimalField(max_digits=15, decimal_places=2)
    share_percentage = models.DecimalField(max_digits=5, decimal_places=2)
    joined_at = models.DateTimeField(auto_now_add=True)
    
    class Meta:
        unique_together = ('pool', 'user')
    
    def __str__(self):
        return f"{self.user.username} in {self.pool.name} - {self.share_percentage}%"

class CustomToken(models.Model):
    name = models.CharField(max_length=100)
    symbol = models.CharField(max_length=10)
    total_supply = models.DecimalField(max_digits=25, decimal_places=8)
    decimals = models.IntegerField(default=18)
    contract_address = models.CharField(max_length=42, blank=True, null=True)
    is_active = models.BooleanField(default=True)
    
    def __str__(self):
        return f"{self.name} ({self.symbol})"

class UserToken(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='tokens')
    token = models.ForeignKey(CustomToken, on_delete=models.CASCADE)
    balance = models.DecimalField(max_digits=25, decimal_places=8, default=0)
    
    class Meta:
        unique_together = ('user', 'token')
    
    def __str__(self):
        return f"{self.user.username}'s {self.token.symbol}: {self.balance}"

class TokenTransaction(models.Model):
    token = models.ForeignKey(CustomToken, on_delete=models.CASCADE)
    from_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='sent_transactions', null=True, blank=True)
    to_user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='received_transactions')
    amount = models.DecimalField(max_digits=25, decimal_places=8)
    transaction_hash = models.CharField(max_length=66, blank=True, null=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    description = models.CharField(max_length=200, blank=True)
    
    def __str__(self):
        from_name = self.from_user.username if self.from_user else "System"
        return f"{from_name} -> {self.to_user.username}: {self.amount} {self.token.symbol}"

class WebsiteTemplate(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    is_active = models.BooleanField(default=False)
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)
    
    def __str__(self):
        return self.name

class WebsiteSection(models.Model):
    template = models.ForeignKey(WebsiteTemplate, on_delete=models.CASCADE, related_name='sections')
    name = models.CharField(max_length=100)
    section_type = models.CharField(max_length=50, choices=[
        ('header', 'Header'),
        ('footer', 'Footer'),
        ('hero', 'Hero'),
        ('features', 'Features'),
        ('testimonials', 'Testimonials'),
        ('pricing', 'Pricing'),
        ('contact', 'Contact'),
        ('custom', 'Custom')
    ])
    content = models.JSONField()
    order = models.IntegerField()
    
    class Meta:
        ordering = ['order']
    
    def __str__(self):
        return f"{self.template.name} - {self.name} ({self.section_type})"

class UserProfile(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE, related_name='profile')
    profile_picture = models.ImageField(upload_to='profile_pictures/', blank=True, null=True)
    phone_number = models.CharField(max_length=20, blank=True)
    address = models.TextField(blank=True)
    date_of_birth = models.DateField(blank=True, null=True)
    two_factor_enabled = models.BooleanField(default=False)
    two_factor_secret = models.CharField(max_length=32, blank=True)
    
    def __str__(self):
        return f"{self.user.username}'s Profile"

class AnalyticsData(models.Model):
    date = models.DateField()
    new_users = models.IntegerField(default=0)
    active_users = models.IntegerField(default=0)
    total_investments = models.DecimalField(max_digits=15, decimal_places=2, default=0)
    total_commissions = models.DecimalField(max_digits=15, decimal_places=2, default=0)
    
    class Meta:
        ordering = ['-date']
    
    def __str__(self):
        return f"Analytics for {self.date}"

class UserActivity(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    activity_type = models.CharField(max_length=50, choices=[
        ('login', 'Login'),
        ('signup', 'Sign Up'),
        ('investment', 'Investment'),
        ('withdrawal', 'Withdrawal'),
        ('referral', 'Referral'),
        ('profile_update', 'Profile Update'),
        ('other', 'Other')
    ])
    ip_address = models.GenericIPAddressField(blank=True, null=True)
    user_agent = models.TextField(blank=True)
    timestamp = models.DateTimeField(auto_now_add=True)
    details = models.JSONField(blank=True, null=True)
    
    class Meta:
        ordering = ['-timestamp']
        verbose_name_plural = 'User Activities'
    
    def __str__(self):
        return f"{self.user.username} - {self.activity_type} at {self.timestamp}"