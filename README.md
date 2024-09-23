# Node.js Express Sequelize CRUD

This project is a simple CRUD (Create, Read, Update, Delete) application built using Node.js, Express, and Sequelize. It can be used as a foundation for projects requiring a REST API with an SQL database.

## About the Project

This project is designed to simplify the development of Node.js-based backend applications using SQL databases, specifically PostgreSQL. It demonstrates how to create a CRUD API using Sequelize as an ORM and PostgreSQL as the database. Functionalities include migrations, data seeding, and REST API documentation.

## Installation

Here are the steps to run this project locally or using Docker.

### Local Installation

1. **Clone the GitHub repository:**

   ```bash
   git clone https://github.com/ramadhan1299/nodejs-express-sequelize-crud.git

2. **Navigate to the project directory**
    ```bash
    cd nodejs-express-sequelize-crud

3. **Install dependencies**
    ```bash
    npm install

4. **Create a .env configuration file from the example**
    ```bash
    cp .env.example .env

5. **Set environment variables**

6. **Run database migrations with Sequelize**
    ```bash
    cd src
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all

7. **Start the application**
    ```bash
    npm start

### Docker Installation

1. **Clone the GitHub repository:**

   ```bash
   git clone https://github.com/ramadhan1299/nodejs-express-sequelize-crud.git

2. **Navigate to the project directory**
    ```bash
    cd nodejs-express-sequelize-crud

3. **Set environment variables in docker-compose.yml**

4. **Run Docker**
    ```bash
    docker-compose up --build -d

5. **Run database migrations with Sequelize**
    ```bash
    docker exec -it <id-container-app> sh
    cd src
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all

6. **Start the application**
    ```bash
    npm start

## API Reference

#### Get all products

```bash
  GET /api/products
```

#### Get product

```bash
  GET /api/products/:id
```

#### Create product

```bash
  POST /api/products
```
```bash
  {
    "name" : "tomato",
    "price": "10.99",
    "stock: : 100
  }
```

#### Update product

```bash
  PUT /api/products/:id
```
```bash
  {
    "name" : "tomato",
    "price": "10.99",
    "stock: : 100
  }
```

#### Delete product

```bash
  DELETE /api/products/:id
```
