FROM node:alpine
WORKDIR /app
COPY package*.json ./

# generated prisma files
COPY prisma ./prisma/

# COPY ENV variable
COPY .env ./

# COPY tsconfig.json file
COPY tsconfig.json ./

# COPY
COPY . .

RUN npm install -f

#Generate Prisma client.
RUN npx prisma generate

# Run and expose the server on port 3000
EXPOSE 8086

# A command to start the server
CMD ["npm", "run", "prisma:deploy:user-service"]