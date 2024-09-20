from django.views.generic import ListView, CreateView, DetailView
from django.urls import reverse_lazy
from .models import Lesson
from .forms import LessonForm


class LessonListView(ListView):
    model = Lesson
    template_name = "lessons/lesson_list.html"
    context_object_name = "lessons"


class LessonCreateView(CreateView):
    model = Lesson
    form_class = LessonForm
    template_name = "lessons/lesson_form.html"
    success_url = reverse_lazy("lesson_list")


class LessonDetailView(DetailView):
    model = Lesson
    template_name = "lessons/lesson_detail.html"
    context_object_name = "lesson"
