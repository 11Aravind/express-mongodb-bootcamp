import  express  from "express";
const rout=express.Router();
// import {savegallery} from "../controllers/Gallery-middleware.js"
import multer from "multer"
const upload = multer({ dest: './uploads/' })
rout.get('/',(req,res)=>{
    res.send("success")
});
rout.post("/savegallery",upload.single('galleryImage'),(req,res,next)=>{
   return res.status(200).json(req.galleryImage)
})
export default rout;