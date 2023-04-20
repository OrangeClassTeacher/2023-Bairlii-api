import {
    create,
    getAll,
    getOne,
} from "../controllers/landLordRating.controller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route.get("/landlordrating", getAll);
route.get("/landlordrating/:_id", getOne);
route.post("/landlordrating", auth, create);

export default route;
