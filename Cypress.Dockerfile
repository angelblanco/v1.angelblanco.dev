FROM cypress/base:14.17.3

# Copy the app
WORKDIR /home/node/app

COPY . .

# Install the deps
RUN yarn install

# Run the tests
CMD ["yarn", "test"]
