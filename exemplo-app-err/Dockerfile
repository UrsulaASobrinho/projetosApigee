FROM node:10

WORKDIR /user/scr/app

COPY package*.json ./

RUN npm install

COPY . .

EXPOSE 80

CMD ["npm", "start"]