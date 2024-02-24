# JWT Authentication in NodeJs 
Basic JWT authentication in NodeJs express and swagger implementation

## Usage
- JWT authentication is a token-based stateless authentication mechanism. It is popularly used as a client-side-based stateless session, this means the server doesn't have to completely rely on a data store (or) database to save session information. JWTs can be encrypted, but they are typically encoded & signed.
- These Tokens are stored on front end and to be passed in headers as Authorization token
- The token has expiry so after expire use refresh token to regenerate the login. Once regenerated store again.
- Tokens may stored in localStorage, sessionStorage or cookies as per convenience.

## Tasks
- [x]   JWT Authentication
- [x]   Basic Fields Validation
- [x]   Morgan Logger
- [x]   Error Handling
- [x]   Basic CRUD
- [x]   MiddleWare Setup
- [x]   Mongo Db Connection
- [x]   Swagger Docs and Structuring

# Node.js JWT Authentication with MongoDB

This repository provides a comprehensive example of implementing JSON Web Token (JWT) authentication in a Node.js environment. The project covers various aspects, including basic JWT functionality, field validation, logging with Morgan, error handling, CRUD operations, middleware setup, MongoDB integration, and Swagger documentation.

## Table of Contents

- [Overview](#overview)
  - [Project Structure](#project-structure)
- [Prerequisites](#prerequisites)
- [Setup](#setup)
- [JWT Authentication](#jwt-authentication)
  - [Basic Functionality](#basic-functionality)
  - [Fields Validation](#fields-validation)
  - [Morgan Logger](#morgan-logger)
  - [Error Handling](#error-handling)
  - [CRUD Operations](#crud-operations)
  - [Middleware Setup](#middleware-setup)
  - [MongoDB Connection](#mongodb-connection)
  - [Swagger Documentation](#swagger-documentation)
- [Contributing](#contributing)

## Overview

Welcome to the Node.js JWT Authentication repository! This project is designed to provide a hands-on example of building a secure authentication system using JWTs in a Node.js environment. The organized structure allows for easy navigation and understanding of various components.

### Project Structure


- **`controllers/`**: Handles the logic for CRUD operations.
- **`middleware/`**: Houses middleware functions for authentication and error handling.
- **`models/`**: Defines the MongoDB data models.
- **`routes/`**: Specifies the routes for different API endpoints.
- **`utils/`**: Includes utility functions for validation and JWT generation.
- **`config/`**: Holds configuration files, including JWT secret and MongoDB connection details.
- **`docs/`**: Stores Swagger documentation files.
- **`index.js`**: Main entry point for the application.

## Prerequisites

Before getting started, ensure you have the following installed:

- Node.js and npm
- MongoDB
- Git

## Setup

1. **Clone the repository:**

    ```bash
    git clone [https://github.com/ratneshgujarathi/authentication_node]
    ```

2. **Install dependencies:**

    ```bash
    cd authentication_node
    npm install
    ```

3. **Set up MongoDB:**

    Update the MongoDB connection details in `services/mongo.js`.

4. **Start the application:**

    ```bash
    npm run dev
    ```

## JWT Authentication

### Basic Functionality

The project includes a robust JWT authentication system, allowing users to sign up, log in, and access protected routes using JWTs.

### Fields Validation

Input data is validated to ensure correctness and prevent potential security vulnerabilities.

### Morgan Logger

Morgan is integrated to log HTTP requests for better debugging and monitoring.

### Error Handling

The application includes error handling to gracefully manage and respond to errors.

### CRUD Operations

A basic CRUD system is implemented to showcase the integration of authentication with database operations.

### Middleware Setup

Middleware functions are set up for authentication, ensuring modular and scalable code.

### MongoDB Connection

The application connects to MongoDB. Update the connection details in `services/mongo.js`.

### Swagger Documentation

Swagger is implemented to generate API documentation. Access Swagger UI at `http://127.0.0.1:9724/api-docs`.

## Contributing

Feel free to contribute by submitting issues, feature requests, or pull requests. Let's build and learn together!

Happy coding! 🚀🌐
