import {
  create,
  getAll,
  getOne,
} from "../controllers/propertiesComment.conroller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route.get("/procomment", getAll);
route.get("/procomment/:_id", getOne);
route.post("/procomment", auth, create);

export default route;
