FROM node

WORKDIR /src/usr/

COPY . .

EXPOSE 5001

RUN npm i
RUN npm run build

CMD ["npm", "start"]