FROM node:latest as build-stage
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install --save --legacy-peer-deps
COPY . /usr/src/app
RUN npm run ng build --prod 

FROM nginx:1.17.10-alpine
RUN mkdir /app
COPY --from=build-stage /usr/src/app/ /app
COPY nginx.conf /etc/nginx/nginx.conf
EXPOSE 4100
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
