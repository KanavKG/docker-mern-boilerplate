# Use a lighter version of Node as a parent image
FROM mhart/alpine-node:8.11.4

# Setting the working directory to /client
WORKDIR /client

# copying package.json into the container at /client
COPY package*.json /client/

# installing dependencies
RUN npm install

# Make port 3000 available to the world for communication
EXPOSE 3000

# Run the app when the container launches
CMD ["npm", "start"]