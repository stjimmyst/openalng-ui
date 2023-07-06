FROM node:20
COPY . .
RUN rm package.json
RUN rm .env.development
RUN mv .env.deployment .env.development
RUN mn package-deployment.json package.json
RUN npm install
CMD [ "npm", "start" ]
EXPOSE 3000