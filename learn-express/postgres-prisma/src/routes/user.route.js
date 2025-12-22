import express from "express";
import {
    createUserController,
    getUserContoller,
} from "../controllers/user.controller.js";

const router = express.Router();

router.post("/", createUserController);
router.get("/", getUserContoller);

export default router;
