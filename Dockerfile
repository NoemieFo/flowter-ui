FROM node
WORKDIR /opt
COPY ./* /opt/
RUN yarn install
EXPOSE 3000
CMD ["yarn", "start"]
