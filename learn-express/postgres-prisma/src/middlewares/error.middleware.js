import AppError from "../errors/AppError.js";
import { Prisma } from "@prisma/client";

export const errorHandler = (err, req, res, next) => {
    console.error(err);

    // Custom AppError
    if (err instanceof AppError) {
        return res.status(err.statusCode).json({
            message: err.message,
        });
    }

    // Prisma errors
    if (err instanceof Prisma.PrismaClientKnownRequestError) {
        // Unique constraint failed
        if (err.code === "P2002") {
            return res.status(409).json({
                message: "Email already exists",
            });
        }

        // Record not found
        if (err.code === "P2025") {
            return res.status(404).json({
                message: "Resource not found",
            });
        }

        // Fallback
        return res.status(500).json({
            message: "Internal server error",
        });
    }
};
