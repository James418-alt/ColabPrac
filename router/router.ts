import { Router } from "express";
import {
  createUser,
  signinUser,
  verifyUser,
  viewAll,
} from "../controller/adminController";

const router = Router();
router.route("/create-user").post(createUser);
router.route("/verify-user/:Id").post(verifyUser);
router.route("/signIn-user").post(signinUser);
router.route("/getAll-user").get(viewAll);
// router.route("/getOne-user/:Id").get(viewOne);

export default router;
