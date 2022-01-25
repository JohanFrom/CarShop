import express from "express";
import { 
    getCarmodels, 
    getEmployees, 
    getTotalSales, 
    deleteCarmodel, 
    postCarmodel 
} from "../controllers/routerLogic.js";

const router = express.Router();

// Routes
router.get("/employees", getEmployees);
router.get("/carmodels", getCarmodels);
router.post("/carmodel", postCarmodel);
router.delete("/carmodel", deleteCarmodel);
router.get("/total_sales", getTotalSales);
// End routes

export default router;