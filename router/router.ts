import { Router } from "express";
import { createUser } from "../controller/adminController";

const router = Router();
router.route("/create-user").post(createUser);

export default router;
