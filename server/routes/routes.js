import express from "express";
import { 
    getCarmodels, 
    getEmployees, 
    getTotalSales, 
    deleteCarmodel, 
    postCarmodel,
    postTest
} from "../controllers/routerLogic.js";

import {
    loginUser,
    deleteSession
} from "../controllers/login.js"

const router = express.Router();

// Routes
router.get("/employees", getEmployees);
router.get("/carmodels", getCarmodels);
router.post("/carmodels", postCarmodel);
router.delete("/carmodels", deleteCarmodel);
router.get("/total_sales", getTotalSales);

router.post("/loginuser", loginUser);
router.delete("/logoutuser", deleteSession);

router.post("/newtest", postTest);
// End routes

export default router;