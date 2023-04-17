import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import propertiesRoute from "./routes/properties.route";
import mongoose from "mongoose";
import usersRoute from "./routes/users.route";
import procommentRoute from "./routes/propertiesComment.route";
import proratingRoute from "./routes/propertiesRating.route";
import advertisementRoute from "./routes/advertisement.route";
import adhistory from "./routes/advertisementHistory.route";
import renterRating from "./routes/renterRating.route";
import landLordRating from "./routes/landLordRating.route";

dotenv.config();

const uri: string = process.env.MONGO_DB_URI || "";

const app: Express = express();
const port = process.env.PORT;

app.use(express.json());

mongoose
    .connect(uri)
    .then(() => console.log("DB success"))
    .catch((err) => console.log(err));

app.use("/api", usersRoute);
app.use("/api", propertiesRoute);
app.use("/api", procommentRoute);
app.use("/api", proratingRoute);
app.use("/api", advertisementRoute);
app.use("/api", adhistory);
app.use("/api", renterRating);
app.use("/api", landLordRating);

app.get("/", (req: Request, res: Response) => {
    res.send(" ⚡️⚡️⚡️⚡️⚡️Express + TypeScript Server");
});

app.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
