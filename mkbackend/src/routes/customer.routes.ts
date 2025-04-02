import { Router } from "express";
import { registerCustomer, loginCustomer , getCustomerProfile} from "../controllers/customer.controller";
import { authenticateJWT } from "../middleware/auth";
const router = Router();

router.post("/register", registerCustomer);
router.post("/login", loginCustomer);
router.get("/profile", authenticateJWT, getCustomerProfile);


export default router;
