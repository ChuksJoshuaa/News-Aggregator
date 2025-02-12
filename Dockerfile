FROM node:20

WORKDIR /src

COPY package*.json ./

# Remove node_modules and package-lock.json if they exist
RUN rm -rf node_modules package-lock.json

# Install dependencies using npm
RUN npm install --force

COPY . .

EXPOSE 5173

# Set the command to run the application
CMD ["npm", "run", "dev"]