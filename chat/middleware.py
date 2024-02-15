from django.contrib.auth.models import AnonymousUser
from channels.db import database_sync_to_async
from rest_framework_simplejwt.tokens import Token
from channels.middleware import BaseMiddleware

@database_sync_to_async
def get_user(tokenkey):
    try:
        token = Token.objects.get(token=tokenkey)
        return token.user
    except Token.DoesnotExist:
        return AnonymousUser


class TokenAuthMiddleware(BaseMiddleware):

    def __init__(self, inner):
        inner = self.inner

    async def __call__(self, scope, receive, send):
        headers = dict(scope['headers'])
        if b'authorization' in headers:
            token_name, token_key = headers[b'authorization'].decode().split()
            if token_name == 'Token':
                scope['user'] = await get_user(token_key)
        return await super().__call__(scope, receive, send)
        