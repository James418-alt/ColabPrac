import { Document, Schema, model } from "mongoose";
import { iAdmin } from "../utils/interface";
interface iAdminData extends iAdmin, Document {}
const adminModel = model<iAdminData>(
  "admins",
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
      password: {
        type: String,
      },
      phone: {
        type: String,
      },
    },
    { timestamps: true }
  )
);

export default adminModel;
