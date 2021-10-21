FROM node:14-alpine as builder

# Copy the app
WORKDIR /home/node/app

COPY . .

# Install the deps
RUN yarn install

# Verify article integrity
RUN yarn blog verify:articles 

# Build static for production
RUN yarn build

# Disable jekyll procesing
RUN touch dist/.nojekyll

EXPOSE 8081

CMD ["yarn", "preview", "--port", "8081" , "--host", "0.0.0.0"]
