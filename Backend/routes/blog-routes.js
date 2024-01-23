import express from "express";
import {getAllBlogs,addBlog,updateBlog} from "../controllers/Blog-Middleware.js"
const blogRouter=express.Router()
blogRouter.get("/",getAllBlogs)
blogRouter.post("/add",addBlog)
blogRouter.put("/update/:id",updateBlog)
export default blogRouter;