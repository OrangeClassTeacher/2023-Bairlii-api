import {
    create,
    getAll,
    getOne,
    DistrictFilter,
    getAllWithOutPagination,
    getAdvertisementByPropertyId,
    getPropertiesByUserId,
    getAdmin,
    RemoveAdvertisement,
} from "../controllers/advertisement.controller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route.post("/advertisements", getAll);
route.get("/advertisements/admin", auth, getAdmin)
route.get("/advertisement/:_id", getOne);
route.get("/advertisements/:_id", getPropertiesByUserId);
route.get("/advertisement/check/:_id", getAdvertisementByPropertyId);
route.get("/advertisements", getAllWithOutPagination);
route.post("/advertisement", auth, create);
route.post("/advertisement/filter/price", DistrictFilter);
route.delete("/advertisement/:_id", RemoveAdvertisement);

export default route;
