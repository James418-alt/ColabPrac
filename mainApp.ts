import { Application, Request, Response } from "express";
import router from "./router/router";
import drouter from "./router/drouter";

export const mainApp = (app: Application) => {
  app.use("/api", router);
  app.use("/api", drouter);
};
