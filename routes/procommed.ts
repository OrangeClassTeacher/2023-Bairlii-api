import { create, getAll, getOne } from "../controllers/procommend";

import { Router } from "express";

const route = Router();

route.get("/procommend", getAll);
route.get("/procommend/:_id", getOne);

export default route;
