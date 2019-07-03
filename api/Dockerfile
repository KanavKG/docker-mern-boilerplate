# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4

# Setting the working directory to /api
WORKDIR /api

# copying package.json into the container at /api
COPY package*.json /api/

# installing dependencies
RUN npm install

# Copying the current directory contents into the container at /api
COPY . /api/

# Make port 3000 available to the world for communication
EXPOSE 80

# Run the app when the container launches
CMD ["npm", "start"]