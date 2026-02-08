# 🎵 SoundWave – Audio Streaming Platform (Backend)

**SoundWave** is a **production-ready backend** for a Spotify-like audio streaming platform.
It supports **role-based access control (Admin / Artist / User)**, secure authentication, audio streaming, **album management**, and **playlist functionality** using modern backend best practices.

This project is built to demonstrate **real-world backend architecture**, scalable REST APIs, and clean, maintainable code organization.

---

## 🌐 Live Base URL

```
https://soundwave-audio-streaming-platform.onrender.com/api/v1
```

All APIs are served under the `/api/v1` prefix.

---

## 🚀 Project Overview

The SoundWave backend provides:

* Secure authentication & authorization
* Role-based APIs for **Admin, Artist, and Users**
* Audio upload, update, publish & delete workflows
* Album creation and management
* Playlist creation & management
* Admin moderation & dashboard analytics
* Centralized error handling & standardized API responses

Built for **real-world usage**, backend learning, and portfolio showcasing.

---

## 👥 Roles & Access Control

### 🛡 Admin

* Access admin dashboard & analytics
* View all users and artists
* Block / unblock users
* View, update, publish or delete **any audio**
* Full moderation control

### 🎤 Artist

* Upload audio files
* Update & delete **own audios only**
* Publish / unpublish own audios
* Create & manage albums
* Create personal playlists

### 👤 User

* Register & login securely
* Browse **published audios & albums only**
* Stream audio
* Create & manage **personal playlists**

---

## ✨ Key Features

### 🔐 Authentication & Security

* Secure registration & login
* Password hashing using **bcrypt**
* JWT-based authentication (access & refresh tokens)
* Protected routes using `verifyJWT`
* Role-based authorization
* Production-grade error handling

---

### 🎧 Audio Management

* Upload audio files (`.mp3`, `.wav`, `.ogg`)
* File validation using **Multer**
* Artist ownership enforcement
* Admin moderation support
* Publish / unpublish logic
* MongoDB metadata storage

---

### 📀 Album Management

* Create albums with cover image
* Add / remove audios from albums
* Publish / unpublish albums
* Artist-only ownership control
* Public access to published albums

---

### 📂 Playlist Management

* Create playlists (User & Artist)
* Update playlist name & cover image
* Add / remove audios from playlists
* Delete own playlists
* Fetch playlists with audios
* Strict ownership-based access control

---

## 🔗 API Routes Overview

### 🔑 Authentication Routes

```
POST   /api/v1/auth/register
POST   /api/v1/auth/login
POST   /api/v1/auth/logout
POST   /api/v1/auth/refresh-token
```

---

### 🎧 Audio Routes

#### Public / User

```
GET    /api/v1/audios
GET    /api/v1/audios/:audioId
GET    /api/v1/artists/:artistId/audios
```

#### Artist (Protected)

```
POST   /api/v1/artist/upload-audio
PATCH  /api/v1/artist/update-audio/:audioId
PATCH  /api/v1/artist/delete-audio/:audioId
PATCH  /api/v1/artist/toggle-status/:audioId
```

---

### 📀 Album Routes

#### Public

```
GET    /api/v1/albums
GET    /api/v1/albums/:albumId
GET    /api/v1/artists/:artistId/albums
```

#### Artist (Protected)

```
POST   /api/v1/album/create
PATCH  /api/v1/album/update/:albumId
PATCH  /api/v1/album/publish/:albumId
POST   /api/v1/album/add/:albumId/audio/:audioId
DELETE /api/v1/album/delete/:albumId/audio/:audioId
DELETE /api/v1/album/delete/:albumId
```

---

### 📂 Playlist Routes

#### User / Artist (Protected)

```
POST   /api/v1/playList/create
PATCH  /api/v1/playList/update/:playlistId
PATCH  /api/v1/playList/add/:audioId/:playlistId
PATCH  /api/v1/playList/remove/:audioId/:playlistId
DELETE /api/v1/playList/delete/:playlistId
```

#### Public

```
GET    /api/v1/playList/user/:userId
GET    /api/v1/playList/:playlistId
```

---

### 🧑‍💼 Admin Routes

```
GET    /api/v1/admin/dashboard
GET    /api/v1/admin/audios
GET    /api/v1/admin/users

DELETE /api/v1/admin/audio/delete/:audioId
PATCH  /api/v1/admin/audio/:audioId/toggle-status
PATCH  /api/v1/admin/user/block/:userId
```

---

## 🧩 Access Control Summary

| Role   | Audios | Albums | Playlists | Users |
| ------ | ------ | ------ | --------- | ----- |
| User   | View   | View   | Own only  | ❌     |
| Artist | Own    | Own    | Own       | ❌     |
| Admin  | All    | All    | All       | ✅     |

---

## 🛠 Backend Architecture

* RESTful API design using **Express.js**
* Modular folder structure (routes, controllers, services)
* MongoDB integration with **Mongoose**
* Environment-based config using **dotenv**
* Centralized API response & error handling
* CORS enabled for frontend usage
* Development workflow with **nodemon**

---

## 🛠 Technologies Used

| Technology | Purpose              |
| ---------- | -------------------- |
| Node.js    | JavaScript runtime   |
| Express.js | REST API framework   |
| MongoDB    | NoSQL database       |
| Mongoose   | MongoDB ODM          |
| Multer     | File upload handling |
| bcrypt     | Password hashing     |
| JWT        | Authentication       |
| dotenv     | Environment config   |
| cors       | Cross-origin support |
| nodemon    | Dev auto-reload      |

---

## 🎯 Learning Outcomes

* Real-world RBAC implementation
* Playlist & album design like Spotify
* Secure backend architecture
* Ownership-based authorization
* Scalable REST API structure
* Production-ready backend mindset

---

## 👨‍💻 Author

**Javed**
Backend Developer | Node.js | MongoDB
📌 Built for learning, practice & real-world backend experience
