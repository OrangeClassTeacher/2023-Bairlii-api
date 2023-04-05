import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import mongoose from "mongoose";
import usersRoute from "./routes/users.route";


dotenv.config();

const uri: string = process.env.MONGO_DB_URI || "";

mongoose
    .connect(uri)
    .then(() => console.log("DB Success"))
    .catch((err) => console.log(err));

const app: Express = express();
const port = process.env.PORT;

app.use("/api", usersRoute);



app.get("/", (req: Request, res: Response) => {
    res.send(" ⚡️⚡️⚡️⚡️⚡️Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});


