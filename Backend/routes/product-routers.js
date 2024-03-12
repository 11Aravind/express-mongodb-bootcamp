import express from "express";
const router=express.Router()
import {getProductDetails} from "../controllers/Product-middleware.js"
router.get('/',getProductDetails);
export default router;