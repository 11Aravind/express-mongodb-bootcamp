import express from "express";
import upload from "../controllers/multer-middleware.js";
import multer from "multer";
import { getCategory,saveCategory } from "../controllers/Category-middleware.js"
const router = express.Router();
router.get("/", getCategory);
router.post("/add",upload.single("image"), saveCategory);
export default router;