📸 Image Posting App

A full-stack web application where users can upload, view, and interact with images.

🚀 Features

- 🔐 User Authentication (Login / Signup)
- 📤 Upload Images
- ❤️ Like Posts
- 🖼️ View Image Feed
- ⚡ Smooth Animations (GSAP supported)
- 📱 Responsive UI

🛠️ Tech Stack

- Frontend: React.js, Tailwind CSS
- Backend: Node.js, Express.js
- Database: MongoDB
- Other: Axios, GSAP

📂 Project Structure

Image_posting-App/
│── backend/
│── frontend/
│── README.md

⚙️ Installation

1. Clone the repository

git clone https://github.com/nikhilmaddheshiya827-dev/Image_posting-App

2. Install dependencies

Frontend:

cd frontend
npm install

Backend:

cd backend
npm install

3. Setup Environment Variables

Create ".env" file in backend:

PORT=3000
MONGO_URI=your_mongodb_url
JWT_SECRET=your_secret_key

4. Run the project

Backend:

npm start

Frontend:

npm run dev

🌐 API Overview

- POST "/api/auth/register"
- POST "/api/auth/login"
- POST "/api/post/upload"
- PATCH "/api/post/like/:id"
- GET "/api/post/all"

📸 Future Improvements

- Comments system
- Image filters
- User profiles
- Dark mode

👨‍💻 Author

Nikhil

---

⭐ If you like this project, give it a star!