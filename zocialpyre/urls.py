from django.contrib import admin
from django.urls import path, include

urlpatterns = [
    path('admin/', admin.site.urls),
    path('api/', include('zocialpyre_api.urls')),
    path('', include('frontend.urls')),
]