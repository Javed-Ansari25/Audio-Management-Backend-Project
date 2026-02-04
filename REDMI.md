
---

# 🎵 SoundWave – Audio Streaming Platform (Backend)

**SoundWave** is a **production-ready backend** for a Spotify-like audio streaming platform.
It supports **role-based access control (Admin / Artist / User)**, secure authentication, audio management, and moderation features using modern backend best practices.

This project is designed to demonstrate **real-world backend architecture**, scalable REST APIs, and professional code organization.

---

## 🚀 Project Overview

The SoundWave backend provides:

* Secure authentication & authorization
* Role-based APIs for **Admin, Artist, and Users**
* Audio upload, update, and deletion workflows
* Admin moderation & dashboard analytics
* Clean RESTful architecture with scalable structure
* Centralized error handling & standardized API responses

Built for **real-world usage**, backend learning, and portfolio showcasing.

---

## 👥 Roles & Access Control

### 🛡 Admin

* Access to admin dashboard & analytics
* View all users (users + artists)
* Block / unblock users
* View & delete any post or audio
* Moderate artist content
* Override permissions for updates & deletions

### 🎤 Artist

* Upload audio files
* Update & delete **own audio only**
* Manage personal content
* Restricted access based on ownership

### 👤 User

* Register & login securely
* Browse published content
* Stream audio
* No content modification access

---

## ✨ Key Features

### 🔐 Authentication & Security

* Secure user registration & login
* Password hashing using **bcrypt**
* JWT-based authentication (access & refresh tokens)
* Cookie-based session handling
* Protected routes using authentication middleware
* Role-based authorization (`admin`, `artist`, `user`)
* Production-grade error handling

---

### 🎧 Audio Management

* Upload audio files (`.mp3`, `.wav`, `.ogg`, etc.)
* File type & size validation using **Multer**
* Artist-only ownership enforcement
* Admin override access for moderation
* Audio metadata stored in MongoDB
* Organized file storage structure
* Secure delete & update operations

---

### 📝 Post & Content Moderation

* Create & manage posts (Artist)
* View all posts (Admin)
* Delete any post (Admin)
* Publish/unpublish control
* Ownership-based access checks

---

### 📊 Admin Dashboard

* Total users & artists count
* Content statistics
* Centralized admin APIs
* Secure admin-only routes
* Clean separation of admin logic

---

### 🛠 Backend Architecture

* RESTful API design using **Express.js**
* Modular folder structure (controllers, routes, services)
* MongoDB integration with **Mongoose**
* Environment-based configuration using **dotenv**
* CORS enabled for frontend communication
* Centralized API response & error format
* Development workflow using **nodemon**

---

## 🧩 API Design Philosophy

* **Separate admin & artist routes** for clarity and security
* **Shared service layer** to avoid code duplication
* Route-level authorization (`router.use`)
* Clean controllers without role-checking clutter
* Scalable & maintainable codebase (company-style)

---

## 🛠 Technologies Used

| Technology    | Purpose                       |
| ------------- | ----------------------------- |
| Node.js       | JavaScript runtime            |
| Express.js    | REST API framework            |
| MongoDB       | NoSQL database                |
| Mongoose      | ODM for MongoDB               |
| Multer        | Audio file upload handling    |
| bcrypt        | Secure password hashing       |
| jsonwebtoken  | JWT authentication            |
| cookie-parser | Cookie-based sessions         |
| dotenv        | Environment configuration     |
| cors          | Cross-Origin Resource Sharing |
| nodemon       | Development auto-reload       |

---

 
## 🎯 Learning Outcomes

* Real-world RBAC implementation
* Admin vs Artist permission separation
* Secure backend development practices
* Scalable REST API design
* Industry-style folder structure
* Production-ready backend mindset

---

## 👨‍💻 Author

**Javed**
Backend Developer | Node.js | MongoDB
📌 Built for learning, practice & real-world backend experience

---
