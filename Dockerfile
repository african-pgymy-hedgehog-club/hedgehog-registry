FROM node:10.0.0

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
ADD package.json package.json

# Install dependencies
# RUN npm i -g jspm
RUN npm install
# RUN jspm install -y

CMD ["node", "index.js"]
