import { registerUser } from "../services/user.service.js";
import { loginUser } from "../services/auth.service.js";

export const registerController = async (req, res, next) => {
    try {
        const { name, email, password } = req.body;
        const user = await registerUser({ name, email, password });

        res.status(201).json({
            id: user.id,
            name: user.name,
            email: user.email,
        });
    } catch (error) {
        next(error);
    }
};

export const loginController = async (req, res, next) => {
    try {
        const { email, password } = req.body;
        const token = await loginUser({ email, password });

        res.json({ token });
    } catch (error) {
        next(error);
    }
};
