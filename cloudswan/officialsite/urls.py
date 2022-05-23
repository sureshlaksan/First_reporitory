from django.urls import path,include
from officialsite import views


urlpatterns = [ 
    path('',views.login,name="login"),
    path('course',views.course,name="course"),
    path('home',views.home,name="home"),
    path('services',views.services,name="services"),
    path('career',views.career,name="career"),
    path('conduct',views.conduct,name="conduct"),
    path('forget',views.forget,name="forget"),
    path('digital',views.digi,name="digital")
    #path('validlogin',views.validlogin,name="validlogin")
    
]
