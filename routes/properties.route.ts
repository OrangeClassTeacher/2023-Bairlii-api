import {
  create,
  getAll,
  getOne,
  getPropertiesByUserId,
  updateProperties,
} from "../controllers/properties.contoller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route.get("/properties", getAll);
route.get("/properties/:_id", getOne);
route.get("/propertiesbyuser/:_id", getPropertiesByUserId);
route.post("/properties", auth, create);
route.put("/properties", updateProperties);

export default route;
