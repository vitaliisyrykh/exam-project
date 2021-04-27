FROM node:14.16.1-alpine3.13

ARG NODE_ENV="development"

RUN mkdir -p ./client

WORKDIR /client

COPY package*.json ./

COPY . .

EXPOSE 4000

RUN npm install
CMD npm start
