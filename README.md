
# API Documentation

## Project Overview
This backend project is built using Node.js with Express.js and MongoDB. It provides an API to handle various services such as managing products, categories, users, and orders.

## API Endpoints

### 1. **Products Routes**

#### **GET /api/products**
Fetch all products.

- **Response**:
```json
[
  {
    "_id": "60c72b1f9d1b8d0c08c1e1a5",
    "name": "Product Name",
    "price": 100,
    "category": "Category ID",
    "createdAt": "2021-07-16T08:50:00.000Z",
    "updatedAt": "2021-07-16T08:50:00.000Z"
  }
]
```

#### **GET /api/products/:id**
Fetch a single product by ID.

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1a5",
  "name": "Product Name",
  "price": 100,
  "category": "Category ID",
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### **POST /api/products**
Create a new product.

- **Request Body**:
```json
{
  "name": "Product Name",
  "price": 100,
  "category": "Category ID"
}
```

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1a5",
  "name": "Product Name",
  "price": 100,
  "category": "Category ID",
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### **PUT /api/products/:id**
Update an existing product by ID.

- **Request Body**:
```json
{
  "name": "Updated Product Name",
  "price": 120,
  "category": "New Category ID"
}
```

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1a5",
  "name": "Updated Product Name",
  "price": 120,
  "category": "New Category ID",
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T09:00:00.000Z"
}
```

#### **DELETE /api/products/:id**
Delete a product by ID.

- **Response**:
```json
{
  "message": "Product deleted successfully"
}
```

### 2. **Categories Routes**

#### **GET /api/categories**
Fetch all categories.

- **Response**:
```json
[
  {
    "_id": "60c72b1f9d1b8d0c08c1e1b6",
    "name": "Category Name",
    "createdAt": "2021-07-16T08:50:00.000Z",
    "updatedAt": "2021-07-16T08:50:00.000Z"
  }
]
```

#### **GET /api/categories/:id**
Fetch a single category by ID.

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1b6",
  "name": "Category Name",
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### **POST /api/categories**
Create a new category.

- **Request Body**:
```json
{
  "name": "Category Name"
}
```

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1b6",
  "name": "Category Name",
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

### 3. **Users Routes**

#### **GET /api/users**
Fetch all users.

- **Response**:
```json
[
  {
    "_id": "60c72b1f9d1b8d0c08c1e1a8",
    "username": "User Name",
    "email": "user@example.com",
    "createdAt": "2021-07-16T08:50:00.000Z",
    "updatedAt": "2021-07-16T08:50:00.000Z"
  }
]
```

#### **GET /api/users/:id**
Fetch a single user by ID.

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1a8",
  "username": "User Name",
  "email": "user@example.com",
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### **POST /api/users**
Create a new user.

- **Request Body**:
```json
{
  "username": "User Name",
  "email": "user@example.com",
  "password": "password123"
}
```

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1a8",
  "username": "User Name",
  "email": "user@example.com",
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### **PUT /api/users/:id**
Update an existing user by ID.

- **Request Body**:
```json
{
  "username": "Updated User Name",
  "email": "updateduser@example.com",
  "password": "newpassword123"
}
```

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1a8",
  "username": "Updated User Name",
  "email": "updateduser@example.com",
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T09:00:00.000Z"
}
```

### 4. **Orders Routes**

#### **GET /api/orders**
Fetch all orders.

- **Response**:
```json
[
  {
    "_id": "60c72b1f9d1b8d0c08c1e1aa",
    "userId": "User ID",
    "products": [
      {
        "productId": "Product ID",
        "quantity": 2
      }
    ],
    "createdAt": "2021-07-16T08:50:00.000Z",
    "updatedAt": "2021-07-16T08:50:00.000Z"
  }
]
```

#### **GET /api/orders/:id**
Fetch a single order by ID.

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1aa",
  "userId": "User ID",
  "products": [
    {
      "productId": "Product ID",
      "quantity": 2
    }
  ],
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### **POST /api/orders**
Create a new order.

- **Request Body**:
```json
{
  "userId": "User ID",
  "products": [
    { "productId": "Product ID", "quantity": 2 }
  ]
}
```

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1aa",
  "userId": "User ID",
  "products": [
    { "productId": "Product ID", "quantity": 2 }
  ],
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

### Authentication

#### **POST /api/auth/login**
Login and receive a JWT token.

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

## Swagger Documentation
You can also explore the Swagger-generated API documentation by visiting the `/api-docs` endpoint.
