import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { dbConfig } from "./dbConfig";
dotenv.config();

const app = express();
app.use(cors);

app.listen(parseInt(process.env.PORT!), () => {
  dbConfig();
});
