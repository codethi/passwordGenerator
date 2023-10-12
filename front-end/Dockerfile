FROM node

WORKDIR /tmp/react

COPY . .

RUN npm i

RUN npm run build

RUN mkdir -p /var/www/html
RUN mv dist/* /var/www/html

WORKDIR /

RUN rm -rf /tmp/react