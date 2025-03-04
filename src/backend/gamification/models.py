from django.db import models
from core.models import User

class Challenge(models.Model):
    name = models.CharField(max_length=100)
    description = models.TextField()
    criteria = models.JSONField()  # {type: 'referrals', threshold: 5}
    reward = models.JSONField()    # {points: 100, badge: 'bronze'}
    start_date = models.DateTimeField()
    end_date = models.DateTimeField()

class Badge(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE)
    name = models.CharField(max_length=50)
    icon = models.CharField(max_length=100)
    achieved_at = models.DateTimeField(auto_now_add=True)

class LeaderboardEntry(models.Model):
    user = models.OneToOneField(User, on_delete=models.CASCADE)
    points = models.IntegerField(default=0)
    rank = models.IntegerField()
    last_updated = models.DateTimeField(auto_now=True)