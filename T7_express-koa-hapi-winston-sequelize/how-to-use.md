# frameworks-examples

! Start instruction:
1) docker-compose up --build.

Before running app create `.env` file and add there 

1. JWT_SECRET_KEY - this key will be using for encrypting and decrypting of token
2. DATABASE_NAME
3. DATABASE_PASSWORD
4. DATABASE_USER


Can be launched with 

```
docker-compose up --build
```

Also there are postman collection with all requests from the app.
Create post environment variable `PORT` before using it. Put there values
`3000` (express), `3001` (hapi) or `3002` (koa) for testing of specific framework.

App supports live reloading and debugging. Launch app and go to 

```
chrome://inspect
```

in google chrome browser to attach debugger (don't forget to add 9222 port
 to config on this page).
