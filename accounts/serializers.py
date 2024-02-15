
from rest_framework.serializers import ModelSerializer
from .models import Profile, UserAccount
from djoser.serializers import UserCreateSerializer


class ProfileSerializer(ModelSerializer):
    class Meta:
        model = Profile
        fields = ["id","user"]



class UserCreateSerializer(UserCreateSerializer):
    class Meta:
        model = UserAccount
        fields = "__all__"


# class Act
        

         

    