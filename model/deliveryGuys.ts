import { Document, Schema, model } from "mongoose";
import { iDelivery } from "../utils/deliveyInterface";
interface iDeliveryData extends iDelivery, Document {}
const deliveryModel = model<iDeliveryData>(
  "deliveryGuys",
  new Schema(
    {
      Fname: {
        type: String,
      },
      Lname: {
        type: String,
      },
      email: {
        type: String,
        require: true,
      },
      phone: {
        type: String,
      },
    },
    { timestamps: true }
  )
);

export default deliveryModel;
