
# from distutils.command.upload import upload
from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
# Create your models here.

class UserManager(BaseUserManager):
        def create_user(self, email, username,fname,lname, password=None):
        
            if not email:
                raise ValueError("Users must have an email address")

            user = self.model(
                email=self.normalize_email(email),
                username = username,
                fname = fname,
                lname = lname,
            )

            user.set_password(password)
            user.save(using=self._db)
            return user



class UserAccount(AbstractBaseUser, PermissionsMixin):
    email = models.EmailField(
        verbose_name="email field",
        max_length= 499,
        unique=True
    )
    username = models.CharField(max_length=499, unique=True)
    fname = models.CharField(max_length=499)
    lname = models.CharField(max_length=499, blank=True)
    # profile_dp = models.ImageField(upload_to = 'media/')
    is_active = models.BooleanField(default=True)
    is_admin = models.BooleanField(default=False)

    objects = UserManager()

    USERNAME_FIELD = 'email'

    REQUIRED_FIELDS = ['username', 'fname', 'lname']

    def __str__(self) -> str:
        return self.email


class Profile(models.Model):
    id = models.AutoField(primary_key=True)
    user = models.ForeignKey(UserAccount, on_delete=models.CASCADE)
    profile_image = models.ImageField(upload_to ="media/user/", blank=True, null=True)
    follower = models.ManyToManyField(UserAccount, related_name="follower")
    following = models.ManyToManyField(UserAccount, related_name="following")

    def __str__(self) -> str:
        return self.account.username

