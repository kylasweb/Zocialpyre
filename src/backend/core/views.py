from rest_framework import viewsets, permissions, status
from rest_framework.decorators import action
from rest_framework.response import Response
from django.db import models
from .models import (
    User, Rank, BinaryTree, InvestmentPlan, Investment,
    Commission, Feature, Task, Achievement, Pool, PoolParticipant,
    CustomToken, UserToken, TokenTransaction, WebsiteTemplate,
    WebsiteSection, UserProfile, AnalyticsData, UserActivity
)
from .serializers import (
    UserSerializer, RankSerializer, BinaryTreeSerializer,
    InvestmentPlanSerializer, InvestmentSerializer, CommissionSerializer,
    FeatureSerializer, TaskSerializer, AchievementSerializer,
    PoolSerializer, PoolParticipantSerializer, CustomTokenSerializer,
    UserTokenSerializer, TokenTransactionSerializer, WebsiteTemplateSerializer,
    WebsiteSectionSerializer, UserProfileSerializer, AnalyticsDataSerializer,
    UserActivitySerializer
)

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer
    permission_classes = [permissions.IsAuthenticated]

    @action(detail=True, methods=['get'])
    def downline(self, request, pk=None):
        user = self.get_object()
        binary_tree = BinaryTree.objects.filter(parent__user=user)
        serializer = BinaryTreeSerializer(binary_tree, many=True)
        return Response(serializer.data)

class RankViewSet(viewsets.ModelViewSet):
    queryset = Rank.objects.all()
    serializer_class = RankSerializer
    permission_classes = [permissions.IsAdminUser]

class InvestmentPlanViewSet(viewsets.ModelViewSet):
    queryset = InvestmentPlan.objects.all()
    serializer_class = InvestmentPlanSerializer
    permission_classes = [permissions.IsAuthenticated]

class InvestmentViewSet(viewsets.ModelViewSet):
    serializer_class = InvestmentSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return Investment.objects.all()
        return Investment.objects.filter(user=self.request.user)

class CommissionViewSet(viewsets.ModelViewSet):
    serializer_class = CommissionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return Commission.objects.all()
        return Commission.objects.filter(user=self.request.user)

class FeatureViewSet(viewsets.ModelViewSet):
    queryset = Feature.objects.all()
    serializer_class = FeatureSerializer
    permission_classes = [permissions.IsAdminUser]

class TaskViewSet(viewsets.ModelViewSet):
    serializer_class = TaskSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return Task.objects.all()
        return Task.objects.filter(
            models.Q(assigned_to=self.request.user) | 
            models.Q(created_by=self.request.user)
        )

class AchievementViewSet(viewsets.ModelViewSet):
    serializer_class = AchievementSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return Achievement.objects.all()
        return Achievement.objects.filter(user=self.request.user)

class PoolViewSet(viewsets.ModelViewSet):
    queryset = Pool.objects.all()
    serializer_class = PoolSerializer
    permission_classes = [permissions.IsAuthenticated]

class PoolParticipantViewSet(viewsets.ModelViewSet):
    serializer_class = PoolParticipantSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return PoolParticipant.objects.all()
        return PoolParticipant.objects.filter(user=self.request.user)

class CustomTokenViewSet(viewsets.ModelViewSet):
    queryset = CustomToken.objects.all()
    serializer_class = CustomTokenSerializer
    permission_classes = [permissions.IsAdminUser]

class UserTokenViewSet(viewsets.ModelViewSet):
    serializer_class = UserTokenSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return UserToken.objects.all()
        return UserToken.objects.filter(user=self.request.user)

class TokenTransactionViewSet(viewsets.ModelViewSet):
    serializer_class = TokenTransactionSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return TokenTransaction.objects.all()
        return TokenTransaction.objects.filter(
            models.Q(sender=self.request.user) |
            models.Q(receiver=self.request.user)
        )

class WebsiteTemplateViewSet(viewsets.ModelViewSet):
    queryset = WebsiteTemplate.objects.all()
    serializer_class = WebsiteTemplateSerializer
    permission_classes = [permissions.IsAdminUser]

class WebsiteSectionViewSet(viewsets.ModelViewSet):
    queryset = WebsiteSection.objects.all()
    serializer_class = WebsiteSectionSerializer
    permission_classes = [permissions.IsAdminUser]

class UserProfileViewSet(viewsets.ModelViewSet):
    serializer_class = UserProfileSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return UserProfile.objects.all()
        return UserProfile.objects.filter(user=self.request.user)

    @action(detail=False, methods=['post'])
    def enable_2fa(self, request):
        profile = self.get_queryset().first()
        if not profile:
            return Response(
                {"error": "Profile not found"},
                status=status.HTTP_404_NOT_FOUND
            )
        profile.two_factor_enabled = True
        profile.save()
        return Response({"status": "2FA enabled successfully"})

class AnalyticsDataViewSet(viewsets.ModelViewSet):
    serializer_class = AnalyticsDataSerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return AnalyticsData.objects.all()
        return AnalyticsData.objects.filter(user=self.request.user)

class UserActivityViewSet(viewsets.ModelViewSet):
    serializer_class = UserActivitySerializer
    permission_classes = [permissions.IsAuthenticated]

    def get_queryset(self):
        if self.request.user.is_staff:
            return UserActivity.objects.all()
        return UserActivity.objects.filter(user=self.request.user)