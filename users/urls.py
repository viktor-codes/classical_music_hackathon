from django.urls import path
from django.contrib.auth.views import LogoutView
from . import views

name = "users"

urlpatterns = [
    path("", views.home, name="home"),
    path("register/", views.SignUpView.as_view(), name="register"),
    path('team/', views.team, name='team'),
]
