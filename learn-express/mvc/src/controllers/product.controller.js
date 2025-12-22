import { fetchProduct } from "../services/product.service.js";

export const getProduct = (req, res) => {
    const product = fetchProduct();
    res.json(product);
};
