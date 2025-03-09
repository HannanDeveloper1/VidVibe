# VidVibe App

Welcome to the VidVibe app! This project is a mobile application built with Expo and React Native. The app includes onboarding, signup, login, and a forget-password screen (screen only, server logic not attached). We have also set up environment variables for the API origin.

## Features

- **Onboarding**: A smooth onboarding experience to introduce users to the app.
- **Signup**: Allows users to create a new account.
- **Login**: Enables users to log in to their existing accounts.
- **Forget Password**: Provides a screen for users to reset their password (server logic not attached).

## Environment Variables

We use a `.env` file to manage environment variables. The following variable is required:

- `VIDVIBE_API_ORIGIN`: The origin URL for the VidVibe API, and insert the global port instead of localhost

## Getting Started

Follow these steps to get the app up and running on your local machine.

### Prerequisites

- Node.js and npm installed
- Expo CLI installed
- A mobile device or emulator

### Installation

1. **Clone the repository**:
   ```bash
   git clone https://github.com/HannanDeveloper1/VidVibe.git
   cd VidVibe/app
   
2. **Install dependencies:**:
   ```bash
   npm install
   
3. **Create a `.env` file** in the root directory and add the following:
   ```bash
   VIDVIBE_API_ORIGIN=http://your-api-origin.com
   
4. **Start the Expo development server:**
   ```bash
   expo start
   
### Project Structure
- `components/`: Contains reusable components like FormInput, BtnPrimary, and ErrorAlert.

- `constants/`: Contains constants like icons, images etc.

- `app/`: Contains all the screens.

- `.env`: Environment variables file.

#### Usage
### Onboarding
The onboarding screens introduce new users to the app and its features.

### Signup
Users can create a new account by providing their first name, last name (optional), email, and password.

### Login
Existing users can log in to their accounts using their email and password.

### Forget Password
Users can navigate to the forget-password screen to reset their password. Note that the server logic for this feature is not attached, as it works with deep linking.

## Contact
For any questions or suggestions, please contact us at [hannandeveloper@outlook.com](malto:hannandeveloper@outlook.com).