FROM node:alpine

WORKDIR /app
COPY package.json .
RUN npm i --no-optional
COPY . .

CMD ["npm", "start"]
