import {
  create,
  getAll,
  getOne,
  findByPropertyId,
} from "../controllers/propertiesComment.conroller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route.get("/procomment", getAll);
route.get("/procomment/:_id", getOne);
route.get("/procomments/:_id", findByPropertyId);
route.post("/procomment", auth, create);

export default route;
