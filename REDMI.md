# 🎵 SoundWave – Audio Streaming Platform

SoundWave is a **Spotify-like audio streaming application** that allows users to upload, stream, and manage audio content with secure authentication and role-based access control.  
This project is built to demonstrate **real-world backend architecture**, RESTful APIs, and scalable application design.

---

## 🚀 Overview

The backend provides:
- Secure user authentication using JWT
- Audio file upload and validation
- Clean RESTful API architecture
- Centralized configuration and error handling
- MongoDB-based persistent storage

Designed for **real-world usage**, learning backend architecture, and showcasing professional backend development skills.

---

## ✨ Key Features

### 👤 User Management
- Secure user registration and login
- Password hashing using **bcrypt**
- JWT-based authentication
- Cookie-based session handling using **cookie-parser**
- Protected routes with authentication middleware
- Production-level security practices

### 🎧 Audio File Handling
- Upload audio files (`.mp3`, `.wav`, `.ogg`, etc.)
- File type and size validation using **Multer**
- Duplicate upload prevention within a defined time window
- Organized file storage in the `public/` directory
- Audio metadata stored in MongoDB

### 🛠 Backend Essentials
- RESTful API architecture using **Express.js**
- MongoDB integration with **Mongoose**
- Environment-based configuration using **dotenv**
- CORS enabled for frontend-backend communication
- Centralized error handling and consistent API responses
- Development workflow with **nodemon**

---

## 🛠 Technologies Used

| Technology | Purpose |
|------------|--------|
| Node.js | JavaScript runtime |
| Express.js | REST API framework |
| MongoDB | NoSQL database |
| Mongoose | ODM for MongoDB |
| Multer | Audio file upload handling |
| bcrypt | Secure password hashing |
| jsonwebtoken | JWT authentication |
| cookie-parser | Cookie-based sessions |
| dotenv | Environment variables |
| cors | Cross-Origin Resource Sharing |
| nodemon | Development auto-reload |

---

## AUTHOR - JAVED
