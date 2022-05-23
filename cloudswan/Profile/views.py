from django.shortcuts import render,redirect
from Profile.forms import AdminprofileForm
from Profile.models import Adminprofile

# path('profile',views.profile,name=profile),
# path('showprofile',views.showprofile,name=showprofile),

def dashadmin(request):
    return render(request, "dashboard.html")

def profile(request):
    return redirect("showprofile")

def showprofile(request):
    allprofile = Adminprofile.objects.all()
    return render(request,"profile.html",{'profiledetails':allprofile})
    
def saveprofile(request):
    if request.method == "POST": 
        form = AdminprofileForm(request.POST)   
        if form.is_valid(): 
            try: 
               form.save() 
               return redirect('showprofile')  
            except:
               pass
    else:
        form = AdminprofileForm()
        return render(request,'profile.html', {'success_reg':'User is not registered!!!'})



def updateprofile(request,id):
    profileUpd = Adminprofile.objects.get(id=id)
    form = AdminprofileForm(request.POST,instance=profileUpd) 
    if form.is_valid(): 
       form.save() 
       return redirect("showprofile") 
    return render(request,'profile.html',{'success_reg':'Error while updation'})


def deleteprofile(request, id):  
    profileDel = Adminprofile.objects.get(id=id)  
    profileDel.delete()  
    return redirect("showprofile")