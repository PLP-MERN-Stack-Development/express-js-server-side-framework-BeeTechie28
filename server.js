const express = require("express");
const bodyParser = require("body-parser");
require("dotenv").config();

const productRoutes = require("./routes/products");
const logger = require("./middleware/logger");
const { errorHandler, NotFoundError } = require("./utils/errors");

const app = express();

// Middleware
app.use(bodyParser.json());
app.use(logger);

// Test route
app.get("/", (req, res) => {
    res.send("Hello World");
});

// API route
app.use("/api/products", productRoutes);

// Handle 404 errors
app.use((req, res, next) => {
    next(new NotFoundError("Route not found"));
});

// Global Error Handler
app.use(errorHandler);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
