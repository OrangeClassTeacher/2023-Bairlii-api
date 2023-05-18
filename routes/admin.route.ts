import {
    adminLogin,
    
} from "../controllers/admin.controller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route
    .post("/admin/login", adminLogin)

export default route;