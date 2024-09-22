from django.shortcuts import render
from .forms import CustomUserCreationForm
from django.urls import reverse_lazy
from django.contrib.messages.views import SuccessMessageMixin
from django.views.generic.edit import CreateView


def home(request):
    return render(request, "index.html")

def team(request):
    return render(request, "team.html")


class SignUpView(SuccessMessageMixin, CreateView):
    template_name = "users/register.html"
    success_url = reverse_lazy("home")
    form_class = CustomUserCreationForm
    success_message = "Your profile was created successfully"
