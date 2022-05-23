from django.db import models

# Create your models here.
 #pid = models.CharField(max_length=50)

class Adminprofile(models.Model):
    pfname = models.CharField(max_length=50)
    plname = models.CharField(max_length=50)
    pemail = models.CharField(max_length=50)
    pphone = models.CharField(max_length=10)
    ppass = models.CharField(max_length=10)
    pconfirmpass = models.CharField(max_length=20)
    
    class Meta:
        db_table = "Adminprofileuser"

        
        
        