import { create, getAll, getOne } from "../controllers/renterRating.controller";

import { Router } from "express";

const route = Router();

route.get("/renterrating", getAll);
route.get("/renterrating/:_id", getOne);
route.put("/renterrating", create);

export default route