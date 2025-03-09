# VidVibe APIs Server

## Overview
This is the backend server for VidVibe, an application that provides user authentication, profile management, and other features.

## Features
- User Signup
- User Login
- Email Verification
- Password Reset
- Rate Limiting
- Security Enhancements

## Technologies Used
- Node.js
- Express.js
- MongoDB
- JWT (JSON Web Tokens)
- Nodemailer

## Getting Started

### Prerequisites
Make sure you have the following installed on your local machine:
- Node.js
- MongoDB
- npm (Node Package Manager)

### Installation
1. Clone the repository:
    ```sh
    git clone https://github.com/HannanDeveloper1/VidVibe.git
    cd api
    ```

2. Install the dependencies:
    ```sh
    npm install
    ```

3. Create a `.env` file in the root directory and add the following environment variables:

    ```plaintext
    PORT=<YOUR_PORT_WHERE_SERVER_RUNS_LOCALLY>
    CLIENT_ORIGIN=<YOUR_CLIENT_ORIGIN_URL>
    MONGODB_URI=<YOUR_MONGO_DATABASE_URI>
    JWT_SECRET=<YOUR_JWT_SECRET>
    EMAIL_SERVICE=<YOUR_EMAIL_SERVICE> # like Gmail, etc  
    EMAIL_HOST=<YOUR_EMAIL_HOST> # smtp.gmail.com for Gmail
    EMAIL_USERNAME=<YOUR_EMAIL_USERNAME> # your email
    EMAIL_PASSWORD=<YOUR_EMAIL_PASSWORD>
    EMAIL_PORT=<YOUR_EMAIL_PORT> # 465 for Gmail
    EMAIL_FROM=<YOUR_EMAIL_FROM>
    SUPPORT_EMAIL=<YOUR_SUPPORT_EMAIL_FOR_MAIL_TEMPLATES>
    FACEBOOK_PROFILE=<YOUR_FACEBOOK_PROFILE_URL>
    INSTAGRAM_PROFILE=<YOUR_INSTAGRAM_PROFILE_URL>
    ```

### Running the Server
To start the server in development mode:
```sh
npm run dev
```
## API Endpoints

### User Authentication

#### SignUp

- **Endpoint:** ``/api/auth/signup``
- **Method**: ``POST``
- **Description:** Register a new user.
- **Request Body:**
    ```json
    {
    "profilePicture": "url <OPTIONAL>",
    "username": "profile_username",
    "name": "user's name",
    "headline": "user's headline <OPTIONAL>",
    "email": "user@example.com",
    "password": "user_password"
   }
  ```

#### Login

- **Endpoint:** ``/api/auth/login``
- **Method**: ``POST``
- **Description:** Authenticate a user and return a JWT.
- **Request Body:**
    ```json
    {
    "email": "user@example.com",
    "password": "user_password"
   }
  ```  
  
#### Email Verification

- #### Send Verification Email

  - **Endpoint:** ``/api/auth/verify/:email``
  - **Method**: ``GET``
  - **Description:** Send a verification email.

- #### Verify Email

  - **Endpoint:** ``/api/auth/verify/email/:token``
  - **Method**: ``PUT``
  - **Description:** Verify the user's email using the token.

#### Password Reset

- #### Forget Password

   - **Endpoint:** ``/api/auth/forget/password``
   - **Method**: ``POST``
   - **Description:** Send a password reset link.
   -  **Request Body:**
    ```json
    {
      "email": "user@example.com"
   }
  ```  

- #### Check Reset Password Link
  
   - **Endpoint:** ``/api/auth/check/reset``
   - **Method**: ``GET``
   - **Description:** Check if the reset password link is valid.
   -  **Headers:**
    ```http request
    "authorization": "authToken"
  ```  

- #### Reset Password

   - **Endpoint:** ``/api/auth/reset/password/:id``
   - **Method**: ``PUT``
   - **Description:** Reset the user's password.
   -  **Headers:**
    ```json
    {
      "password": "new_password"
   }
  ```  
### Profile Management

- #### Get Profile

   - **Endpoint:** ``/api/profile``
   - **Method**: ``GET``
   - **Description:** Get the user's profile information.
   - **Headers:**
    ```http request
    "authorization": "authToken"
  ```
- #### Change Password

  - **Endpoint:** ``/api/profile/change/password``
  - **Method**: ``PUT``
  - **Description:** Change the password.
  - **Headers:**
   ```http request
   "authorization": "authToken"
  ```
  - **Request Body:**
   ```json
   {
     "oldPassword": "Your Old Password <OPTIONAL when login with oAuth>",
     "newPassword": "New Password"
  }
  ```
  - #### Update Profile

    - **Endpoint:** ``/api/profile/update``
    - **Method**: ``PUT``
    - **Description:** Update the profile information
    - **Headers:**
     ```http request
     "authorization": "authToken"
    ```
    - **Request Body:**
     ```json
     {
       "profilePicture": "url of your changed Profile Picture",
       "username": "Your changed username",
       "name": "Your changed name",
       "bio": "Your changed bio"
    }
    ```
    _Only add the fields which you want to update_


## Middlewares

- **Validator Middleware:** Validates the request payload.

- **Authentication Middleware:** Protects routes using JWT authentication.

- **Rate Limiter Middleware:** Limits the number of requests to prevent abuse.

## Security

- **Password Hashing:** Passwords are hashed using bcrypt.

- **JWT Authentication:** Secure authentication using JSON Web Tokens.

- **Rate Limiting:** Prevents abuse by limiting the number of requests.

- **Email Verification:** Ensures users verify their email address before accessing certain features.

- **Password Reset:** Allows users to securely reset their passwords.

## Contact

For any questions or suggestions, please contact us at [hannandeveloper@outlook.com](malto:hannandeveloper@outlook.com).