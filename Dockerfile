FROM node:6.0.0

# Add files
RUN mkdir /app/
WORKDIR /app/

ADD css/ css/
ADD images/ images/
ADD jade/ jade/

# Install dependencies
RUN npm install

CMD ["node", "index.js"]
