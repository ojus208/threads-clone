from unittest import result
import requests
# createuser = 'http://localhost:8000/auth/users/'
# activation = 'http://localhost:8000/account/activation/'
login = 'http://localhost:8000/auth/jwt/create/'
# endpoint = 'http://localhost:8000/auth/users/me/'


# chat = 'http://localhost:8000/conversations/'
# startchat = chat + "start/"

# result = requests.post(login, 
# # headers=
# # {
# #             'Content-Type': 'application/json',
# #             'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2NTExMDkwLCJpYXQiOjE3MDY1MTA3OTAsImp0aSI6ImQ0MGNhM2RkODA2ZjRjOWNiYTdmZjFhZjE0ZWYwNTk2IiwidXNlcl9pZCI6MX0.1I1nxwUZENqi6drfEU1u5aC-koJu4F_zATqAUEiU6wE',
# #         }

# # json={"uid":"MQ","token":"c1qf56-1c6aea6f63b398f24975f4fe0c9d8559"}
# json={"email":"ojusoni@gmail.com", 'password':"ojus9090"}
# )


# result = requests.post(createuser,
# json={
# "email":"ojus@gmail.com",
# 'username':"hello", 
# 'fname':"akash" ,
# 'lname':"hola", 
# 'password':"ojus9090" , 
# 're_password':"ojus9090"}
#  )




# result = requests.post(startchat, json={"username":"akash"}, headers=
# {
#             'Content-Type': 'application/json',
#             'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA2NDY4NDczLCJpYXQiOjE3MDY0NjgxNzMsImp0aSI6IjIxMDk1ZmUyNTMxMTQ3ZjliN2MzYzExODhjNmMzN2ZlIiwidXNlcl9pZCI6MX0.6uAivQzN8V0cDVeaapXkcXTc0WT8IqEP8lLKQ7AXFXk',
#         })


ws = 'ws://localhost:8000/ws/chat/1'

# result = requests.get

newpost = 'http://localhost:8000/post/new/'

result = requests.post(newpost,json={"text":"this is my first thread"}, headers={
    
           'Content-Type': 'application/json',
           'Authorization': 'JWT eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbl90eXBlIjoiYWNjZXNzIiwiZXhwIjoxNzA3MzMxMzY5LCJpYXQiOjE3MDczMzEwNjksImp0aSI6Ijc0ZWQzMWUxNWJhNjQ2MWI5MjY2ZjA5NTFhOGI1OGQxIiwidXNlcl9pZCI6MX0.1iWByAfkOKhwiUcp3BRq4HxTd44oXlNMlPzv_JsmwdU'
})

print(result.text)