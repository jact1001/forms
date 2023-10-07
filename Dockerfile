FROM node:17-alpine

# Create app directory
WORKDIR /packages/forms-api

COPY . .

RUN npm install

EXPOSE 8080

// CMD [ "ts-node", "src/main.ts" ]
CMD [ "node", "test-server.js" ]
