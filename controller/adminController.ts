import { Request, Response } from "express";
import bcrypt from "bcrypt";
import adminModel from "../model/adminModel";
import { sendMail } from "../utils/email";
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
    await sendMail(getD);
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

export const verifyUser = async (req: Request, res: Response) => {
  try {
    const { Id } = req.params;
    const getD = await adminModel.findByIdAndUpdate(
      Id,
      { verify: true },
      { new: true }
    );
    res.status(200).json({
      message: "User Verified",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Error Occured",
      status: 400,
      error: error.message,
    });
  }
};

export const signinUser = async (req: Request, res: Response) => {
  try {
    const { email, password } = req.body;
    const userExist = await adminModel.findOne({ email });
    const salt = await bcrypt.genSalt(10);
    const hashed = await bcrypt.hash(password, salt);
    if (userExist) {
      if (userExist.verify) {
        const passCheck = await bcrypt.compare(password, hashed);
        if (passCheck) {
          res.status(200).json({
            message: "Logged in Successfully",
            data: userExist,
            status: 200,
          });
        } else {
          res.status(400).json({
            message: "Password Incorrect",
            status: 400,
          });
        }
      } else {
        res.status(400).json({
          message: "User not Verified yet",
          status: 400,
        });
      }
    } else {
      res.status(400).json({
        message: "User doesn't exist",
        status: 400,
      });
    }
  } catch (error) {
    res.status(400);
  }
};

export const viewAll = async (req: Request, res: Response) => {
  try {
    const getD = await adminModel.find();
    res.status(200).json({
      message: "All Users",
      status: 200,
      data: getD,
    });
  } catch (error: any) {
    res.status(200).json({
      message: "Error Occured",
      status: 400,
    });
  }
};

export const viewOne = async (req: Request, res: Response) => {
  try {
    const { Id } = req.params;
    const getD = await adminModel.findById(Id);
    res.status(200).json({
      message: "User Found",
      data: getD,
      status: 200,
    });
  } catch (error: any) {
    res.status(400).json({
      message: "Error Occured",
      status: 400,
    });
  }
};
