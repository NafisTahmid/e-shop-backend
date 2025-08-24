require("dotenv/config");
const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const mongoose = require("mongoose");
const swaggerUi = require("swagger-ui-express");
const swaggerFile = require("./swagger-output.json");
const productRoutes = require("./routers/products");
const categoryRoutes = require("./routers/categories");
const userRoutes = require("./routers/users");
const orderRoutes = require("./routers/orders");
const authJwt = require("./helper/jwt");
const errorHandler = require("./helper/error-handler");

// Middleware
const app = express();
app.use(
  cors({
    origin: true,
    credentials: true,
    methods: ["GET", "POST", "PUT", "PATCH", "DELETE", "OPTIONS"],
    allowedHeaders: ["Content-Type", "Authorization"],
  })
);

// app.options("*", cors());
app.use(express.json());
app.use(morgan("tiny"));
// app.use(authJwt());
app.use(errorHandler);
app.use("/public/uploads", express.static(__dirname + "/public/uploads"));

const api = process.env.API_URL;
app.use(`${api}/products`, productRoutes);
app.use(`${api}/categories`, categoryRoutes);
app.use(`${api}/users`, userRoutes);
app.use(`${api}/orders`, orderRoutes);
app.use(`${api}/api-docs`, swaggerUi.serve, swaggerUi.setup(swaggerFile));

mongoose
  .connect(process.env.MONGODB_URI, {
    dbName: "eshop-database",
  })
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
  });

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
