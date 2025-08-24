
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

### 1. Categories Routes

#### **GET /api/v1/categories**
Fetch all categories.

- **Response**:
```json
[
  {
    "_id": "60c72b1f9d1b8d0c08c1e1b6",
    "name": "Category Name",
    "color": "#FF5733",
    "icon": "icon-name",
    "image": "category-image-url",
    "createdAt": "2021-07-16T08:50:00.000Z",
    "updatedAt": "2021-07-16T08:50:00.000Z"
  }
]
```

#### **GET /api/v1/categories/:id**
Fetch a single category by ID.

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1b6",
  "name": "Category Name",
  "color": "#FF5733",
  "icon": "icon-name",
  "image": "category-image-url",
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### **POST /api/v1/categories**
Create a new category.

- **Request Body**:
```json
{
  "name": "Category Name",
  "color": "#FF5733",
  "icon": "icon-name",
  "image": "category-image-url"
}
```

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1b6",
  "name": "Category Name",
  "color": "#FF5733",
  "icon": "icon-name",
  "image": "category-image-url",
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### **PUT /api/v1/categories/:id**
Update an existing category by ID.

- **Request Body**:
```json
{
  "name": "Updated Category Name",
  "color": "#FF5733",
  "icon": "updated-icon-name",
  "image": "updated-category-image-url"
}
```

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1b6",
  "name": "Updated Category Name",
  "color": "#FF5733",
  "icon": "updated-icon-name",
  "image": "updated-category-image-url",
  "createdAt": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T09:00:00.000Z"
}
```

#### **DELETE /api/v1/categories/:id**
Delete a category by ID.

- **Response**:
```json
{
  "message": "Category deleted successfully"
}
```

---

### 2. Products Routes

#### **GET /api/v1/products**
Fetch all products.

- **Response**:
```json
[ 
  {
    "_id": "60c72b1f9d1b8d0c08c1e1a5",
    "name": "Product Name",
    "description": "Product description",
    "richDescription": "Detailed product description",
    "image": "product-image-url",
    "images": ["image1", "image2"],
    "brand": "Brand Name",
    "price": 100,
    "category": "Category ID",
    "countInStock": 50,
    "rating": 4.5,
    "isFeatured": true,
    "dateCreated": "2021-07-16T08:50:00.000Z",
    "updatedAt": "2021-07-16T08:50:00.000Z"
  }
]
```

#### **GET /api/v1/products/:id**
Fetch a single product by ID.

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1a5",
  "name": "Product Name",
  "description": "Product description",
  "richDescription": "Detailed product description",
  "image": "product-image-url",
  "images": ["image1", "image2"],
  "brand": "Brand Name",
  "price": 100,
  "category": "Category ID",
  "countInStock": 50,
  "rating": 4.5,
  "isFeatured": true,
  "dateCreated": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### **POST /api/v1/products**
Create a new product.

- **Request Body**:
```json
{
  "name": "Product Name",
  "description": "Product description",
  "richDescription": "Detailed product description",
  "image": "product-image-url",
  "images": ["image1", "image2"],
  "brand": "Brand Name",
  "price": 100,
  "category": "Category ID",
  "countInStock": 50,
  "rating": 4.5,
  "isFeatured": true,
  "discount": {
    "type": "percentage",
    "value": 10
  }
}
```

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1a5",
  "name": "Product Name",
  "description": "Product description",
  "richDescription": "Detailed product description",
  "image": "product-image-url",
  "images": ["image1", "image2"],
  "brand": "Brand Name",
  "price": 100,
  "category": "Category ID",
  "countInStock": 50,
  "rating": 4.5,
  "isFeatured": true,
  "dateCreated": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### **POST /api/v1/products/get/count**
Get total product count.

- **Response**:
```json
{
  "total": 100
}
```

#### **POST /api/v1/products/get/featured/:count**
Get a list of featured products.

- **Response**:
```json
[ 
  {
    "_id": "60c72b1f9d1b8d0c08c1e1a5",
    "name": "Featured Product",
    "description": "Product description",
    "richDescription": "Detailed product description",
    "image": "product-image-url",
    "images": ["image1", "image2"],
    "brand": "Brand Name",
    "price": 100,
    "category": "Category ID",
    "countInStock": 50,
    "rating": 4.5,
    "isFeatured": true,
    "dateCreated": "2021-07-16T08:50:00.000Z",
    "updatedAt": "2021-07-16T08:50:00.000Z"
  }
]
```

#### **PUT /api/v1/products/:id**
Update an existing product by ID.

- **Request Body**:
```json
{
  "name": "Updated Product Name",
  "description": "Updated product description",
  "richDescription": "Updated detailed description",
  "image": "updated-product-image-url",
  "images": ["updated-image1", "updated-image2"],
  "brand": "Updated Brand",
  "price": 120,
  "category": "Updated Category ID",
  "countInStock": 60,
  "rating": 4.7,
  "isFeatured": false
}
```

- **Response**:
```json
{
  "_id": "60c72b1f9d1b8d0c08c1e1a5",
  "name": "Updated Product Name",
  "description": "Updated product description",
  "richDescription": "Updated detailed description",
  "image": "updated-product-image-url",
  "images": ["updated-image1", "updated-image2"],
  "brand": "Updated Brand",
  "price": 120,
  "category": "Updated Category ID",
  "countInStock": 60,
  "rating": 4.7,
  "isFeatured": false,
  "dateCreated": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T09:00:00.000Z"
}
```

#### **DELETE /api/v1/products/:id**
Delete a product by ID.

- **Response**:
```json
{
  "message": "Product deleted successfully"
}
```

---

### 3. Orders Routes

#### **GET /api/v1/orders**
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

#### **GET /api/v1/orders/:id**
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

#### **POST /api/v1/orders**
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
    "type": "percentage",
    "value": 10
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
  "totalPrice": 180,
  "user": "userID",
  "dateOrdered": "2021-07-16T08:50:00.000Z",
  "updatedAt": "2021-07-16T08:50:00.000Z"
}
```

#### **PUT /api/v1/orders/:id**
Update an order's status by ID.

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

#### **DELETE /api/v1/orders/:id**
Delete an order by ID.

- **Response**:
```json
{
  "message": "Order deleted successfully"
}
```

#### **GET /api/v1/orders/get/userorders/:userid**
Fetch all orders for a specific user by their ID.

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

---

### Conclusion
This API allows managing categories, products, users, and orders for an e-commerce platform. By using JWT authentication and structured routes, the API provides secure and organized access to backend resources.
