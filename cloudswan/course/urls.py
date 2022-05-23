from django.urls import path
from course import views


urlpatterns = [
    path('dashadmin',views.dashadmin,name="dashadmin"),
    path('dashcourse',views.dashcourse,name="dashcourse"),
    path('showcourse',views.showcourse,name="showcourse"),
    path('savecourse',views.savecourse,name="savecourse"),
    path('updatecourse/<int:id>',views.updatecourse),
    path('deletecourse/<int:id>',views.deletecourse),
    
]