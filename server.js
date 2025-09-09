// const express = require("express");
// const color = require("colors");

import express from "express";
import colors from "colors";
import dotenv from "dotenv";
import morgan from "morgan";
import connectDB from "./config/db.js";
import authRoutes from "./routes/authRoute.js";
import cors from "cors";
import categoryRoute from "./routes/categoryRoutes.js";
import productRoutes from "./routes/productRoutes.js";

dotenv.config();

connectDB();

const app = express();

app.use(express.json());
app.use(morgan("dev"));
app.use(cors());

app.get("/", (req, res) => {
  res.send({
    message: "Welcome to eCommerce Application",
  });
});

app.use("/api/v1/auth", authRoutes);
app.use("/api/v1/category", categoryRoute);
app.use("/api/v1/product", productRoutes);

// const PORT = 8080;
const PORT = process.env.PORT || 8080;

app.listen(PORT, () =>
  console.log(
    `Server Started and Listening on Port Number ${PORT}`.bgCyan.white
  )
);
