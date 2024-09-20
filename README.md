# Node.js Express Sequelize CRUD

Proyek ini adalah aplikasi CRUD (Create, Read, Update, Delete) sederhana yang dibangun menggunakan Node.js, Express, dan Sequelize. Aplikasi ini dapat digunakan sebagai dasar untuk proyek yang membutuhkan API REST dengan database SQL.

## Tentang Proyek

Proyek ini dibuat untuk memudahkan pengembangan aplikasi backend berbasis Node.js dengan menggunakan database SQL, khususnya PostgreSQL. Aplikasi ini mendemonstrasikan bagaimana cara membuat API CRUD dengan Sequelize sebagai ORM, dan PostgreSQL sebagai basis data. Fungsionalitas termasuk migrasi, seeding data, serta dokumentasi REST API.

## Instalasi

Berikut adalah langkah-langkah untuk menjalankan proyek ini secara lokal atau menggunakan Docker.

### Instalasi Lokal

1. **Clone repository GitHub:**

   ```bash
   git clone https://github.com/ramadhan1299/nodejs-express-sequelize-crud.git

2. **Masuk ke direktori proyek**
    ```bash
    cd nodejs-express-sequelize-crud

3. **Instal dependensi**
    ```bash
    npm install

4. **Buat file konfigurasi .env dari contoh**
    ```bash
    cp .env.example .env

5. **Atur variabel environment**

6. **Jalankan migrasi database dengan Sequelize**
    ```bash
    cd src
    npx sequelize-cli db:create
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all

7. **Jalankan aplikasi**
    ```bash
    npm start

### Instalasi dengan Docker

1. **Clone repository GitHub:**

   ```bash
   git clone https://github.com/ramadhan1299/nodejs-express-sequelize-crud.git

2. **Masuk ke direktori proyek**
    ```bash
    cd nodejs-express-sequelize-crud

3. **Atur variabel environment di docker-compose.yml**

4. **Jalankan Docker**
    ```bash
    docker-compose up --build -d

5. **Jalankan migrasi database dengan Sequelize**
    ```bash
    docker exec -it <id-container-app> sh
    cd src
    npx sequelize-cli db:migrate
    npx sequelize-cli db:seed:all

6. **Jalankan aplikasi**
    ```bash
    npm start

## API Reference

#### Get all product

```bash
  GET /api/products
```

#### Get product

```bash
  GET /api/products/:id
```

#### Create item

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
