from django.urls import path
from . import views
from .views import index

urlpatterns = [
    path('', index, name='index'),
    path('resume/', views.resume, name='resume'),
    path('profile/', views.profile, name='profile'),
    path('contact/', views.contact, name='contact'),
]