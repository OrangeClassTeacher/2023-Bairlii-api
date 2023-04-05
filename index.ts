import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import propertiesRoute from "./routes/properties.route";
import mongoose from "mongoose";

dotenv.config();

const app: Express = express();
const port = process.env.PORT;

const uri: string = process.env.DB_URI || "";

mongoose
  .connect(uri)
  .then(() => console.log("DB success"))
  .catch((err) => console.log(err));

app.use("/api", propertiesRoute);

app.get("/api", (req: Request, res: Response) => {
  res.send(" ⚡️⚡️⚡️⚡️⚡️Express + TypeScript Server");
});

app.listen(port, () => {
  console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
