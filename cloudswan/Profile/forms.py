from django import forms
from Profile.models import Adminprofile #just import the model class

class AdminprofileForm(forms.ModelForm):
    class Meta:
        model = Adminprofile
        fields =  ["pfname", "plname", "pemail", "pphone", "ppass", "pconfirmpass"]