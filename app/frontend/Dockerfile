FROM node:16.14-alpine
WORKDIR /app-frontend

COPY package* ./

RUN npm install 

EXPOSE 3000

COPY . . 

CMD [ "npm", "start" ]