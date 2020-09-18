FROM node:12-alpine as builder

# Copy the app
WORKDIR /home/node/app
COPY . .

# Install the deps
RUN yarn install

# Verify article integrity
RUN yarn blog verify:articles 

# Export for production
RUN yarn export:production

EXPOSE 8081

CMD ["yarn", "sirv:production", "--port", "8081" , "--host", "0.0.0.0"]
