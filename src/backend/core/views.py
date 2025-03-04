from rest_framework import viewsets, permissions
from rest_framework.decorators import action
from rest_framework.response import Response
from .models import (
    User, Rank, BinaryTree, InvestmentPlan, Investment,
    Commission, Feature, Task, Achievement
)
from .serializers import (
    UserSerializer, RankSerializer, BinaryTreeSerializer,
    InvestmentPlanSerializer, InvestmentSerializer, CommissionSerializer,
    FeatureSerializer, TaskSerializer, AchievementSerializer
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