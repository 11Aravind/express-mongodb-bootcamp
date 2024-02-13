import upload from "./multer-middleware";
import multer from "multer";
import Category from "../models/Category";
export const saveCategory = async (req, res, next) => {
    const { mainCategory, Category, subCategory } = req.body;
    const image = req.file.path;
    const newCategory = new Category({
        mainCategory,
        Category,
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
