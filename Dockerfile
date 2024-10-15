# Use Node.js official image
FROM node:16

# Set the working directory inside the container
WORKDIR /app

# Copy package.json and package-lock.json into the container
COPY package*.json ./

# Install dependencies
RUN npm install

# Copy all project files into the container
COPY . .

# Compile TypeScript (if you're using TypeScript)
RUN npx tsc

# Expose the port for the service
EXPOSE 3000

# Start ProductService using ts-node and the correct path to index.ts
CMD ["npx", "ts-node", "ProductService/index.ts"]
