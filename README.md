# docker-mern-boilerplate

## About the app
This is a boilerplate for a containerized MERN Application. This consists of a Client which serves the FrontEnd (using React), the API (in Node/Express), and the database (MongoDB). All these nodes run seperately on a single node using `docker-compose`.

## How to run the App
1. In your terminal, navigate to the `api` directory.
2. Run `npm install` to install all dependencies.
3. Navitage to the `client` directory.
4. Run `npm install` to install all dependencies.
5. Run `docker-compose up --build` in the home directory
6. open your browser to http://localhost:3000/.
7. If the webpage says `API is working properly`, the API is working correctly.
8. If the webpage says `Database is connected`, the MongoDB database is connected.

--------------------------------
## Docker-compose commands: 

FROM

The base image for building a new image. This command must be on top of the dockerfile.

MAINTAINER

Optional, it contains the name of the maintainer of the image.

RUN

Used to execute a command during the build process of the docker image.

ADD

Copy a file from the host machine to the new docker image. There is an option to use an URL for the file, docker will then download that file to the destination directory.

ENV

Define an environment variable.

CMD

Used for executing commands when we build a new container from the docker image.

ENTRYPOINT

Define the default command that will be executed when the container is running.

WORKDIR

This is directive for CMD command to be executed.

USER

Set the user or UID for the container created with the image.

VOLUME

Enable access/linked directory between the container and the host machine.
