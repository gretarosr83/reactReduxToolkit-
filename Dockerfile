FROM node:latest

WORKDIR /appK

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 5173

CMD ["npm", "start" ]