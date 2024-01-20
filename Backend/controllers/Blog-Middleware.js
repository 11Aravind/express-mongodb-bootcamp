import Blog from "../models/Blog.js"
export const getAllBlogs=async(req,res,next)=>{
let blogDetails;
try{
    blogDetails=await Blog.find();
}
catch(err){
    return console.log(err);
}
if(blogDetails.length===0)
    return res.status(404).json({message:"Blog was empty"})
return res.status(200).json({blogDetails});
}

export const addBlog=async(req,res,next)=>{
const {title,description,image,user_id}=req.body;
const newBlog=new Blog({
    title,
    description,
    image,
    user_id
});
try{
   await newBlog.save();
}catch(error){
    return console.log(error);
}
return res.status(200).json({message:"New blog was added"})
}
const update=async(req,res,next)=>{
const blogId=req.params.id;
}