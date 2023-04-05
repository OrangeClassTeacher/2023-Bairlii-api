import { create, getAll, getOne } from "../controllers/advertisement.contoller";

import { Router } from "express";

const route = Router();

route.get("/advertisement", getAll);
route.get("/advertisement/:_id", getOne);
route.put("/advertisement", create);

export default route;
