import prisma from "../prisma.js";

export const createUser = async (data) => {
    return await prisma.user.create({ data });
};

export const getUser = async () => {
    return await prisma.user.findMany();
};

export const updateUser = async (id, data) => {
    try {
        return await prisma.user.update({
            where: { id },
            data,
        });
    } catch (error) {
        throw error;
    }
};

export const deleteUser = async (id) => {
    try {
        return await prisma.user.delete({
            where: { id },
        });
    } catch (error) {
        throw error;
    }
};
