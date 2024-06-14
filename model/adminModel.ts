import { Schema, model } from "mongoose";
import { iAdmin } from "../utils/interface";
interface iAdminData extends iAdmin, Document {}
const adminModel = model<iAdminData>(
  "admins",
  new Schema({
    name: {
      type: String,
    },
    email: {
      type: String,
      require: true,
    },
    password: {
      type: String,
    },
    phone: {
      type: String,
    },
  })
);

export default adminModel;
