# node-taskmanger-api
`node-taskmanager-api` is built using Nodejs and Express framework. It follows a RESTFul API design architecture. For user signup and authentication, it uses Passportjs middleware.

## Motivation
The project has made an effort to build a very intuitive and easy-to-use RESTFul API for a task manager that can greatly simplify your project management and improve your development efficiency. Defining tasks in `node-taskmanager-api` is simple and intuitive. You can specify task names and status using a user-friendly syntax. This makes it easy to organize and manage complex projects.

## Features

`node-taskmanager-api` is a task built using Nodejs and Express framework. It follows a RESTFul API design architecture and for user signup and authentication it uses `passport-jwt`

Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped into any Express-based web application.

`passport-jwt` strategy lets you authenticate endpoints using a JSON web token. A JSON Web Token, popularly known as JWT, is an open standard that defines a compact way to share information between a client and a server securely. It is intended to be used to secure RESTful endpoints without sessions.

Unlike the traditional server-side sessions — which save a session ID in memory and return it to the client — this standard creates a self-contained and digitally signed token that is verified each time a request is made.

## Usage

## ⚙️ Installation

- Open CMD
  
- Change directory to desktop

  `cd desktop`
   
- Clone repository

  `git clone git@github.com:backendkolawole/node-taskmanager-api.git`

- Change the current directory

  `cd node-taskmanager-api`
  
- Install packages

  `npm install`

- Create a .env file in the root directory

  - Set up the `MONGO_URI` variable equal to the DB connection string
  - Set up the `PORT` variable
  - Set up the `JWT_SECET` variable
 
> [!NOTE]
> `JWT_SECRET` is a string or buffer containing the secret key for verifying the token's signature.

> [!IMPORTANT]
> To avoid port collisions, in the source code, the port value is `3000`



## Authentication Endpoints
For the endpoints that follow, the base path is shown as `/api/v1/users`

**POST /register**

Call this endpoint to sign up a new user. Use the authentication token in future calls to identify the user.

- Payload
  - username (required)
  - password (required)

- Possible responses


```
200 (OK)

{
  "msg": "User already exists. Please try logging in"
}

400 (Bad Request)

{
  "msg": "Please provide username and password"
}

201 (CREATED)

{
  "user": "username",
  "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWM2NGNlN2FkYWJlYjk4Njk4ZGZhMTQiLCJ1c2VybmFtZSI6InVzZXJuYW1lIiwiaWF0IjoxNzA3NDk0NjMyfQ.35BE1hUYA2lY3z2JOn90emY064_B3wphSl-ULW02pvc"
}
```

**POST /login**

Call this endpoint to log a user in. Use the authentication token in future calls to identify the user.

- Payload
  - email (required)
  - password (required)

- Possible responses

```
200 (OK)

{
    "user": "newuser1",
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NWM5ZTZlMmFmYTRiZDJlMjI3MGQxNWMiLCJ1c2VybmFtZSI6Im5ld3VzZXIxIiwiaWF0IjoxNzA3NzMxMTI1fQ.zXO66OjcuzE7-hG_iNOJm0khJ-YasGqxRPG9O3N3-80"
}

401 (Unauthorized)

{
    "msg": "Please provide username and password"
}

404 (Not Found)

{
    "username": "jhdfhsdf",
    "password": "password"
}

```

## Task API Endpoints

For the endpoints that follow, the base path is shown as `/api/v1`

Use the authentication token to identify the user.

- HTTP Header
  
` Authorization: Bearer 9944b09199c62bcf9418ad846dd0e4bbdfc6ee4b`


**POST /task**

Call this endpoint to create a new task.

Possible responses

```

201 (CREATED)

{
    "task": {
        "name": "first task",
        "completed": true,
        "_id": "65c9f0aa2ffa276952e09bb9",
        "__v": 0
    }
}


400 (Bad Request)

{
    "msg": "Please provide a name for this task"
}


401 (Unauthorized)

Unauthorized

```

**GET /task**

Call this endpoint to get all tasks

- Possible responses

```
200 (OK)

{
    "tasks": []
}


401 (Unauthorized)

Unauthorized

```

**GET /tasks/:id**

Call this endpoint to get a task with a specific id

Possible responses

```
200 (OK)

{
    "task": {
        "_id": "65c9f0aa2ffa276952e09bb9",
        "name": "first task",
        "completed": true,
        "__v": 0
    }
}


401 Unauthorized

Unauthorized


404 (Not Found)

{
    "msg": "No task with id: 65c9f0aa2ffa276952e09bb9"
}

```


**PATCH /task/:id**

Call this endpoint to update a task with a specific id

Possible responses

```
200 (OK)

{
    "task": {
        "_id": "65c9f0aa2ffa276952e09bb9",
        "name": "first task updated",
        "completed": true,
        "__v": 0
    }
}


401 (Unauthorized)

Unauthorized


404 (Not Found)

{
    "msg": "No task with id: 65c9f0aa2ffa276952e09bb9"
}

```

**DELETE /task/:id**

Call this endpoint to delete a task with a specific id

Possible responses

```
200 (OK)

{}


401 (Unauthorized)

Unauthorized


404 (Not Found)

{
    "msg": "No task with id: 65c9f0aa2ffa276952e09bb9"
}

```

## Contact

