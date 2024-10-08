## Contact Management App

### Introduction

This React application is designed to manage a list of contacts. It allows users to add, update, delete, and search for contacts. The app utilizes Firebase for backend services, including data storage and authentication.

### Features

- **Add contacts:** Users can create new contacts by providing name and email information.
- **Update contacts:** Existing contacts can be modified by editing their details.
- **Delete contacts:** Users can remove unwanted contacts from the list.
- **Search contacts:** Quickly find contacts by searching for their name or email.
- **Responsive design:** The app adapts to different screen sizes for optimal user experience.

### Technologies Used

- **React:** A JavaScript library for building user interfaces.
- **Firebase:** A backend-as-a-service platform for real-time database, authentication, and hosting.
- **Styled Components:** A CSS-in-JS library for styling React components.
- **Formik:** A form library for managing form state and validation.
- **React Toastify:** A notification library for displaying toast messages.

### Installation

1. **Clone the repository:**

   ```bash
   git clone <your-repository-url>
   ```

2. **Install dependencies:**

   ```bash
   cd your-project-name
   npm install
   ```

3. **Set up Firebase configuration:**

   Create a Firebase project and add your project's configuration to a file named `firebase.js` in your project's `src/config` directory. Replace the placeholders with your actual Firebase configuration:

   ```javascript
   import { initializeApp } from "firebase/app";

   const firebaseConfig = {
    apiKey: "<your-api-key>",
    authDomain: "<your-auth-domain>",
    projectId: "<your-project-id>",
    storageBucket:
     "<your-storage-bucket>",
    messagingSenderId:
     "<your-messaging-sender-id>",
    appId: "<your-app-id>",
   };

   export const app = initializeApp(
    firebaseConfig
   );
   ```

### Usage

1. **Start the development server:**

   ```bash
   npm start
   ```

2. Open your web browser and navigate to: [http://localhost:3000](http://localhost:3000)

### Contributing

Contributions are welcome! Please follow these guidelines:

1. Fork the repository.
2. Create a new branch for your feature or bug fix.
3. Make your changes and commit them.
4. Push your changes to your fork.
5. Create a pull request to the main branch of the original repository.

### License

This project is licensed under the MIT License.
