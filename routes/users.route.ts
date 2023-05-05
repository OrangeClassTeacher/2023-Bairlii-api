import {
    register,
    getAll,
    getOne,
    userLogin,
    updateUser,
} from "../controllers/users.contoller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route
    .get("/users", auth, getAll)
    .post("/users", register)
    .post("/userlogin", userLogin)
    .get("/user/:_id", getOne)
    .put("/user/id", updateUser)

export default route;
