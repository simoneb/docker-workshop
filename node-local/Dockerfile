FROM node:alpine

WORKDIR /app
COPY **/*.js *.json ./
RUN npm install
CMD npm start
EXPOSE 8080
