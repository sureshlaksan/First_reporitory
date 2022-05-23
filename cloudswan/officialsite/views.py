from django.shortcuts import redirect, render
#from officialsite.models import Adminprofile

# Create your views here.

def login(request):
    return render(request,"index.html")
def course(request):
    return render(request,"course.html")
def home(request):
    return render(request,"home.html")
def services(request):
    return render(request,"service.html")
def career(request):
    return render(request,"career.html")
def conduct(request):
    return render(request,"conduct.html")
def forget(request):
    return render(request,"forget.html")
def digi(request):
    return render(request,"courses/digi.html")


   # validlogin
#def validlogin(request):
#    if request.method == "POST":  
#        txtfldlogEmailAddress = request.POST['txtfldlogEmailAddress'] 
#        txtfldlogpassword = request.POST['txtfldlogpassword'] 
#        if (Adminprofile.objects.filter(pemail=txtfldlogEmailAddress).exists() and Adminprofile.objects.filter(ppass=txtfldlogpassword).exists() ):
#            return render(request,'dashboard.html', {'username':txtfldlogEmailAddress})
#        else:
#            return render(request,'dashboard.html',  {'username':txtfldlogEmailAddress})
#    else:
#        return render(request,'dashboard.html', {'username':txtfldlogEmailAddress})

