FROM cypress/base:14

# Copy the app
WORKDIR /home/node/app

COPY . .

# Install the deps
RUN yarn install

# Run the tests
CMD ["yarn", "test"]
