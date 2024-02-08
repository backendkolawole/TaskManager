# node-taskmanger-api
node-taskmanager-api is built using Nodejs and Express framework. It follows a RESTFul API design architecture. For user signup and authentication, it uses Passportjs middleware.

## Motivation
The project has made an effort to build a very intuitive and easy-to-use RESTFul API for a task manager that can greatly simplify your project management and improve your development efficiency. Defining tasks in node-taskmanager-api is simple and intuitive. You can specify task names and status using a user-friendly syntax. This makes it easy to organize and manage complex projects.

## Goal


## Features
node-taskmanager-api is a task built using Nodejs and Express framework. It follows a RESTFul API design architecture and for user signup and authentication it uses `passport-jwt`

Passport is authentication middleware for Node.js. Extremely flexible and modular, Passport can be unobtrusively dropped into any Express-based web application.

A JSON Web Token, popularly known as JWT, is an open standard that defines a compact way for securely sharing information between two parties: a client and a server.

`passport-jwt` strategy lets you authenticate endpoints using a JSON web token. It is intended to be used to secure RESTful endpoints without sessions.

Unlike the traditional server-side sessions — which save a session ID in memory and return it to the client — this standard creates a self-contained and digitally signed token that is verified each time a request is made.

## ⚙️ Installation

## Usage

Defining tasks in `node-taskmanager-api` is simple and intuitive and makes it easy to organize and manage complex projects.

## Task API Endpoints

**POST /task**

Call this endpoint to create a new task

**GET /task**

Call this endpoint to get all tasks

**GET /task/:id**

Call this endpoint to get a task with a specific id

**PATCH /task/:id**

Call this endpoint to update a task with a specific id

**DELETE /task/:id**

Call this endpoint to delete a task with a specific id

## Authentication Endpoints

**POST /signup**

Call this endpoint to sign up a new user 

**POST /login**

Call this endpoint to log in as a user. Use the authentication token in future calls to identify the user.

**GET /logout**

Call this endpoint to log out an authenticated user

**GET /users/me**

Call this endpoint after logging in and obtaining an authorization token to learn more about the user


## Contact

