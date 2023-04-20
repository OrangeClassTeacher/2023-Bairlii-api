import { create, getAll, getOne } from "../controllers/renterRating.controller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route.get("/renterrating", getAll);
route.get("/renterrating/:_id", getOne);
route.post("/renterrating", auth, create);

export default route;
