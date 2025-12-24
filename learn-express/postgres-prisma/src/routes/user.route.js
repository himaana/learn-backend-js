import express from "express";
import {
    createUserController,
    getUserContoller,
    updateUserController,
    deleteUserController,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", createUserController);
router.get("/", getUserContoller);
router.put("/:id", updateUserController);
router.delete("/:id", deleteUserController);

export default router;
