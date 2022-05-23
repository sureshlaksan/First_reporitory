from django.db import models

# Create your models here.

class Admincourse(models.Model):
    coursename = models.CharField(max_length=50),
    subname = models.CharField(max_length=50),
    category = models.CharField(max_length=50),
    description =  models.CharField(max_length=50),
    Noofchapter = models.IntegerField(50),
    chaptername =  models.CharField(max_length=100),
    course_duration = models.CharField(max_length=50),
    price = models.IntegerField(50)
    
    class Meta:
        db_table = "Admincourse"
    
    
    

