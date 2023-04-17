import { create, getAll, getOne } from "../controllers/properties.contoller";

import { Router } from "express";

const route = Router();

route.get("/properties", getAll);
route.get("/properties/:_id", getOne);
route.post("/properties", create);

export default route;
