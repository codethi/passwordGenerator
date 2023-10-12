FROM ubuntu:latest

RUN apt-get update && apt-get install -y openssl

WORKDIR /certs

# generate a self-signed certificate
RUN openssl req -x509 -newkey rsa:4096 -keyout key.pem -out cert.pem -days 365 -nodes -subj "/CN=localhost"

CMD ["sleep", "infinity"]
