FROM node:16-alpine

WORKDIR /app

RUN npm install --global http-server

COPY package.json .
RUN npm i

COPY . .

RUN npm run build

EXPOSE 8080

CMD [ "http-server", "build/" ]

