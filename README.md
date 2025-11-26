# 📘 Express.js REST API – Week 2 Assignment

This project is a **fully functional RESTful API** built with **Node.js** and **Express.js**, implementing CRUD operations, middleware, authentication, validation, error handling, filtering, pagination, and search.

---

## 🚀 Features

- Complete RESTful CRUD API for **Products**
- **Custom middleware**:
  - Request logger
  - JSON body parser
  - API-key authentication
  - Data validation
- **Global error handling** system
- **Custom Error Classes**: `NotFound`, `ValidationError`, `AuthError`
- Filtering, **search**, and **pagination**
- **Product statistics endpoint**
- **Environment variables** support using `.env`

---

## 📂 Project Structure
express-api-week2/
│
├── server.js
├── package.json
├── .env
├── .env.example
│
├── controllers/
│ └── productsController.js
│
├── routes/
│ └── products.js
│
├── middleware/
│ ├── logger.js
│ ├── auth.js
│ ├── validateProduct.js
│ └── errorHandler.js
│
└── utils/
└── errors.js


---

## 🛠 Installation & Setup

1. **Clone the repository**

```bash
git clone <your-classroom-repo-url>
cd express-api-week2

2. Install Dependencies
npm install

3.Create a .env file 
Use .env.example as a guide:
PORT=3000
API_KEY=123456

4.Start Server
node server.js

You should see:
Server running on port 3000

📡 API Endpoints Documentation
Base URL
http://localhost:3000/api/products

👨‍💻 Author
Blessing Ogbobula
Express.js Week 2 – REST API Assignment



