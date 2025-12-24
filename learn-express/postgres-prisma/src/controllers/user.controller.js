import {
    createUser,
    getUser,
    updateUser,
    deleteUser,
} from "../services/user.service.js";

export const createUserController = async (req, res) => {
    const { name, email } = req.body;

    const user = await createUser({ name, email });

    res.status(201).json(user);
};

export const getUserContoller = async (req, res) => {
    const user = await getUser();
    res.json(user);
};

export const updateUserController = async (req, res) => {
    const id = Number(req.params.id);
    const { name, email } = req.body;

    const user = await updateUser(id, { name, email });
    res.json(user);
};

export const deleteUserController = async (req, res) => {
    const id = Number(req.params.id);

    await deleteUser(id);
    res.json({ message: "User deleted successfully" });
};
