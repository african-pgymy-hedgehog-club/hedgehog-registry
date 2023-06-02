FROM node:10.0.0

# Create app directory
RUN mkdir /app/
WORKDIR /app/

ENV NODE_ENV=dev

RUN npm install -g nodemon

CMD ["npm", "run", "dev"]
