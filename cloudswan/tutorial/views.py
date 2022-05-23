from django.shortcuts import render

def tutorial(request):
    return render(request,"tutorialmanagement.html")
