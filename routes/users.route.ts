import { create, getAll, getOne } from "../controllers/users.contoller";

import { Router } from "express";

const route = Router();

route.get("/users", getAll).post("/users", create).get("/user/:_id", getOne);

export default route;
