from django.shortcuts import render

def challenge(request):
    return render(request, "challenge.html")
