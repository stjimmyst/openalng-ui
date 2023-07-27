FROM node:20
COPY . .
RUN rm package.json
RUN rm .env.development
RUN rm ./public/index.html
RUN mv .env.deployment .env.development
RUN mv package-deployment.json package.json
RUN mv public/index.html.prod public/index.html
RUN npm install
CMD [ "npm", "start" ]
EXPOSE 3000