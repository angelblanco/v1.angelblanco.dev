FROM cypress/base:12

# Copy the app
WORKDIR /home/node/app
COPY . .

# Install the deps
RUN yarn install

# Cypress test could be done in the build we dont want to run any process and
# will use it as a standalone builder/tester
RUN yarn test

CMD []
