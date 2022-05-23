from django import forms
from course.models import Admincourse


class AdmincourseForm(forms.ModelForm):
    class Meta:
        model = Admincourse
        fields = "__all__"
    