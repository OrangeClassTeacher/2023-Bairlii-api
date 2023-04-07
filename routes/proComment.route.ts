import { create, getAll, getOne } from "../controllers/proComment.conroller";

import { Router } from "express";

const route = Router();

route.get("/procomment", getAll);
route.get("/procomment/:_id", getOne);

export default route;
