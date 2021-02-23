[![Build Status](https://www.travis-ci.com/erickyvand/to-do-api.svg?branch=main)](https://www.travis-ci.com/erickyvand/to-do-api)
[![Coverage Status](https://coveralls.io/repos/github/erickyvand/to-do-api/badge.svg?branch=main)](https://coveralls.io/github/erickyvand/to-do-api?branch=main)

# To Do API

## A todo item is made of:

- Title
- Description
- Priority(LOW, MEDIUM, HIGH)
- CreateDate(date of creation of the todo item)
- ModifiedDate(date of modification of the todo item)

## API endpoints

- POST `/api/auth/signup`: _Create a user_
- POST `/api/auth/login`: _Login a user_
- POST `/api/todo`: _Create a to do item_
- GET `/api/todo/:todoId`: _View a to do item_
- GET `/api/todo`: _View many to do items_
- PATCH `/api/todo/:todoId`: _Update a to do item_
- DELETE `/api/todo/:todoId`: _Delete a to do item_
- SEARCH `/api/search`: _Search a to do item by title or description_

## Before testing this API locally, you must have

- [NodeJS](https://nodejs.org/en/)
- [PostgreSQL](https://www.postgresql.org/download/)
- [Postman](https://www.postman.com/downloads/) or any other application that test APIs
- [Docker](https://docs.docker.com/get-docker/) optional

## How to test this API locally?

- Open terminal in your computer
- cd to the directory of your choice
- Clone the repository by using this command `git clone https://github.com/erickyvand/to-do-api.git`
- cd to the repository folder. It should be `to-do-api` folder
- Run `npm install` to install all dependencies
- Create `.env` file on the root of the project folder
- Check examples of the environment variables in the `.env.example` file, copy them and paste it in `.env` file. Add a value of every environment variable.
- Run `npm run dev:server` to start the server
- The server will start on `http://localhost:4000`
- Use Postman or any other application that can test API.
- Or open a browser to test it using swagger by entering `http://localhost:4000/api-docs`

## The App has been deployed on Heroku

- [To do API](https://to-do-api-stage.herokuapp.com/)
- [Swagger documentation](https://to-do-api-stage.herokuapp.com/api-docs)

## How to run this API on Docker container?

### Build Docker image

- cd to project folder
- Run this command `docker build -t <image-name>:version .`
- Example: `docker build -t to-do-api:latest .`

### Run container

- Run this command `docker run --name <container-name> -d -p <any-port-of-your-choice>:4000 <image-name>:<version>`
- Example: `docker run --name to-do -d -p 4000:4000 to-do-api:latest`

## This API has tests cases

- Run `npm test` to see all tests cases

## Contributor

- **Iragena Eric** (_erickyvand_)
