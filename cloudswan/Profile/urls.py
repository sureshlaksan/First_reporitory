from django.urls import path
from Profile import views



urlpatterns = [
    path('dashadmin',views.dashadmin,name="dashadmin"),
    path('profile',views.profile,name="profile"),
    path('showprofile',views.showprofile,name="showprofile"),
    path('saveprofile',views.saveprofile,name="saveprofile"),
    path('updateprofile/<int:id>',views.updateprofile),
    path('deleteprofile/<int:id>',views.deleteprofile),
]
