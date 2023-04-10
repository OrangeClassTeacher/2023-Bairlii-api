import { create, getAll, getOne } from "../controllers/advertisementHistory.controller";

import { Router} from "express";

const route = Router();

route.get("/adhistory", getAll);
route.get("/adhistory/:_id", getOne);
route.put("/adhistory", create);

export default route;