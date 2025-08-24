
# API Documentation

## Project Overview
This backend API project is built using **Node.js**, **Express.js**, and **MongoDB**. It provides an API for managing products, categories, users, and orders for an e-commerce platform. The API is structured under the `/api/v1` endpoint.

### Tech Stack
- **Backend**: Node.js with Express.js
- **Database**: MongoDB (with Mongoose ORM)
- **Authentication**: JWT (JSON Web Token) for secure API access
- **File Uploads**: Multer (for handling file uploads and storing product images on the file system)
- **API Documentation**: Swagger UI for easy exploration of the API

## How to Use the API

### Base URL
All API requests are prefixed with `/api/v1`.  
For example:  
`https://yourdomain.com/api/v1/`

### Authentication
The API uses **JWT** for authentication. You will need to obtain a JWT token by logging in with valid credentials. The token should be included in the **Authorization** header for all protected routes.

- **Login to get JWT token**:
  - **POST** `/api/v1/auth/login`
  - **Request Body**:
    ```json
    {
      "email": "user@example.com",
      "password": "password123"
    }
    ```
  - **Response**:
    ```json
    {
      "token": "JWT_TOKEN_HERE"
    }
    ```

- **Authorization Header for Protected Routes**:
  Include the JWT token in the Authorization header for protected routes.
  ```bash
  Authorization: Bearer JWT_TOKEN_HERE
  ```

## API Endpoints

### 1. Order Routes

#### GET /api/v1/orders
Fetch all orders.

- **Response**:
```json
[
  {
    "_id": "60c72b1f9d1b8d0c08c1e1a7",
    "orderItems": ["orderItem1", "orderItem2"],
    "shippingAddress1": "Address 1",
    "shippingAddress2": "Address 2",
    "city": "City",
    "zip": "12345",
    "country": "Country",
    "phone": "1234567890",
    "status": "pending",
    "totalPrice": 200,
    "user": "userID",
    "dateOrdered": "2021-07-16T08:50:00.000Z",
    "updatedAt": "2021-07-16T08:50:00.000Z"
  }
]
```

#### GET /api/v1/orders/:id
Fetch a single order by ID.

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1a7",
  "orderItems": ["orderItem1", "orderItem2"],
  "shippingAddress1": "Address 1",
  "shippingAddress2": "Address 2",
  "city": "City",
  "zip": "12345",
  "country": "Country",
  "phone": "1234567890",
  "status": "pending",
  "totalPrice": 200,
  "user": "userID",
  "dateOrdered": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### POST /api/v1/orders
Create a new order.

- **Request Body**:
```json
{
  "orderItems": ["orderItem1", "orderItem2"],
  "shippingAddress1": "Address 1",
  "shippingAddress2": "Address 2",
  "city": "City",
  "zip": "12345",
  "country": "Country",
  "phone": "1234567890",
  "status": "pending",
  "totalPrice": 200,
  "user": "userID",
  "discount": {
    "type": "percentage",  // or "fixed"
    "value": 10  // Discount value in percentage or fixed amount
  }
}
```

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1a7",
  "orderItems": ["orderItem1", "orderItem2"],
  "shippingAddress1": "Address 1",
  "shippingAddress2": "Address 2",
  "city": "City",
  "zip": "12345",
  "country": "Country",
  "phone": "1234567890",
  "status": "pending",
  "totalPrice": 180,  // Updated total after applying discount
  "user": "userID",
  "dateOrdered": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### PUT /api/v1/orders/:id
Update an existing order's status by ID.

- **Request Body**:
```json
{
  "status": "shipped"
}
```

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1a7",
  "status": "shipped",
  "updatedAt": "2021-07-16T09:00:00.000Z"
}
```

#### DELETE /api/v1/orders/:id
Delete an order by ID.

- **Response**:
```json
{
  "message": "Order deleted successfully"
}
```

#### GET /api/v1/orders/get/userorders/:userid
Fetch all orders for a specific user by user ID.

- **Response**:
```json
[
  {
    "_id": "60c72b1f9d1b8d0c08c1e1a7",
    "orderItems": ["orderItem1", "orderItem2"],
    "shippingAddress1": "Address 1",
    "shippingAddress2": "Address 2",
    "city": "City",
    "zip": "12345",
    "country": "Country",
    "phone": "1234567890",
    "status": "pending",
    "totalPrice": 200,
    "user": "userID",
    "dateOrdered": "2021-07-16T08:50:00.000Z",
    "updatedAt": "2021-07-16T08:50:00.000Z"
  }
]
```

### 2. User Routes

#### GET /api/v1/users
Fetch all users.

- **Response**:
```json
[
  {
    "_id": "60c72b1f9d1b8d0c08c1e1b5",
    "name": "User Name",
    "email": "user@example.com",
    "phone": "1234567890",
    "address": "Street, Apartment, City",
    "isAdmin": true,
    "createdAt": "2021-07-16T08:50:00.000Z",
    "updatedAt": "2021-07-16T08:50:00.000Z"
  }
]
```

#### GET /api/v1/users/:id
Fetch a single user by ID.

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1b5",
  "name": "User Name",
  "email": "user@example.com",
  "phone": "1234567890",
  "address": "Street, Apartment, City",
  "isAdmin": true,
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### POST /api/v1/users
Create a new user.

- **Request Body**:
```json
{
  "name": "User Name",
  "email": "user@example.com",
  "password": "password123",
  "phone": "1234567890",
  "address": "Street, Apartment, City",
  "isAdmin": false
}
```

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1b5",
  "name": "User Name",
  "email": "user@example.com",
  "phone": "1234567890",
  "address": "Street, Apartment, City",
  "isAdmin": false,
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### POST /api/v1/users/login
Login a user.

- **Request Body**:
```json
{
  "email": "user@example.com",
  "password": "password123"
}
```

- **Response**:
```json
{
  "message": "Login successful",
  "token": "JWT_TOKEN_HERE"
}
```

#### GET /api/v1/users/get/count
Get the total count of users.

- **Response**:
```json
{
  "total": 50
}
```

#### DELETE /api/v1/users/:id
Delete a user by ID.

- **Response**:
```json
{
  "message": "User deleted successfully"
}
```

---

