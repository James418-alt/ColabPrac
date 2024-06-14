import { Application, Request, Response } from "express";
import router from "./router/router";

export const mainApp = (app: Application) => {
  app.use("/api", router);
};
