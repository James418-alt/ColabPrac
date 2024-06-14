import { Request, Response } from "express";
import bcrypt from "bcrypt";
import adminModel from "../model/adminModel";
export const createUser = async (req: Request, res: Response) => {
  try {
    const { Fname, Lname, email, password, phone } = req.body;
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    const getD = await adminModel.create({
      Fname,
      Lname,
      email,
      password: hashed,
      phone,
    });
    res.status(200).json({
      message: "User created successfully!",
      data: getD,
      status: 200,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};
