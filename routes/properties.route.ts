import {
    create,
    getAll,
    getOne,
    getPropertiesByUserId,
    DistrictFilter,
    RoomFilter1,
    SquareFilter,
    updateProperties,
    RemoveProperty,
} from "../controllers/properties.controller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route.get("/properties", getAll);
route.get("/properties/:_id", getOne);
route.get("/propertiesbyuser/:_id", getPropertiesByUserId);
route.post("/properties", auth, create);
route.put("/properties", auth, updateProperties);
route.get("/properties/filter/room", RoomFilter1);
route.get("/properties/filter/area", SquareFilter);
route.get("/properties/filter/district/:_id", DistrictFilter);
route.delete("/properties/:_id", RemoveProperty);

export default route;
