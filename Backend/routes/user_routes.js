import express from "express";
import { getUserDetails,signupMiddleware } from "../controllers/User-middleware.js";
const router = express.Router();

router.get("/", getUserDetails);
router.post("/signup", signupMiddleware);
export default router;