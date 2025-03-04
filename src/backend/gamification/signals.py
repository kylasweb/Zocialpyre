from django.db.models.signals import post_save
from django.dispatch import receiver
from core.models import User

@receiver(post_save, sender=User)
def check_achievements(sender, instance, created, **kwargs):
    if created:
        # Award welcome badge
        Badge.objects.create(
            user=instance,
            name="New Recruit",
            icon="badge-welcome"
        )
    
    # Add logic for checking challenge completion
    if instance.referrals.count() >= 5:
        Badge.objects.get_or_create(
            user=instance,
            name="Team Builder",
            icon="badge-team"
        )