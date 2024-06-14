import { Router } from "express";
import {
  deleteDg,
  createDeliveryGuy,
  viewAllDg,
} from "../controller/deliveryController";

const drouter = Router();
drouter.route("/create-dg").post(createDeliveryGuy);
drouter.route("/view-dg").get(viewAllDg);
drouter.route("/delete-dg/:Id").post(deleteDg);

export default drouter;
