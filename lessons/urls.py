from django.urls import path
from .views import LessonListView, LessonCreateView, LessonDetailView

urlpatterns = [
    path("", LessonListView.as_view(), name="lesson_list"),
    path("new/", LessonCreateView.as_view(), name="lesson_create"),
    path("<int:pk>/", LessonDetailView.as_view(), name="lesson_detail"),
]
