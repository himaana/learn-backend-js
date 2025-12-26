import express from "express";
import userRoutes from "./routes/user.route.js";
import authRoutes from "./routes/auth.route.js";
import productRoutes from "./routes/product.route.js";
import { errorHandler } from "./middlewares/error.middleware.js";

const app = express();

app.use(express.json());

app.use("/api/users", userRoutes);

app.use("/api/products", productRoutes);

app.use("/api/auth", authRoutes);

app.use(errorHandler);

export default app;
