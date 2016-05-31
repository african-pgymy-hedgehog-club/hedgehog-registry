FROM node:6.0.0

# Add files
RUN mkdir /app/
WORKDIR /app/

ADD css/ css/
ADD images/ images/
ADD jade/ jade/
ADD lib/ lib/
ADD js/ js/
ADD components/ components/
ADD routes/ routes/
ADD templates/ templates/
ADD index.js index.js

# Install dependencies
RUN npm install

CMD ["node", "index.js"]
