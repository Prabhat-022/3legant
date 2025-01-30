FROM node:20-alpine

# desine working directory
WORKDIR /app

#copy all the source code to working directory
COPY package*.json ./

#install all the dependencies in docker container [clean install]
RUN npm ci


COPY . .
RUN npm run build