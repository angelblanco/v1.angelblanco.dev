FROM node:16-alpine as builder

# Copy the app
WORKDIR /home/node/app

# First copy deps for caching
ADD package.json package.json
ADD yarn.lock yarn.lock
RUN yarn install 

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

CMD ["yarn", "sirv", "--port", "8081" , "--host", "0.0.0.0"]
