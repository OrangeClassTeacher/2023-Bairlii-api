import {
    create,
    getAll,
    getOne,
    PriceFilter,
    getAllWithOutPagination,
    getAdvertisementByPropertyId,
    getPropertiesByUserId,
    RemoveAdvertisement,
} from "../controllers/advertisement.controller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route.post("/advertisements", getAll);
route.get("/advertisement/:_id", getOne);
route.get("/advertisements/:_id", getPropertiesByUserId);
route.get("/advertisement/check/:_id", getAdvertisementByPropertyId);
route.get("/advertisements", getAllWithOutPagination);
route.post("/advertisement", auth, create);
route.get("/advertisement/filter/price", PriceFilter);
route.delete("/advertisement/:_id", RemoveAdvertisement);

export default route;
