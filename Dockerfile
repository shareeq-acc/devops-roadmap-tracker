FROM node:24-alpine

WORKDIR /app

COPY package.json ./
COPY src ./src/

RUN npm install

CMD ["node", "src/server.js"]


