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

# Github error page workaround
RUN cp dist/404/index.html dist/404.html

# Disable jekyll procesing
RUN touch dist/.nojekyll

EXPOSE 8081

CMD ["yarn", "sirv", "--port", "8081" , "--host", "0.0.0.0"]
