
# 🛍️ E-Shop Backend API Documentation

## Overview

The e-shop backend is a RESTful API built with Node.js, designed to manage an e-commerce platform. It supports user authentication, product management, shopping cart operations, and order processing. The API utilizes Swagger for interactive documentation.

## 📁 Project Structure

- **`app.js`**: Main application entry point.
- **`models/`**: Database models.
- **`routers/`**: Route handlers for various endpoints.
- **`swagger.js`**: Swagger configuration for API documentation.
- **`swagger-output.json`**: Generated Swagger JSON documentation.

## ⚙️ Technologies Used

- Node.js
- Express.js
- Swagger
- PostgreSQL
- Passport.js

## 🛠️ Setup Instructions

1. Clone the repository:

   ```bash
   git clone https://github.com/NafisTahmid/e-shop-backend.git
   cd e-shop-backend
   ```

2. Install dependencies:

   ```bash
   npm install
   ```

3. Set up the database:

   - Create a PostgreSQL database.
   - Configure the database connection in `.env`.

4. Start the application:

   ```bash
   npm start
   ```

## 🧾 API Endpoints

### Authentication

- **POST** `/auth/login`: User login.
- **POST** `/auth/register`: User registration.

### Products

- **GET** `/products`: List all products.
- **GET** `/products/:id`: Get product details by ID.
- **POST** `/products`: Add a new product (Admin only).
- **PUT** `/products/:id`: Update product details (Admin only).
- **DELETE** `/products/:id`: Delete a product (Admin only).

### Cart

- **GET** `/cart`: View user's cart.
- **POST** `/cart`: Add item to cart.
- **PUT** `/cart/:id`: Update cart item quantity.
- **DELETE** `/cart/:id`: Remove item from cart.

### Orders

- **GET** `/orders`: List user's orders.
- **GET** `/orders/:id`: Get order details by ID.
- **POST** `/orders`: Create a new order.
- **PUT** `/orders/:id`: Update order status (Admin only).
- **DELETE** `/orders/:id`: Cancel an order.

## 📄 API Documentation

Interactive API documentation is available via Swagger UI:

```
http://localhost:3000/api-docs
```

---

## 📥 Download API Documentation

To download the API documentation as a `.zip` file, click the link below:

[Download API Documentation](sandbox:/mnt/data/e-shop-backend-api-documentation.zip)
