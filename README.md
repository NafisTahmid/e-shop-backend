
# Full API Documentation

## Project Overview

This backend project is built using **Node.js** and **MongoDB**. It provides a set of RESTful APIs to manage **Users**, **Products**, **Categories**, and **Orders**. The project uses **Express.js** as the web framework and **Mongoose** for MongoDB object modeling.

The API follows a REST architecture and returns JSON responses for ease of use with frontend applications. The documentation below provides detailed descriptions of the endpoints, the required request formats, expected responses, and error handling for each route.

---

## **API Endpoints**

### **1. Products Routes**

#### **GET /api/products**
- **Description**: Fetch all products from the database.
- **Request**: No request body is required.
- **Response**:
  - **200 OK**: Returns an array of products, each containing `_id`, `name`, `price`, and `category`.
  ```json
  [
    {
      "_id": "67890",
      "name": "Product Name",
      "price": 25.99,
      "category": "Electronics"
    }
  ]
  ```
  - **404 Not Found**: If no products exist in the database, the response will be:
  ```json
  {
    "message": "Products not found"
  }
  ```

#### **GET /api/products/:id**
- **Description**: Fetch a single product by its unique ID.
- **Request**: The `id` parameter is required in the URL.
- **Response**:
  - **200 OK**: Returns the details of the specified product.
  ```json
  {
    "_id": "67890",
    "name": "Product Name",
    "price": 25.99,
    "category": "Electronics"
  }
  ```
  - **404 Not Found**: If the product with the provided ID is not found, the response will be:
  ```json
  {
    "message": "Product not found"
  }
  ```

#### **POST /api/products**
- **Description**: Create a new product.
- **Request Body**: A JSON object containing the product details.
  ```json
  {
    "name": "New Product",
    "price": 29.99,
    "category": "Electronics"
  }
  ```
- **Response**:
  - **201 Created**: If the product is successfully created, the response will return the newly created product with its `_id`.
  ```json
  {
    "_id": "98765",
    "name": "New Product",
    "price": 29.99,
    "category": "Electronics"
  }
  ```

#### **PUT /api/products/:id**
- **Description**: Update an existing product by its ID.
- **Request**: The `id` parameter is required in the URL. The request body should contain the updated fields.
  ```json
  {
    "name": "Updated Product",
    "price": 19.99,
    "category": "Home Appliances"
  }
  ```
- **Response**:
  - **200 OK**: If the update is successful, it will return the updated product.
  ```json
  {
    "_id": "67890",
    "name": "Updated Product",
    "price": 19.99,
    "category": "Home Appliances"
  }
  ```

#### **DELETE /api/products/:id**
- **Description**: Delete a product by its ID.
- **Request**: The `id` parameter is required in the URL.
- **Response**:
  - **200 OK**: If the product is successfully deleted, the response will be:
  ```json
  {
    "message": "Product deleted successfully"
  }
  ```
  - **404 Not Found**: If the product is not found, the response will be:
  ```json
  {
    "message": "Product not found"
  }
  ```

### **2. Categories Routes**

#### **GET /api/categories**
- **Description**: Fetch all product categories.
- **Request**: No request body is required.
- **Response**:
  - **200 OK**: Returns an array of categories, each containing `_id` and `name`.
  ```json
  [
    {
      "_id": "11223",
      "name": "Electronics"
    }
  ]
  ```

#### **GET /api/categories/:id**
- **Description**: Fetch a single category by its unique ID.
- **Request**: The `id` parameter is required in the URL.
- **Response**:
  - **200 OK**: Returns the details of the specified category.
  ```json
  {
    "_id": "11223",
    "name": "Electronics"
  }
  ```
  - **404 Not Found**: If the category with the provided ID is not found, the response will be:
  ```json
  {
    "message": "Category not found"
  }
  ```

#### **POST /api/categories**
- **Description**: Create a new category.
- **Request Body**: A JSON object containing the category name.
  ```json
  {
    "name": "Home Appliances"
  }
  ```
- **Response**:
  - **201 Created**: If the category is successfully created, the response will return the newly created category.
  ```json
  {
    "_id": "22334",
    "name": "Home Appliances"
  }
  ```

#### **PUT /api/categories/:id**
- **Description**: Update a category by its ID.
- **Request**: The `id` parameter is required in the URL. The request body should contain the updated category name.
  ```json
  {
    "name": "Updated Category"
  }
  ```
- **Response**:
  - **200 OK**: If the update is successful, it will return the updated category.
  ```json
  {
    "_id": "11223",
    "name": "Updated Category"
  }
  ```

#### **DELETE /api/categories/:id**
- **Description**: Delete a category by its ID.
- **Request**: The `id` parameter is required in the URL.
- **Response**:
  - **200 OK**: If the category is successfully deleted, the response will be:
  ```json
  {
    "message": "Category deleted successfully"
  }
  ```

