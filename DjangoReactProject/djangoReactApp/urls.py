from django.urls import path, include
from .views import index, BlogViewSet, UserViewSet # BlogList, BlogDetails
from rest_framework.routers import DefaultRouter

router = DefaultRouter()
router.register('blogs', BlogViewSet, basename='blogs')
router.register('users', UserViewSet)
urlpatterns = [
    path('', index, name='index'),
    path('api/', include(router.urls)),
    # path('blogs/', BlogList.as_view()),
    # path('blogs/<int:pk>/', BlogDetails.as_view()),

]
