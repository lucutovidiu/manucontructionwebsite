FROM node:10.17.0-alpine3.9 as nest_image_build_step
WORKDIR /app
COPY package.json package.json
RUN npm install
COPY . .
RUN npm run build
# ENTRYPOINT ["sh", "-c", "sleep 1800"]
# Using official nginx image as the base image
FROM nginx:1.25.3-alpine
# Copy compiled file from build stage
COPY --from=nest_image_build_step /app/dist/browser /usr/share/nginx/html
# bind nginx configuration
COPY /nginx/nginx.conf /etc/nginx/nginx.conf
# bind nginx mimetypes configuration
COPY /nginx/mime.types /etc/nginx/mime.types
# override default conf for nginx
COPY /nginx/default.conf /etc/nginx/conf.d/default.conf
# Expose Port 80
EXPOSE 80
# Start the Nginx server
CMD ["nginx", "-g", "daemon off;"]
