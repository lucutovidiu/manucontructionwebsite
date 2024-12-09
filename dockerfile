FROM node:10.17.0-alpine3.9 as nest_image
# RUN npm i g npm i -g @nestjs/cli
WORKDIR /app
COPY . .
RUN npm run build:ssr
# RUN npm run serve:ssr

ENTRYPOINT ["npm","run","serve:ssr"]
# ENTRYPOINT ["sh", "-c", "sleep 1800"]
