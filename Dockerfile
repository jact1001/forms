FROM node:17-alpine

# Create app directory
WORKDIR /packages/forms-api
# COPY . .
COPY ./packages/forms-api /packages/forms-api

RUN npm install
RUN npm install ts-node
RUN npx prisma migrate dev --name init
RUN npm run build
EXPOSE 8080


#CMD [ "npm start " ] #No funciona
#CMD [ "ts-node", "src/test-main.ts" ] #no funciona
#CMD [ "node", "test-server.js" ] #si funciona
#CMD [ "node", "bin/test-main.js" ] #si funciona
CMD [ "node", "bin/main.js" ]