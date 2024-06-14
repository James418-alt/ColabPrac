import { Router } from "express";

const drouter = Router();
drouter.route("/create-delivery").post();

export default drouter;
