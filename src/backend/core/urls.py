from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet, RankViewSet, InvestmentPlanViewSet,
    InvestmentViewSet, CommissionViewSet, FeatureViewSet, TaskViewSet,
    AchievementViewSet, PoolViewSet, PoolParticipantViewSet, CustomTokenViewSet,
    UserTokenViewSet, TokenTransactionViewSet, WebsiteTemplateViewSet,
    WebsiteSectionViewSet, UserProfileViewSet, AnalyticsDataViewSet,
    UserActivityViewSet
)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from oauth2_provider.views import TokenView, AuthorizationView

router = DefaultRouter()
router.register('users', UserViewSet, basename='users')
router.register('ranks', RankViewSet, basename='ranks')

router.register('investment-plans', InvestmentPlanViewSet, basename='investment-plans')
router.register('investments', InvestmentViewSet, basename='investments')
router.register('commissions', CommissionViewSet, basename='commissions')
router.register('features', FeatureViewSet, basename='features')
router.register('tasks', TaskViewSet, basename='tasks')
router.register('achievements', AchievementViewSet, basename='achievements')
router.register('pools', PoolViewSet, basename='pools')
router.register('pool-participants', PoolParticipantViewSet, basename='pool-participants')
router.register('custom-tokens', CustomTokenViewSet, basename='custom-tokens')
router.register('user-tokens', UserTokenViewSet, basename='user-tokens')
router.register('token-transactions', TokenTransactionViewSet, basename='token-transactions')
router.register('website-templates', WebsiteTemplateViewSet, basename='website-templates')
router.register('website-sections', WebsiteSectionViewSet, basename='website-sections')
router.register('user-profiles', UserProfileViewSet, basename='user-profiles')
router.register('analytics', AnalyticsDataViewSet, basename='analytics')
router.register('user-activities', UserActivityViewSet, basename='user-activities')

urlpatterns = [
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('oauth/authorize/', AuthorizationView.as_view(), name='authorize'),
    path('oauth/token/', TokenView.as_view(), name='token'),
    path('auth/enable-2fa/', UserProfileViewSet.as_view({'post': 'enable_2fa'}), name='enable_2fa'),
    path('', include(router.urls)),
]