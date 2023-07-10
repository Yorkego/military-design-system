FROM node:lts-bullseye-slim

WORKDIR /home/node

COPY . ./

RUN yarn

EXPOSE 8001

CMD ["bash", "-c", "yarn storybook"]