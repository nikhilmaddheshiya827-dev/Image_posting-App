⚙️ Backend - Image Posting App

This is the backend of the Image Posting App built using Node.js and Express.

🚀 Features

- 🔐 Authentication with JWT
- 📤 Image upload API
- ❤️ Like functionality
- 🗄️ MongoDB integration
- 🔒 Protected routes

🛠️ Tech Stack

- Node.js
- Express.js
- MongoDB + Mongoose
- JWT (Authentication)
- Multer / Cloudinary (for image upload)

📂 Folder Structure

backend/
│── controllers/
│── models/
│── routes/
│── middleware/
│── config/
│── server.js

⚙️ Setup

Install dependencies

npm install

Create ".env" file

PORT=3000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key
CLOUDINARY_NAME=your_cloud_name
CLOUDINARY_KEY=your_api_key
CLOUDINARY_SECRET=your_api_secret

Run server

npm start

🔌 API Endpoints

Auth Routes

- POST "/api/auth/register"
- POST "/api/auth/login"

Post Routes

- POST "/api/post/upload"
- PATCH "/api/post/like/:id"
- GET "/api/post/all"

🔒 Middleware

- Auth middleware for protected routes
- Error handling middleware

📌 Notes

- Make sure MongoDB is running
- Use Postman for API testing

---

Backend running on: "http://localhost:3000"