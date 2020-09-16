# Latest official nodejs docker image
FROM node:12

# Setup the directory
WORKDIR /usr/src/OTRACK-API

# Install needed dependencies
COPY package*.json ./
RUN npm install

# Bundle code
COPY . .

# Expose default port
EXPOSE 8080