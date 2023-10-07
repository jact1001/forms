FROM node:17-alpine

# Create app directory
WORKDIR /usr/src/app

# COPY . .
COPY ./packages/forms-api /usr/src/app

RUN npm install

EXPOSE 8080

# CMD [ "ts-node", "src/main.ts" ]
CMD [ "node", "test-server.js" ]
