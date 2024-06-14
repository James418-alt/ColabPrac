import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConfig } from "./utils/dbConfig";
import { mainApp } from "./mainApp";
dotenv.config();

const app = express();
app.use(cors());
app.use(express.json());
mainApp(app);
app.listen(parseInt(process.env.PORT!), () => {
  dbConfig();
});
