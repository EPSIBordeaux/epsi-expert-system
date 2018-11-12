FROM node:10-alpine

WORKDIR /app
COPY ./app/ /app
COPY ./package.json /app
COPY ./package-lock.json /app

RUN npm install --quiet

#USER node

EXPOSE 3000