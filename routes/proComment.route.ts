import { create, getAll, getOne, deleteComment } from "../controllers/proComment.controller";

import { Router } from "express";

const route = Router();

route.get("/procomment", getAll);
route.get("/procomment/:_id", getOne);
route.get("/procomment/delete/:_id", deleteComment)

export default route;
