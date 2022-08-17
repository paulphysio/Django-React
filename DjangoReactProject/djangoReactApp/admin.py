from django.contrib import admin
from .models import Blog
# Register your models here.
#admin.site.register(Blog)
@admin.register(Blog)
class BlogModel(admin.ModelAdmin):
    list_filter = ('blogUser', 'blogTitle', 'blogBody')    
    list_display = ('blogUser', 'blogTitle', 'blogBody')