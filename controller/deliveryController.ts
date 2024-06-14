import { Request, Response, request } from "express";
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

export const viewAllDg = async (req: Request, res: Response) => {
  try {
    const getD = await deliveryModel.find();
    res.status(200).json({
      messgage: "Users List",
      data: getD,
      status: 200,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error Occured!",
      status: 400,
    });
  }
};

export const deleteDg = async (req: Request, res: Response) => {
  try {
    const { Id } = req.params;
    const getD = await deliveryModel.findByIdAndDelete(Id);
    res.status(200).json({
      message: "DeliveryGuy Deleted",
      data: getD,
      status: 200,
    });
  } catch (error) {
    res.status(400).json({
      message: "Error Occured!",
      data: 400,
    });
  }
};
