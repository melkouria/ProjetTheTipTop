FROM node:latest as build-stage
RUN mkdir -p /usr/src/app
WORKDIR /usr/src/app
COPY package.json /usr/src/app
RUN npm install --save --legacy-peer-deps
COPY . /usr/src/app
EXPOSE 4100
CMD ["npm", "start"]
FROM nginx:latest
RUN mkdir /app
COPY --from=build-stage /app/dist/my-app/ /app
COPY nginx.conf /etc/nginx/nginx.conf
USER nginx
