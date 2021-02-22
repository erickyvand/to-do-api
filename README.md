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
- POST `/api/auth/signup`

## How to test this API locally?
- Open terminal in your computer
- cd to the directory of your choice
- Clone the repository by using this command `git clone https://github.com/erickyvand/to-do-api.git`
- cd to the repository folder. It should be `to-do-api` folder
- Run `npm install` to install all dependencies
- Create `.env` file on the root of the project folder
- Check examples of the environment variables in the `.env.example` file, copy them and paste it in `.env` file. Add a value of every environment variable.
- Run `npm run dev-server` to start the server

## How to run this API on Docker container?
### Build Docker image
- cd to project folder
- Run this command `docker build -t <image-name>:version .`
- Example: `docker build -t to-do-api:latest .`

### Run container
- Run this command `docker run --name <container-name> -d -p <any-port-of-your-choice>:4000 <image-name>:<version>`
- Example: `docker run --name to-do -d -p 4000:4000 to-do-api:latest`
