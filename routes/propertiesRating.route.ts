import {
    create,
    getAll,
    getOne,
} from "../controllers/propertiesRating.controller";

import { Router } from "express";

const route = Router();

route.get("/prorating", getAll);
route.get("/prorating/:_id", getOne);
route.post("/prorating", create);

export default route;
