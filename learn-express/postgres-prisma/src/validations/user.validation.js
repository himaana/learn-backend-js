import { z } from "zod";

export const createUserSchema = z.object({
    body: z.object({
        name: z.string().min(1, "Name is required"),
        email: z.email("Invalid email format"),
    }),
});

export const updateUserSchema = z.object({
    body: z.object({
        name: z.string().min(1).optional(),
        email: z.email().optional(),
    }),
});
