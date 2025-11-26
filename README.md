📘 Express.js REST API – Week 2 Assignment

This project is a fully functional RESTful API built with Node.js and Express.js, implementing CRUD operations, middleware, authentication, validation, error handling, filtering, pagination, and search.

🚀 Features

Complete RESTful CRUD API for Products

Custom middleware:

Request logger

JSON body parser

API-key authentication

Data validation

Global error handling system

Custom Error Classes (NotFound, ValidationError, AuthError)

Filtering, search, and pagination

Product statistics endpoint

Environment variables support using .env

📂 Project Structure
express-api-week2/
│
├── server.js
├── package.json
├── .env
├── .env.example
│
├── controllers/
│     └── productsController.js
│
├── routes/
│     └── products.js
│
├── middleware/
│     ├── logger.js
│     ├── auth.js
│     ├── validateProduct.js
│     └── errorHandler.js
│
└── utils/
      └── errors.js

🛠 Installation & Setup
1. Clone the repository
git clone <your-classroom-repo-url>
cd express-api-week2

2. Install dependencies
npm install

3. Create a .env file

Use .env.example as a guide.

PORT=3000
API_KEY=123456

4. Start the server
node server.js


You should see:

Server running on port 3000

📡 API Endpoints Documentation
### Base URL
http://localhost:3000/api/products

📍 1. GET All Products
GET /api/products

Returns a list of all products with optional filters.

Query parameters:

category=...

page=1

limit=10

search=phone

Example Request

GET /api/products?page=1&limit=5

📍 2. GET Product by ID
GET /api/products/:id

Example Request

GET /api/products/123

📍 3. Create Product
POST /api/products

Required Header

api-key: your_api_key


Body Example

{
  "name": "iPhone 15",
  "description": "Latest Apple phone",
  "price": 900,
  "category": "electronics",
  "inStock": true
}

📍 4. Update Product
PUT /api/products/:id

Example Body

{
  "name": "Updated Name",
  "price": 950
}

📍 5. Delete Product
DELETE /api/products/:id
📊 6. Product Statistics
GET /api/products/stats

Returns:

Total count

Count per category

🔐 Authentication

Some routes require an API key.

Send your API key in headers:

api-key: your_api_key

🧪 Testing

Use Postman, Insomnia, or curl:

Example:

curl http://localhost:3000/api/products

❗Common Errors & Responses
Status	Meaning
400	Validation Error
401	Missing/Invalid API Key
404	Product Not Found
500	Server Error
👨‍💻 Author

Your Name (or GitHub username)
Express.js Week 2 – REST API Assignment

📥 Submission

Commit all your files

Push to your GitHub Classroom repository

Ensure .env.example is included

Do NOT include your real .env file

If you'd like, I can:

✅ Format this README into your exact project details
✅ Add examples for every single endpoint
✅ Insert badges, images, or diagrams
✅ Generate Markdown tables for sample output

Just tell me “upgrade the README” or what you want added.

You said:
format the readme into my exact project details and i want to paste this on vs code
ChatGPT said:

No available models support the tools in use. Try starting a new chat instead or try again later.

Retry