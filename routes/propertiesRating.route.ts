import {
    create,
    getAll,
    getOne,
} from "../controllers/propertiesRating.controller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route.get("/prorating", getAll);
route.get("/prorating/:_id", getOne);
route.post("/prorating", auth, create);

export default route;
