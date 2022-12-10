# Stage 0, "build-stage", based on Node.js, to build and compile the frontend
FROM  node:latest as build
WORKDIR /app
COPY package*.json /app/
RUN npm install --save --legacy-peer-deps
COPY ./ /app/
ARG configuration=production
RUN npm run build -- --output-path=./dist/out --configuration $configuration
EXPOSE 4100
# Stage 1, based on Nginx, to have only the compiled app, ready for production with Nginx
FROM nginx:latest
COPY --from=build /src/app/build /share/nginx/html
EXPOSE 80
CMD ["nginx", "-g", "daemon off;"]`
