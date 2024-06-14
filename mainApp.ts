import { Application, Request, Response } from "express";
import router from "./router/router";
// import drouter from "./router/deliveryrouter";s

export const mainApp = (app: Application) => {
  app.use("/api", router);
};
