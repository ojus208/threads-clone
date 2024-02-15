from django.db import models

# Create your models here.

class Notification(models.Model):
    id = models.AutoField(primary_key=True)
    notification_text = models.CharField(max_length=999)
    