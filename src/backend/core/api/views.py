from rest_framework import viewsets
from rest_framework.response import Response
from .models import User, BinaryMatrix, Sponsor
from .serializers import UserSerializer, BinaryMatrixSerializer

class UserViewSet(viewsets.ModelViewSet):
    queryset = User.objects.all()
    serializer_class = UserSerializer

class BinaryMatrixViewSet(viewsets.ViewSet):
    def list(self, request):
        queryset = BinaryMatrix.objects.select_related(
            'user', 'left_child', 'right_child'
        ).all()
        serializer = BinaryMatrixSerializer(queryset, many=True)
        return Response(serializer.data)

class SponsorViewSet(viewsets.ModelViewSet):
    queryset = Sponsor.objects.all()
    serializer_class = SponsorSerializer

    def get_queryset(self):
        return super().get_queryset().prefetch_related('downline')