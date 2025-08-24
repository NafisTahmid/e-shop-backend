
# **Project Documentation: Backend System with API Endpoints and Checkout Process**

## **Project Overview**

This backend project is built using Node.js and is designed to handle API requests for various services. The system is modular with separate components for models, routes, and utilities, and uses Swagger for API documentation.

## **Project Structure**

The project follows a structured approach to manage routes, models, and helpers. The core structure consists of the following components:

- **app.js**: Main entry point for initializing the server, middleware, and routes.
- **helper/**: Utility functions such as error handling and data validation.
- **models/**: Defines data models using Mongoose (for MongoDB).
- **routers/**: Contains route files for different API services.
- **public/**: Serves static files (images, CSS).
- **swagger.js**: Swagger configuration for automatic API documentation generation.

## **API Endpoints Overview**

Here’s a summary of all the available API endpoints, the HTTP methods they support, and their descriptions:

### **1. User Routes**

#### `GET /api/users`
- **Description**: Fetch all users.
- **Response**:
    ```json
    [
      {
        "id": "1",
        "name": "John Doe",
        "email": "john@example.com"
      }
    ]
    ```

#### `POST /api/users`
- **Description**: Create a new user.
- **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```
- **Response**:
    ```json
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

#### `GET /api/users/:id`
- **Description**: Fetch a single user by ID.
- **Response**:
    ```json
    {
      "id": "1",
      "name": "John Doe",
      "email": "john@example.com"
    }
    ```

#### `PUT /api/users/:id`
- **Description**: Update user information by ID.
- **Request Body**:
    ```json
    {
      "name": "John Updated",
      "email": "john_updated@example.com"
    }
    ```
- **Response**:
    ```json
    {
      "id": "1",
      "name": "John Updated",
      "email": "john_updated@example.com"
    }
    ```

#### `DELETE /api/users/:id`
- **Description**: Delete user by ID.
- **Response**:
    ```json
    {
      "message": "User deleted successfully"
    }
    ```

### **2. Auth Routes**

#### `POST /api/auth/register`
- **Description**: Register a new user.
- **Request Body**:
    ```json
    {
      "name": "John Doe",
      "email": "john@example.com",
      "password": "password123"
    }
    ```
- **Response**:
    ```json
    {
      "message": "User registered successfully"
    }
    ```

#### `POST /api/auth/login`
- **Description**: Login to the system and get a token.
- **Request Body**:
    ```json
    {
      "email": "john@example.com",
      "password": "password123"
    }
    ```
- **Response**:
    ```json
    {
      "token": "your-jwt-token"
    }
    ```

### **3. Product Routes**

#### `GET /api/products`
- **Description**: Fetch all products.
- **Response**:
    ```json
    [
      {
        "id": "101",
        "name": "Product 1",
        "price": 100,
        "category": "Electronics"
      }
    ]
    ```

#### `POST /api/products`
- **Description**: Create a new product.
- **Request Body**:
    ```json
    {
      "name": "Product 1",
      "price": 100,
      "category": "Electronics"
    }
    ```
- **Response**:
    ```json
    {
      "id": "101",
      "name": "Product 1",
      "price": 100,
      "category": "Electronics"
    }
    ```

#### `GET /api/products/:id`
- **Description**: Fetch a single product by ID.
- **Response**:
    ```json
    {
      "id": "101",
      "name": "Product 1",
      "price": 100,
      "category": "Electronics"
    }
    ```

#### `PUT /api/products/:id`
- **Description**: Update a product's details by ID.
- **Request Body**:
    ```json
    {
      "name": "Updated Product 1",
      "price": 150
    }
    ```
- **Response**:
    ```json
    {
      "id": "101",
      "name": "Updated Product 1",
      "price": 150,
      "category": "Electronics"
    }
    ```

#### `DELETE /api/products/:id`
- **Description**: Delete product by ID.
- **Response**:
    ```json
    {
      "message": "Product deleted successfully"
    }
    ```

### **4. Order Routes**

#### `POST /api/orders`
- **Description**: Create a new order.
- **Request Body**:
    ```json
    {
      "user_id": "1",
      "product_ids": ["101", "102"],
      "quantity": [1, 2],
      "total_price": 350
    }
    ```
- **Response**:
    ```json
    {
      "order_id": "2001",
      "status": "Pending",
      "user_id": "1",
      "product_ids": ["101", "102"],
      "total_price": 350
    }
    ```

#### `GET /api/orders/:id`
- **Description**: Fetch an order by ID.
- **Response**:
    ```json
    {
      "order_id": "2001",
      "user_id": "1",
      "product_ids": ["101", "102"],
      "status": "Pending",
      "total_price": 350
    }
    ```

#### `PUT /api/orders/:id`
- **Description**: Update the status of an order by ID (e.g., change status to "Shipped").
- **Request Body**:
    ```json
    {
      "status": "Shipped"
    }
    ```
- **Response**:
    ```json
    {
      "order_id": "2001",
      "status": "Shipped",
      "user_id": "1",
      "product_ids": ["101", "102"],
      "total_price": 350
    }
    ```

#### `DELETE /api/orders/:id`
- **Description**: Delete an order by ID.
- **Response**:
    ```json
    {
      "message": "Order deleted successfully"
    }
    ```

### **5. Checkout Routes**

#### `POST /api/checkout`
- **Description**: Initiate the checkout process.
- **Request Body**:
    ```json
    {
      "order_id": "2001",
      "payment_method": "Credit Card",
      "shipping_address": "123 Main St, City, Country"
    }
    ```
- **Response**:
    ```json
    {
      "checkout_id": "3001",
      "order_id": "2001",
      "status": "Checkout initiated",
      "total_price": 350,
      "payment_status": "Pending"
    }
    ```

#### `POST /api/checkout/confirm`
- **Description**: Confirm the payment and complete the checkout.
- **Request Body**:
    ```json
    {
      "checkout_id": "3001",
      "payment_status": "Completed"
    }
    ```
- **Response**:
    ```json
    {
      "message": "Payment successful, order confirmed",
      "checkout_id": "3001",
      "payment_status": "Completed"
    }
    ```

---

## **Routes File Structure**

The **routers/** directory contains the route files for each feature or resource. Each route file defines the HTTP methods and their corresponding actions.

### **1. User Routes** (`routers/userRoutes.js`)
This file contains routes for user management. It includes routes like fetching users, creating, updating, and deleting users.

### **2. Auth Routes** (`routers/authRoutes.js`)
This file contains routes for user authentication, including registration and login.

### **3. Product Routes** (`routers/productRoutes.js`)
This file contains routes for product management. It includes routes to fetch, create, update, and delete products.

### **4. Order Routes** (`routers/orderRoutes.js`)
This file contains routes for order management. It includes routes to create, fetch, update, and delete orders.

### **5. Checkout Routes** (`routers/checkoutRoutes.js`)
This file contains routes for the checkout process. It includes routes to initiate and confirm payment for orders.

---

## **Common Commands**

- **Start the development server**: `npm start`
- **Install dependencies**: `npm install`
- **Generate Swagger documentation**: This is automatically generated when the server starts.

## **Swagger API Documentation**

Swagger has been integrated into the project for generating and serving API documentation. You can view the interactive API documentation at the following endpoint:

- **Swagger UI**: `http://localhost:3000/api-docs`

---

## **Future Enhancements**

- Add authentication using JWT or OAuth.
- Implement rate limiting and logging for better error tracking and security.
- Add a caching mechanism for frequently accessed resources.
