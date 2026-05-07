# Client Side Deployment

You can deploy the client side using:

- Firebase Hosting
- Netlify
- Vercel

---

# The Book Heaven - Server Side

## Server Overview

The server side handles:

- MongoDB database operations
- CRUD operations for books
- Review storage system
- User specific book filtering

---

# Live Server Link

Add your live server link here

---

# Technologies Used

## Backend

- Node.js
- Express.js
- MongoDB Atlas
- CORS
- dotenv

---

# NPM Packages Used

```bash
npm install express
npm install cors
npm install dotenv
npm install mongodb
```

---

# Environment Variables

Create a `.env` file and add:

```env
MONGO_URI=your_mongodb_uri
PORT=3000
```

---

# API Endpoints

## Books API

| Method | Endpoint                  | Description     |
| ------ | ------------------------- | --------------- |
| GET    | /books                    | Get all books   |
| GET    | /books/:id                | Get single book |
| POST   | /books                    | Add new book    |
| PUT    | /books/:id                | Update book     |
| DELETE | /books/:id                | Delete book     |
| GET    | /my-books?email=userEmail | Get user books  |

---

## Reviews API

| Method | Endpoint          | Description        |
| ------ | ----------------- | ------------------ |
| POST   | /comments         | Add comment/review |
| GET    | /comments/:bookId | Get all reviews    |

---

# Run Server Locally

```bash
npm install
nodemon index.js
```

or

```bash
node index.js
```

---

# Database

MongoDB Atlas is used for storing:

- Books
- Reviews/Comments

---

# Server Deployment

You can deploy server side using:

- Render
- Railway
- Cyclic
- Vercel Serverless

---

# Authentication

Firebase Authentication is used.

Authentication Methods:

- Email & Password Login
- Google Login

# Author

MD JAHIDUL ISLAM
