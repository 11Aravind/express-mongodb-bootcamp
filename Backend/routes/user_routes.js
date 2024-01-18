import express from "express";
import { signup } from "../controllers/User-middleware.js";
const router=express.Router();

router.get("/",(req,res)=>{
    res.send('Home Page')
    })
router.post("/signups",signup);
// router.get('/signup',(req,res)=>{
//     res.send("Signup page")
// })
export default router;