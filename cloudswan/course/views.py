from django.shortcuts import  redirect,render
from course.forms import AdmincourseForm
from course.models import Admincourse


def dashadmin(request):
    return render(request, "dashboard.html")

def dashcourse(request):
    return redirect("/showcourse")

def showcourse(request):
    allcourse = Admincourse.objects.all()
    return render(request,"dashcourse.html",{'coursedetails':allcourse})

def savecourse(request):
    if request.method == "POST":
        courseform = AdmincourseForm(request.POST)
        if courseform.is_valid():
            try:
                courseform.save()
                return redirect('/showcourse')
            except:
                pass
    else:
        courseform = AdmincourseForm()
        return render(request,'dashcourse.html',{'success_reg':'User is not registered!!!'}) 
    
    
def updatecourse(request,id):
    courseupd = Admincourse.objects.get(id=id)
    courform = AdmincourseForm(request.POST,instance=courseupd)
    if courform.is_valid():
        courform.save()
        return redirect("/showcourse")
    return render(request,"dashcourse.html",{'success_reg':'Error while updation'})

def deletecourse(request,id):
    coursedel  = Admincourse.objects.get(id=id)
    coursedel.delete()
    return render("/showcourse")
        
    
            
        
        
