FROM node:alpine

WORKDIR /app
COPY . .
RUN yarn 
RUN yarn build
CMD ./node_modules/.bin/serve -s build
EXPOSE 5000