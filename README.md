# JWT Authentication in NodeJs 
Basic JWT authentication in NodeJs express and swagger implementation

## Installation
- type **npm install** in terminal/cmd prompt/shell to install the dependencies.
- Api server will be running on 
    - http://127.0.0.1:9724/api-docs 

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