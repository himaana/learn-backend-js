import { createUser, getUser } from "../services/user.service.js";

export const createUserController = async (req, res) => {
    const { name, email } = req.body;

    const user = await createUser({ name, email });

    res.status(201).json(user);
};

export const getUserContoller = async (req, res) => {
    const user = await getUser();
    res.json(user);
};
