import express from "express";
import { 
    getCarmodels, 
    getEmployees, 
    getTotalSales, 
    deleteCarmodel, 
    postCarmodel,
    postTest,
    newUser,
    getOneEmployee,
    getSession,
    loginUser,
    deleteSession
} from "../controllers/routerLogic.js";

const router = express.Router();

// Routes
router.get("/employees", getEmployees);
router.get("/getsession", getSession);
router.get("/getoneemployee", getOneEmployee)
router.get("/carmodels", getCarmodels);
router.post("/carmodels", postCarmodel);
router.delete("/carmodels", deleteCarmodel);
router.get("/total_sales", getTotalSales);

router.post("/loginuser", loginUser);
router.delete("/logoutuser", deleteSession);
router.post("/adduser", newUser )
router.post("/newtest", postTest);
// End routes

export default router;