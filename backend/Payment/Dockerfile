FROM node:latest

WORKDIR /app

# install app dependencies
COPY . .

RUN npm install


EXPOSE 3000

ENTRYPOINT  [ "node", "server.js" ]

