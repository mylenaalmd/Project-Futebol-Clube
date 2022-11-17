FROM node:16.14-alpine
WORKDIR /app-backend

COPY package* ./

RUN npm install 

EXPOSE 3001

COPY . . 

CMD [ "npm", "start" ]