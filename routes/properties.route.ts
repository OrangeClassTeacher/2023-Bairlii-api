import { create, getAll, getOne } from "../controllers/properties.contoller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route.get("/properties", getAll);
route.get("/properties/:_id", getOne);
route.post("/properties", auth, create);

export default route;
