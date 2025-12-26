import { ZodError } from "zod";
import AppError from "../errors/AppError.js";

export const validate = (schema) => (req, res, next) => {
    try {
        schema.parse({
            body: req.body,
            params: req.params,
            query: req.query,
        });

        next();
    } catch (error) {
        if (error instanceof ZodError) {
            const message = error.issues[0]?.message || "Validaion error";
            next(new AppError(message, 400));
        }
    }
};