### **3. Users Routes**

#### **GET /api/users**
- **Description**: Fetch all users from the database.
- **Request**: No request body is required.
- **Response**:
  - **200 OK**: Returns an array of users, each containing `_id`, `name`, and `email`.
  ```json
  [
    {
      "_id": "12345",
      "name": "John Doe",
      "email": "john@example.com"
    }
  ]
  ```

#### **GET /api/users/:id**
- **Description**: Fetch a single user by their unique ID.
- **Request**: The `id` parameter is required in the URL.
- **Response**:
  - **200 OK**: Returns the details of the specified user.
  ```json
  {
    "_id": "12345",
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```
  - **404 Not Found**: If the user with the provided ID is not found, the response will be:
  ```json
  {
    "message": "User not found"
  }
  ```

#### **POST /api/users**
- **Description**: Create a new user.
- **Request Body**: A JSON object containing the user's details.
  ```json
  {
    "name": "John Doe",
    "email": "john@example.com",
    "password": "password123"
  }
  ```
- **Response**:
  - **201 Created**: If the user is successfully created, the response will return the newly created user.
  ```json
  {
    "_id": "12345",
    "name": "John Doe",
    "email": "john@example.com"
  }
  ```

#### **PUT /api/users/:id**
- **Description**: Update a user's information by their ID.
- **Request**: The `id` parameter is required in the URL. The request body should contain the fields to be updated.
  ```json
  {
    "name": "Updated Name",
    "email": "updated@example.com"
  }
  ```
- **Response**:
  - **200 OK**: If the update is successful, it will return the updated user.
  ```json
  {
    "_id": "12345",
    "name": "Updated Name",
    "email": "updated@example.com"
  }
  ```

#### **DELETE /api/users/:id**
- **Description**: Delete a user by their ID.
- **Request**: The `id` parameter is required in the URL.
- **Response**:
  - **200 OK**: If the user is successfully deleted, the response will be:
  ```json
  {
    "message": "User deleted successfully"
  }
  ```

### **4. Orders Routes**

#### **GET /api/orders**
- **Description**: Fetch all orders from the database.
- **Request**: No request body is required.
- **Response**:
  - **200 OK**: Returns an array of orders, each containing order details like `_id`, `user`, `items`, and `status`.
  ```json
  [
    {
      "_id": "54321",
      "user": "John Doe",
      "items": ["Product A", "Product B"],
      "status": "Shipped"
    }
  ]
  ```

#### **GET /api/orders/:id**
- **Description**: Fetch a single order by its ID.
- **Request**: The `id` parameter is required in the URL.
- **Response**:
  - **200 OK**: Returns the details of the specified order.
  ```json
  {
    "_id": "54321",
    "user": "John Doe",
    "items": ["Product A", "Product B"],
    "status": "Shipped"
  }
  ```

#### **POST /api/orders**
- **Description**: Create a new order.
- **Request Body**: A JSON object containing the order details, such as the user and the items ordered.
  ```json
  {
    "user": "John Doe",
    "items": ["Product A", "Product B"],
    "status": "Pending"
  }
  ```
- **Response**:
  - **201 Created**: If the order is successfully created, the response will return the newly created order.
  ```json
  {
    "_id": "65432",
    "user": "John Doe",
    "items": ["Product A", "Product B"],
    "status": "Pending"
  }
  ```

#### **PUT /api/orders/:id**
- **Description**: Update an order by its ID.
- **Request**: The `id` parameter is required in the URL. The request body should contain the updated order details.
  ```json
  {
    "status": "Shipped"
  }
  ```
- **Response**:
  - **200 OK**: If the update is successful, it will return the updated order.
  ```json
  {
    "_id": "54321",
    "user": "John Doe",
    "items": ["Product A", "Product B"],
    "status": "Shipped"
  }
  ```

#### **DELETE /api/orders/:id**
- **Description**: Delete an order by its ID.
- **Request**: The `id` parameter is required in the URL.
- **Response**:
  - **200 OK**: If the order is successfully deleted, the response will be:
  ```json
  {
    "message": "Order deleted successfully"
  }
  ```

---

## **Authentication**

- **JWT Authentication**: This project uses **JWT** for user authentication. The API requires a valid **JWT token** in the `Authorization` header for protected routes. The token should be included in the header like so:
  ```bash
  Authorization: Bearer YOUR_JWT_TOKEN
  ```

---

## **Swagger Documentation**

This project uses **Swagger** for automatic API documentation generation. You can access the interactive API documentation via [swagger-output.json](swagger-output.json).

---

## **Base API URL**

The base API URL is defined by the `api` variable, and routes are mounted as follows:

- `/api/products`: For **Products** routes
- `/api/categories`: For **Categories** routes
- `/api/users`: For **Users** routes
- `/api/orders`: For **Orders** routes
