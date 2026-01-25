# Production-Ready Audio Upload & User Management Backend

This project is a **full-featured Node.js backend** designed for managing audio file uploads and user authentication. It uses modern backend practices, including secure password hashing, JWT-based authentication, and structured API routes. The project is built to be **production-ready** and scalable.

---

## Key Features

### User Management
- Secure signup and login using **bcrypt** for password hashing
- **JWT authentication** for secure API access
- Cookie-based session handling with **cookie-parser**
- Account security best practices implemented

### Audio File Handling
- Upload audio files (`.mp3`, `.wav`, `.ogg`, etc.) using **Multer**
- File size validation and type restrictions
- Prevent duplicate uploads within a short timeframe
- Organized storage in `public/` folder

### Backend Essentials
- **Express.js** for API routing
- **CORS** enabled for frontend-backend communication
- Environment-based configuration using **dotenv**
- MongoDB integration with **Mongoose** for metadata storage
- Development workflow with **nodemon**

---

## Technologies Used

| Technology | Purpose |
|------------|---------|
| Node.js | Runtime environment |
| Express.js | Web framework for REST APIs |
| MongoDB + Mongoose | Database & data modeling |
| Multer | Audio file upload handling |
| bcrypt | Secure password hashing |
| jsonwebtoken | JWT-based authentication |
| cookie-parser | Cookie management |
| dotenv | Environment configuration |
| cors | Cross-Origin Resource Sharing |
| nodemon | Auto-reload during development |

---

## AUTHOR - JAVED
