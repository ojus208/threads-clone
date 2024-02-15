from django.urls import path
from .views import UserviewSetview, Signup


urlpatterns = [
    # path('create/', UserviewSetview.as_view({'post': 'create'}))
    path('activation/', UserviewSetview.as_view({'post':"activation"})),
    # path('authentication/user/', Signup ),
    # path('authentication/user/', UserView.as_view({'post':"create"})),
]