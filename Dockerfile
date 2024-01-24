FROM node:17-alpine

# Create app directory
WORKDIR /packages/forms-api
# COPY . .
COPY ./packages/forms-api /packages/forms-api

RUN npm install
RUN npm install ts-node

EXPOSE 8080


CMD [ "npm start " ]
#CMD [ "ts-node", "src/main.ts" ]
#CMD [ "node", "test-server.js" ]
