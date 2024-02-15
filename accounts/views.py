

from rest_framework.viewsets import ViewSet, ModelViewSet
from .models import Profile
from .serializers import ProfileSerializer
from djoser.views import UserViewSet
from .models import UserAccount
from rest_framework.response import Response
from rest_framework import status
from rest_framework.decorators import api_view
from djoser.conf import settings

# Create your views here.

class ProfileViewSet(ModelViewSet):

    queryset = Profile.objects.all()
    serializer_class = ProfileSerializer


@api_view(['POST'])
def Signup(request):
    if request.method == 'POST':
        print(request)
        print(request.data)
        return Response({"working"})
    return Response({"response"})


# class UserView(UserViewSet):

#     def create(self, request, *args, **kwargs):
#         print("working")
#         print(request.data)
#         serializer = self.serializer_class(data=request.data)
#         print(serializer)
#         if serializer.is_valid():
#             user = serializer.save(*args, **kwargs)
#             context = {"user": user}
#             to = [self.get_user_email(user)]
#             if settings.SEND_ACTIVATION_EMAIL:
#                 settings.EMAIL.activation(self.request, context).send(to)
#             elif settings.SEND_CONFIRMATION_EMAIL:
#                 settings.EMAIL.confirmation(self.request, context).send(to)
#         return Response({"detail":"please send correct format data"})
        
        

    # def perform_create(self, request, *args, **kwargs):
    #     print("working")
    #     print(request.data)
    #     serializer = self.serializer_class(data=request.data)

    #     return super().perform_create(serializer)

        
    
    

class UserviewSetview(UserViewSet):


    def activation(self, request):
        print(request.data)
        print(type(request.data))
        serializer = self.get_serializer(data=request.data)
        serializer.is_valid(raise_exception=True)
        user = serializer.user
        user.is_active = True
        user.save()

        try:
            print("this is working")
            puser = UserAccount.objects.get(email=user)
            pdata = {"user":puser.id}
            print(pdata)
            profile = ProfileSerializer(data=pdata)
            if profile.is_valid():
                profile.save()
                return Response(data=profile.data, status=status.HTTP_201_CREATED)
            else:
                return Response(data=profile.errors, status=status.HTTP_400_BAD_REQUEST)
        except:
            return Response({"user is not able to create file"})

        return Response(status=status.HTTP_204_NO_CONTENT)
        

