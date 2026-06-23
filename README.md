# 🛒 FullStack E-Commerce

A responsive full-stack e-commerce application built with **React**, **Node.js**, **Express.js**, and **SQLite**. The application allows users to browse products, filter items by category, search products, and navigate through paginated results.

🌐 **Live Demo:** https://fullstack-ecommerce-frontend-wl6h.onrender.com/

---

## 🚀 Features

- 📦 Product listing
- 🏷️ Filter products by category
- 📄 Pagination support
- 📱 Responsive UI
- ⚡ REST API integration
- 🗄️ SQLite database
- 🌐 Backend deployment on Render
- 🎨 Clean and simple interface

---

## 🛠️ Tech Stack

### Frontend
- React.js
- React Router
- CSS

### Backend
- Node.js
- Express.js

### Database
- SQLite

### Tools
- Render
- Git & GitHub

---

## 📂 Project Structure

```
FullStack-Ecommerce/
│
├── frontend/
│   ├── src/
│   ├── public/
│   └── package.json
│
├── backend/
│   ├── config/
│   ├── routes/
│   ├── products.db
│   ├── seed.js
│   ├── server.js
│   └── package.json
│
└── README.md
```

---

## ⚙️ Installation

### Clone the repository

```bash
git clone https://github.com/saiteja-1-hub/fullstack-ecommerce.git
cd fullstack-ecommerce
```

---

## Backend Setup

Navigate to backend folder:

```bash
cd backend
```

Install dependencies:

```bash
npm install
```

Seed the database:

```bash
node seed.js
```

Start the server:

```bash
node server.js
```

Backend runs on:

```
http://localhost:3000
```

---

## Frontend Setup

Navigate to frontend folder:

```bash
cd frontend
```

Install dependencies:

```bash
npm install
```

Start the React application:

```bash
npm start
```

Frontend runs on:

```
http://localhost:3000
```

---

## API Endpoints

### Get Products

```http
GET /products
```

### Search Products

```http
GET /products?search=laptop
```

### Filter by Category

```http
GET /products?category=Electronics
```

### Pagination

```http
GET /products?page=1&limit=8
```

---

## Sample Response

```json
{
  "products": [
    {
      "id": 1,
      "name": "Wireless Headphones",
      "price": 2999,
      "category": "Electronics"
    }
  ],
  "totalPages": 5,
  "currentPage": 1
}
```

---

## Deployment

### Frontend
- Render

### Backend
- Render

---

 
  
## Author

**Sai Teja**

- GitHub: https://github.com/saiteja-1-hub
- LinkedIn: www.linkedin.com/in/saiteja-elukapally

---

## License

This project is developed for learning and portfolio purposes.
