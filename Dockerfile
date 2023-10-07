FROM node:17-alpine

# Create app directory
WORKDIR /app

# COPY . .
COPY ./packages/forms-api /app/packages/forms-api

RUN npm install

EXPOSE 8080

# CMD [ "ts-node", "src/main.ts" ]
CMD [ "node", "test-server.js" ]
