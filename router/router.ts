import { Router } from "express";
import {
  createUser,
  signinUser,
  verifyUser,
} from "../controller/adminController";

const router = Router();
router.route("/create-user").post(createUser);
router.route("/verify-user/:Id").post(verifyUser);
router.route("/signIn-user").post(signinUser);

export default router;
