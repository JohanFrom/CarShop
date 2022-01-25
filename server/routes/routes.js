import express from "express";
import { 
    getCarmodels, 
    getEmployees, 
    getTotalSales, 
    deleteCarmodel, 
    postCarmodel 
} from "../controllers/routerLogic.js";

import {
    loginUser,
    deleteSession
} from "../controllers/login.js"

const router = express.Router();

// Routes
router.get("/employees", getEmployees);
router.get("/carmodels", getCarmodels);
router.post("/carmodel", postCarmodel);
router.delete("/carmodel", deleteCarmodel);
router.get("/total_sales", getTotalSales);

router.post("/loginuser", loginUser);
router.delete("/logoutuser", deleteSession);
// End routes

export default router;