import { Router } from "express";
import { registerCustomer, loginCustomer } from "../controllers/customer.controller";

const router = Router();

router.post("/register", registerCustomer);
router.post("/login", loginCustomer);

export default router;

