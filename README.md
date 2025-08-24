
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

#### **POST** `/auth/login`
- **Description**: User login to obtain a JWT token for authentication.
- **Request Body**:
  ```json
  {
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "token": "JWT_TOKEN_HERE"
    }
    ```
  - **401 Unauthorized**:
    ```json
    {
      "message": "Invalid credentials"
    }
    ```

#### **POST** `/auth/register`
- **Description**: Register a new user account.
- **Request Body**:
  ```json
  {
    "name": "John Doe",
    "email": "user@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "message": "User registered successfully"
    }
    ```
  - **400 Bad Request**:
    ```json
    {
      "message": "Email already exists"
    }
    ```

### Products

#### **GET** `/products`
- **Description**: List all products available on the platform.
- **Response**:
  - **200 OK**:
    ```json
    [
      {
        "id": 1,
        "name": "Product 1",
        "description": "Description of Product 1",
        "price": 29.99,
        "category": "Category A",
        "stock": 100
      },
      {
        "id": 2,
        "name": "Product 2",
        "description": "Description of Product 2",
        "price": 49.99,
        "category": "Category B",
        "stock": 50
      }
    ]
    ```

#### **GET** `/products/:id`
- **Description**: Get product details by product ID.
- **Request Parameters**:
  - `id` (integer) - The ID of the product.
- **Response**:
  - **200 OK**:
    ```json
    {
      "id": 1,
      "name": "Product 1",
      "description": "Description of Product 1",
      "price": 29.99,
      "category": "Category A",
      "stock": 100
    }
    ```

#### **POST** `/products`
- **Description**: Add a new product (Admin only).
- **Request Body**:
  ```json
  {
    "name": "New Product",
    "description": "New product description",
    "price": 59.99,
    "category": "Category C",
    "stock": 200
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "message": "Product added successfully"
    }
    ```

#### **PUT** `/products/:id`
- **Description**: Update product details (Admin only).
- **Request Parameters**:
  - `id` (integer) - The ID of the product to update.
- **Request Body**:
  ```json
  {
    "name": "Updated Product Name",
    "description": "Updated description",
    "price": 39.99,
    "category": "Category A",
    "stock": 150
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Product updated successfully"
    }
    ```

#### **DELETE** `/products/:id`
- **Description**: Delete a product by its ID (Admin only).
- **Request Parameters**:
  - `id` (integer) - The ID of the product to delete.
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Product deleted successfully"
    }
    ```

### Cart

#### **GET** `/cart`
- **Description**: View the items in the user's cart.
- **Response**:
  - **200 OK**:
    ```json
    [
      {
        "productId": 1,
        "quantity": 2,
        "totalPrice": 59.98
      }
    ]
    ```

#### **POST** `/cart`
- **Description**: Add an item to the cart.
- **Request Body**:
  ```json
  {
    "productId": 1,
    "quantity": 2
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "message": "Item added to cart"
    }
    ```

#### **PUT** `/cart/:id`
- **Description**: Update the quantity of an item in the cart.
- **Request Parameters**:
  - `id` (integer) - The ID of the cart item.
- **Request Body**:
  ```json
  {
    "quantity": 3
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Cart item updated successfully"
    }
    ```

#### **DELETE** `/cart/:id`
- **Description**: Remove an item from the cart.
- **Request Parameters**:
  - `id` (integer) - The ID of the cart item to remove.
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Item removed from cart"
    }
    ```

### Orders

#### **GET** `/orders`
- **Description**: List all orders made by the user.
- **Response**:
  - **200 OK**:
    ```json
    [
      {
        "orderId": 1,
        "status": "pending",
        "totalPrice": 150.00,
        "items": [
          {
            "productId": 1,
            "quantity": 2
          }
        ]
      }
    ]
    ```

#### **GET** `/orders/:id`
- **Description**: Get order details by order ID.
- **Request Parameters**:
  - `id` (integer) - The ID of the order.
- **Response**:
  - **200 OK**:
    ```json
    {
      "orderId": 1,
      "status": "pending",
      "totalPrice": 150.00,
      "items": [
        {
          "productId": 1,
          "quantity": 2
        }
      ]
    }
    ```

#### **POST** `/orders`
- **Description**: Create a new order.
- **Request Body**:
  ```json
  {
    "cartItems": [
      {
        "productId": 1,
        "quantity": 2
      }
    ],
    "address": "123 Main St, City, Country"
  }
  ```
- **Response**:
  - **201 Created**:
    ```json
    {
      "message": "Order created successfully"
    }
    ```

#### **PUT** `/orders/:id`
- **Description**: Update the status of an order (Admin only).
- **Request Parameters**:
  - `id` (integer) - The ID of the order.
- **Request Body**:
  ```json
  {
    "status": "shipped"
  }
  ```
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Order status updated successfully"
    }
    ```

#### **DELETE** `/orders/:id`
- **Description**: Cancel an order by its ID.
- **Request Parameters**:
  - `id` (integer) - The ID of the order to cancel.
- **Response**:
  - **200 OK**:
    ```json
    {
      "message": "Order cancelled successfully"
    }
    ```

## 📄 API Documentation

Interactive API documentation is available via Swagger UI:

```
http://localhost:3000/api-docs
```

---
