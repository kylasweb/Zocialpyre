from django.contrib import admin
from django.urls import path
from .views import landing_page

urlpatterns = [
    path('', landing_page, name='landing'),
    path('admin/', admin.site.urls),
]