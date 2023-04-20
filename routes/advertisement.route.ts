import { create, getAll, getOne } from "../controllers/advertisement.contoller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route.get("/advertisement", getAll);
route.get("/advertisement/:_id", getOne);
route.post("/advertisement", auth, create);

export default route;
