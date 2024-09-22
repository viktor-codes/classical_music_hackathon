from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("register/", views.SignUpView.as_view(), name="register"),
    path('team/', views.team, name='team'),
]
