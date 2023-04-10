import { create, getAll, getOne } from "../controllers/propertiesComment.conroller";

import { Router } from "express";

const route = Router();

route.get("/procomment", getAll);
route.get("/procomment/:_id", getOne);

export default route;
