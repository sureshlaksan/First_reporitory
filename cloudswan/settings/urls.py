from django.urls import path
from settings import views


urlpatterns = [
    path('settings',views.settings,name="settings"),
]
