import express from "express";
import upload from "../controllers/multer-middleware";
import { getAllBlogs, addBlog, updateBlog } from "../controllers/Blog-Middleware.js"
const blogRouter = express.Router()
blogRouter.get("/", getAllBlogs)
blogRouter.post("/add", upload.single('file'), (req, res, next) => {
    // res.json({ message: 'File uploaded successfully!' });
    res.json({message:req.body})
})//addBlog
blogRouter.put("/update/:id", updateBlog)
export default blogRouter;