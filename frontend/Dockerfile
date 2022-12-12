FROM node:latest as build-stage
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install --save --legacy-peer-deps
COPY . /usr/src/app
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration

FROM nginx:1.17.10-alpine
RUN mkdir /app
COPY --from=build-stage /app/dist/out/ /usr/share/nginx/html
COPY nginx.conf /etc/nginx/conf.d/default.conf
EXPOSE 4100
CMD ["/usr/sbin/nginx", "-g", "daemon off;"]
