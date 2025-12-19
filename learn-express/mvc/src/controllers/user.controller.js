import { fetchUser } from "../services/user.service.js";

export const getUser = (req, res) => {
    const user = fetchUser();
    res.json(user);
};
