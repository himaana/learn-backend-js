import {
    createUser,
    getUser,
    updateUser,
    deleteUser,
} from "../services/user.service.js";

export const createUserController = async (req, res) => {
    try {
        const { name, email } = req.body;

        const user = await createUser({ name, email });

        res.status(201).json(user);
    } catch (error) {
        throw error;
    }
};

export const getUserContoller = async (req, res) => {
    try {
        const user = await getUser();
        res.json(user);
    } catch (error) {
        error;
    }
};

export const updateUserController = async (req, res) => {
    try {
        const id = Number(req.params.id);
        const { name, email } = req.body;

        const user = await updateUser(id, { name, email });
        res.json(user);
    } catch (error) {
        throw error;
    }
};

export const deleteUserController = async (req, res) => {
    try {
        const id = Number(req.params.id);

        await deleteUser(id);
        res.json({ message: "User deleted successfully" });
    } catch (error) {
        throw error;
    }
};
