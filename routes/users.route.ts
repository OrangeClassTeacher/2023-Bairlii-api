import { create, getAll } from "../controllers/users.contoller";

import { Router } from "express";

const route = Router();

route.get("/users", getAll).post("/users", create);

export default route;
