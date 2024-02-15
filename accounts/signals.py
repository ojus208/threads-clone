from django.dispatch import receiver

from djoser.signals import user_activated

@receiver(user_activated)
def my_handler(user, request):
    print("getting signals")