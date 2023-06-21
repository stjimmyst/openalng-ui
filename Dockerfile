FROM node:20
COPY . .
RUN npm install
CMD [ "npm", "start" ]
EXPOSE 3000