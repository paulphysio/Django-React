from rest_framework import serializers
from .models import Blog
from django.contrib.auth.models import User
from rest_framework.authtoken.views import Token

""" class BlogSerializer(serializers.Serializer):
    
    blogUser = serializers.CharField(max_length = 200)    
    blogTitle = serializers.CharField(max_length = 200)    
    blogBody = serializers.CharField(max_length = 200)

    def create(self, validated_data):
        return Blog.objects.create(validated_data)

    def update(self, instance, validated_data):
        instance.blogTitle = validated_data.get('blogTitle', instance.blogTitle)        
        instance.blogBody = validated_data.get('blogBody', instance.blogBody) """

class BlogSerializer(serializers.ModelSerializer):
    class Meta:
        model = Blog
        fields = ['id', 'blogUser', 'blogTitle', 'blogBody'] 

class UserSesrializer(serializers.ModelSerializer):
    class Meta:
        model = User
        fields = ['id', 'username', 'password']

        extra_kwargs = {'password':{
            'write_only':True,
            'required': True
        }}
    def create(self, validated_data):
        user = User.objects.create_user(**validated_data)
        Token.objects.create(user=user)
        return user