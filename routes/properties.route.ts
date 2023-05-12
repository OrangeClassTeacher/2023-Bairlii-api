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
route.get("/properties/filter/room", RoomFilter1);
route.get("/properties/filter/area", SquareFilter);
route.get("/properties/filter/district/:_id", DistrictFilter);

export default route;
