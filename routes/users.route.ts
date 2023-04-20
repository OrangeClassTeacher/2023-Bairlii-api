import { create, getAll, getOne } from "../controllers/users.contoller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route
    .get("/users", auth, getAll)
    .post("/users", create)
    .get("/user/:_id", getOne);

export default route;
