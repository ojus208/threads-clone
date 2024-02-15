
from django.db import models

from accounts.models import UserAccount, Profile

# Create your models here.

class post(models.Model):
    id = models.BigAutoField(primary_key=True)
    account = models.ForeignKey(UserAccount, on_delete=models.CASCADE, null=True)
    image = models.ImageField(upload_to='media/posts/', blank = True)
    text = models.TextField()
    repost = models.BooleanField(default=False)

    def __str__(self):
        return self.account.username + self.id
    


class Like(models.Model):
    id = models.AutoField(primary_key=True)
    by_user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    post_id = models.ForeignKey(post, on_delete=models.CASCADE, null=True)
    liked = models.BooleanField(default=True)

    def __str__(self) -> str:
        return self.by_user.username + self.id

class re_post(models.Model):
    id = models.AutoField(primary_key=True)
    by_user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    re_post = models.ForeignKey(post, on_delete=models.CASCADE)

    def __str__(self):
        return self.by_user.username + self.id
    




    

    
        

    