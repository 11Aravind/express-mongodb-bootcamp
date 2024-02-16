import upload from "./multer-middleware.js";
import multer from "multer";
import Category from "../models/Category.js";
export const saveCategory = async (req, res, next) => {
    const { mainCategory, category, subCategory } = req.body;
    const image = req.file.path;
    const newCategory = new Category({
        mainCategory,
        category,
        subCategory,
        image
    })
    try {
        await newCategory.save();
    } catch (err) {
        res.status(400).json({ message: "some thinking went wrong" })
    }
    return res.status(200).json({ message: "New category was added" })
}
