
from rest_framework.viewsets import ModelViewSet
from .models import Like, post, re_post
from .serializers import PostSerializer, LikeSerializer, Re_postSerializer
from rest_framework.permissions import IsAuthenticated, AllowAny
from rest_framework.response import Response
# from rest_framework import status
from rest_framework.decorators import action
# Create your views here.
from rest_framework.parsers import MultiPartParser



class PostView(ModelViewSet):
    queryset = post.objects.all()
    serializer_class = PostSerializer
    permission_classes = [AllowAny]
    parser_classes = [MultiPartParser]
    lookup_field = 'id'

    # def saveimg(img):
    #     image = ImageSerializer(data={"image":img})
    #     image.save()
    #     return image

    def create(self, request, *args, **kwargs):
        # user = request.user
        # data = {
        #     "text":request.data.get("text"),
        #     "account":user,
            
        # }
        # if request.data.get("image") :
        #     image = self.saveimg(request.data['image'])
        #     data["image"] = image
        #     print(image)
        print(request.data)
        # data = request.File
        # data['account'] = user
        # print(data)

        serializer = self.serializer_class(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response({"saved succesfully"}, status=201)
        return Response({"something went wrong"}, status=400)

    # @action(detail=False, methods=['POST'])
    # def like(self, request):
    #     account = request.user
    #     data = {
    #         "account":account,
    #         "liked":True
    #     }
    #     serializer = LikeSerializer(data=data)
    #     if serializer.is_valid():
    #         serializer.save()
    #         post = self.queryset.filter(id=request.data.get("id"))
    #         post.like = serializer
    #         post.save()

    #         return Response({"data":"like saved successuflly"}, status=201)
    #     return Response({"data":"error occoured"}, status=400)


        
        

    

    @action(detail=False,methods=['GET'])
    def get_post_by_user(self, request):
        queryset = post.objects.all().filter(account=request.user)
        return Response(self.serializer_class(queryset, many=True), status=200)


    @action(detail=False, methods=['GET'])
    def get_post_for_user(self, request):
        
        queryset = post.objects.all().filter()


class Likeview(ModelViewSet):
    serializer_class = LikeSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = ('post_id', 'by_user')

    def get_queryset(self, request):
        user = request.user
        queryset = Like.objects.filter(by_user=user, many=True)
        return queryset

    def create(self, request, *args, **kwargs):
        print("created")
        return super().create(request, *args, **kwargs)
    
    def destroy(self, request, *args, **kwargs):
        print("destroyed")
        return super().destroy(request, *args, **kwargs)

class re_postview(ModelViewSet):
    queryset = re_post.objects.all()
    serializer_class = Re_postSerializer
    permission_classes = [IsAuthenticated]
    lookup_field = ('post_id')

    def create(self, request, *args, **kwargs):
        print("created")
        return super().create(request, *args, **kwargs)
    
    def list(self, request, *args, **kwargs):
        post_id = request.data.get("post_id")
        data = self.queryset.filter(post_id = post_id, many=True)
        return Response({"data":data}, status=200)
    
        