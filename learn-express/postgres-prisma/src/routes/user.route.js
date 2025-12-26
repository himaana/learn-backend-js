import express from "express";
import {
    createUserController,
    getUserContoller,
    updateUserController,
    deleteUserController,
} from "../controllers/user.controller.js";

import { validate } from "../middlewares/validate.middleware.js";
import {
    createUserSchema,
    updateUserSchema,
} from "../validations/user.validation.js";

import { authMiddleware } from "../middlewares/auth.middleware.js";

const router = express.Router();

router.post("/", validate(createUserSchema), createUserController);
router.get("/", authMiddleware, getUserContoller);
router.put("/:id", validate(updateUserSchema), updateUserController);
router.delete("/:id", deleteUserController);

export default router;
