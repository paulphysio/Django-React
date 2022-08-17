from django.db import models
from django.contrib.auth.models import User
# Create your models here.
class Blog(models.Model):
    blogUser = models.ForeignKey(User, on_delete=models.CASCADE)
    blogTitle = models.CharField(max_length=200)    
    blogBody = models.CharField(max_length=200)

    def __str__(self) -> str:
        return self.blogTitle