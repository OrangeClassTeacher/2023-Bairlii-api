import { create, getAll, getOne } from "../controllers/landLordRating.controller";

import { Router } from "express";

const route = Router();

route.get("/landlordrating", getAll);
route.get("/landlordrating/:_id", getOne);
route.put("/landlordrating", create);

export default route