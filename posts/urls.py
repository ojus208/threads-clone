from django.urls import path
from .views import PostView
urlpatterns = [
    path('new/',PostView.as_view({"post":"create"}) )
]