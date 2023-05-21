import {
  create,
  getAll,
  getOne,
  findByPropertyId,
  deleteComment
} from "../controllers/propertiesComment.controller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route.get("/procomment", auth, getAll);
route.get("/procomment/:_id", getOne);
route.get("/procomments/:_id", findByPropertyId);
route.post("/procomment", auth, create);
route.delete("/proComments/delete/:_id", deleteComment);

export default route;
