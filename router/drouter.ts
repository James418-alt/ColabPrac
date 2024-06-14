import { Router } from "express";
import { createDeliveryGuy } from "../controller/deliveryController";

const drouter = Router();
drouter.route("/create-delivery").post(createDeliveryGuy);

export default drouter;
