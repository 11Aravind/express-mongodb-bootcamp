import express from "express";
import {getAllBlogs,addBlog} from "../controllers/Blog-Middleware.js"
const blogRouter=express.Router()
blogRouter.get("/",getAllBlogs)
blogRouter.post("/add",addBlog)
blogRouter.put("/update/:id",addBlog)
export default blogRouter;