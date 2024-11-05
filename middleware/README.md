# API Documentation

## Authentication

### Register
- **URL**: `/api/auth/register`
- **Method**: `POST`
- **Body**:
  - `email` (string)
  - `password` (string)

### Login
- **URL**: `/api/auth/login`
- **Method**: `POST`
- **Body**:
  - `email` (string)
  - `password` (string)

## Products

### Get All Products
- **URL**: `/api/products`
- **Method**: `GET`

### Add Product
- **URL**: `/api/products`
- **Method**: `POST`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
  - `name` (string)
  - `price` (number)
  - `description` (string)

### Update Product
- **URL**: `/api/products/:id`
- **Method**: `PUT`
- **Headers**: `Authorization: Bearer <token>`
- **Body**:
  - `name` (string)
  - `price` (number)
  - `description` (string)

### Delete Product
- **URL**: `/api/products/:id`
- **Method**: `DELETE`
- **Headers**: `Authorization: Bearer <token>`
