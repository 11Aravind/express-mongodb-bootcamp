import multer from "multer";
import Blog from "../models/Blog.js";
import upload from "./multer-middleware.js";
export const getAllBlogs = async (req, res, next) => {
    let blogDetails;
    try {
        blogDetails = await Blog.find();
    }
    catch (err) {
        return console.log(err);
    }
    if (blogDetails.length === 0)
        return res.status(404).json({ message: "Blog was empty" })
    return res.status(200).json({ blogDetails });
}

export const addBlog = async (req, res, next) => {
  console.log(req.file);
    const { tittle, description } = req.body;
    const image=req.file.path;
    const newBlog = new Blog({
        tittle,
        image,
        description
    });
    try {
        await newBlog.save();
    } catch (error) {
        return res.status(400).json({ message: "not found" })
    }
    return res.status(200).json({ message: "New blog was added" })
}
// export const addBlog = (req, res, next) => {
//     upload(req, res, async function (err) {
//       if (err instanceof multer.MulterError) {
//         // A Multer error occurred when uploading.
//         return res.status(500).json({ error: err.message });
//       } else if (err) {
//         // An unknown error occurred when uploading.
//         return res.status(500).json({ error: 'An error occurred while uploading the image.' });
//       }
  
//       // Image uploaded successfully.
//       // Now insert other form data into MongoDB using Mongoose.
   
//       try {
//         const { tittle, description } = req.body;
//         const newBlog = new Blog({
//             tittle,
//             description,
//             image:req.image.path,
//         });
  
//         // Save the new data to MongoDB
//         await newBlog.save();
//         res.status(201).json({ message: 'Data saved successfully.' });
//       } catch (error) {
//         res.status(500).json({ error: 'An error occurred while saving data to MongoDB.' });
//       }
//     });
//   };
export const updateBlog = async (req, res, next) => {
    const { title, description } = req.body;
    const blogId = req.params.id;
    let blog;
    try {
        //findByIdAndUpdate(id,update cheyyenda value) ite id find cheythe value update akkikollum
        blog = await Blog.findByIdAndUpdate(blogId,
            { title, description }
        )
    } catch (error) {
        return console.log(error);
    }
    if (!blog)
        return res.status(500).json({ message: "Unable to update" })
    return res.status(200).json({ blog })
}