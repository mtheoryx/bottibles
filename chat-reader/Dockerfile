FROM node:12.4.0-alpine

WORKDIR /usr/app

# Install dependencies (Which does NOT change that frequently)
COPY ./app/package.json ./
RUN npm i --silent

# Copy over the application code (which changes more frequently)
COPY ./app .

# Expose ports
EXPOSE 9000

# Default command (can be overridden on cli and docker compose)
CMD ["node", "index.js"]
