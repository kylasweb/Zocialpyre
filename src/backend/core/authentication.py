from rest_framework_simplejwt.authentication import JWTAuthentication
from rest_framework import exceptions
from .models import UserProfile
import pyotp

class TwoFactorJWTAuthentication(JWTAuthentication):
    def authenticate(self, request):
        user, payload = super().authenticate(request)
        
        if user:
            try:
                profile = user.profile
                if profile.two_factor_enabled:
                    otp = request.META.get('HTTP_X_OTP')
                    if not otp:
                        raise exceptions.AuthenticationFailed('2FA required')
                    
                    totp = pyotp.TOTP(profile.two_factor_secret)
                    if not totp.verify(otp):
                        raise exceptions.AuthenticationFailed('Invalid OTP')
            except UserProfile.DoesNotExist:
                pass
            
        return user, payload