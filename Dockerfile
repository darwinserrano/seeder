FROM node:12.8.0-alpine

WORKDIR /app

COPY package.json /app/package.json

RUN npm i -g nodemon

RUN npm install

COPY . /app

CMD ["npm", "start"]
