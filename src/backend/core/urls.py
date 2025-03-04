from django.urls import path, include
from rest_framework.routers import DefaultRouter
from .views import (
    UserViewSet, RankViewSet, BinaryTreeViewSet, InvestmentPlanViewSet,
    InvestmentViewSet, CommissionViewSet, FeatureViewSet, TaskViewSet,
    AchievementViewSet, PoolViewSet, PoolParticipantViewSet, CustomTokenViewSet,
    UserTokenViewSet, TokenTransactionViewSet, WebsiteTemplateViewSet,
    WebsiteSectionViewSet, UserProfileViewSet, AnalyticsDataViewSet,
    UserActivityViewSet
)
from rest_framework_simplejwt.views import TokenObtainPairView, TokenRefreshView
from oauth2_provider.views import TokenView, AuthorizationView

urlpatterns = [
    path('auth/login/', TokenObtainPairView.as_view(), name='token_obtain_pair'),
    path('auth/refresh/', TokenRefreshView.as_view(), name='token_refresh'),
    path('oauth/authorize/', AuthorizationView.as_view(), name='authorize'),
    path('oauth/token/', TokenView.as_view(), name='token'),
    path('auth/enable-2fa/', UserProfileViewSet.as_view({'post': 'enable_2fa'}), name='enable_2fa'),
]