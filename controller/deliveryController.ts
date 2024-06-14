import { Request, Response } from "express";
import deliveryModel from "../model/deliveryGuys";

export const createDeliveryGuy = async (req: Request, res: Response) => {
  try {
    const { Fname, Lname, email, phone } = req.body;
    const getD = await deliveryModel.create({ Fname, Lname, email, phone });
    res.status(200).json({
      message: "Delivery Guy Created!",
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
