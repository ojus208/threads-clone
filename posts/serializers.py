from dataclasses import fields
from rest_framework.serializers import ModelSerializer
from .models import post, re_post, Like


class PostSerializer(ModelSerializer):
    class Meta:
        model = post
        fields = '__all__'
        depth = 1



class Re_postSerializer(ModelSerializer):
    class Meta:
        model = re_post
        fields = "__all__"

class LikeSerializer(ModelSerializer):
    class Meta:
        model = Like
        fields = "__all__"


