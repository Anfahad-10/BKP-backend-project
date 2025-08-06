# NGO Backend Project

This is the backend server for a simple NGO application. It allows for user registration (volunteers/interns) and provides an admin view to see all registered users. This project was built as part of an internship selection task.

---

## ✨ Key Features

*   **User Registration:** A secure endpoint to register new users.
*   **Admin View:** An endpoint to fetch a list of all registered users.
*   **Secure:** Uses `dotenv` to keep database credentials and other secrets safe.

---

##  🛠️ Technologies Used (Ingredients)

*   **Node.js:** The runtime environment to run JavaScript on the server.
*   **Express.js:** A framework for Node.js to build the web server and APIs easily.
*   **MongoDB:** A NoSQL database used to store user data.
*   **Mongoose:** A library to model and manage data in MongoDB.
*   **dotenv:** To manage environment variables and keep secrets safe.

---

## 🚀 How to Run This Project Locally

1.  **Clone the repository:**
    ```bash
    git clone https://github.com/Anfahad-10/BKP-backend-project.git
    ```
2.  **Navigate to the project directory:**
    ```bash
    cd BKP-backend-project
    ```
3.  **Install all the required packages:**
    ```bash
    npm install
    ```
4.  **Create a `.env` file** in the root directory and add your MongoDB Connection String:
    `MONGO_URI=your_mongodb_connection_string`
5.  **Start the server:**
    ```bash
    node index.js
    ```
    The server will start on `http://localhost:3000`.


---

## API Endpoints Reference

The base URL for the API is `http://localhost:3000`.

---

### 👤 User Endpoints

#### Register a new user
*   **URL:** `/api/register`
*   **Method:** `POST`
*   **Description:** Creates a new user (volunteer or intern).
*   **Body (raw/json):**
    ```json
    {
      "name": "Test User",
      "email": "test.user@example.com",
      "role": "volunteer"
    }
    ```
---

### 👮 Admin Endpoints

#### Get all registered users
*   **URL:** `/api/admin/users`
*   **Method:** `GET`
*   **Description:** Retrieves a list of all users from the database.