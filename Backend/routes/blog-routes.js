import express from "express";
import multer from "multer";
import {getAllBlogs,addBlog,updateBlog} from "../controllers/Blog-Middleware.js"

const storage=multer.diskStorage({
    destination:function(req,image,cb){
        return cb(null,"./public/Images")
    },
    filename:(function(req,image,cb){
        return cb(null,`${Date.now()}_${file.originalname}`)
    })
})

const upload=multer({storage})
const blogRouter=express.Router()
blogRouter.get("/",getAllBlogs)
blogRouter.post("/add",upload.single('image'),(req,res,next)=>{
    console.log(req.body)
})//addBlog
blogRouter.put("/update/:id",updateBlog)
export default blogRouter;