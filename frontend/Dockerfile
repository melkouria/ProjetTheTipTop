FROM node:latest as build-stage
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install --save --legacy-peer-deps

FROM nginx:alpine
#!/bin/sh

RUN cp ./.nginx/nginx.conf /etc/nginx/nginx.conf
## Remove default nginx index page
RUN rm -rf /usr/share/nginx/html/*
COPY --from=build-stage /usr/src/app /app
COPY . /usr/src/app
EXPOSE 4100
ENTRYPOINT ["nginx", "-g", "daemon off;"]



RUN mkdir /app

