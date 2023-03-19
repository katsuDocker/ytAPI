FROM --platform=linux/amd64 node:16.19.0-alpine

WORKDIR /app
COPY ./app ./
RUN npm install

EXPOSE 1980

CMD "npm" "start"