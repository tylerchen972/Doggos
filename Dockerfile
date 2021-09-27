FROM node:14

ENV HOME /CSE442ProjectA

WORKDIR /CSE442ProjectA

COPY . .

RUN npm install

EXPOSE 5000

CMD ["node", "server.js"]

