FROM node:22-alpine

WORKDIR /app

COPY package*.json .

RUN npm install

COPY . .

EXPOSE 4321

CMD [ "npm", "run", "dev" ]