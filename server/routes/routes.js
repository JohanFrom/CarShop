import express from "express";
import { postTest } from "../controllers/routerLogic.js";


const router = express.Router();

// Routes
router.post("/newtest", postTest);

// End routes

export default router;