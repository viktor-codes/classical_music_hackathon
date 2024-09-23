from django.urls import path
from . import views

urlpatterns = [
    path("", views.home, name="home"),
    path("team/", views.team, name="team"),
    path("highscore/", views.highscore, name="highscore"),
    path("register/", views.SignUpView.as_view(), name="register"),
]
