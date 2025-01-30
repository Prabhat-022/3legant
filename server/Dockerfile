# FROM baseImage

FROM node:20-alpine

#set working directory
WORKDIR /app

#install dependencies
COPY package.json ./
RUN npm ci

#copy the content of the local directory to the working directory
COPY . .
RUN npm run build

EXPOSE 3000
CMD ["npm", "run", "dev"]

