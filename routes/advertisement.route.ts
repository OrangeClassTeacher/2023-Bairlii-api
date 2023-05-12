import { create, getAll, getOne, PriceFilter } from "../controllers/advertisement.contoller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route.post("/advertisements", getAll);
route.get("/advertisement/:_id", getOne);
route.post("/advertisement", auth, create);
route.get("/advertisement/filter/price", PriceFilter);

export default route;
