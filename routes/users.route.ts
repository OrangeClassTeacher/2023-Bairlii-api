import {
    register,
    getAll,
    getOne,
    userLogin,
    updateUser,
    forgotPassword,
    resetPassword
} from "../controllers/users.contoller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route
    .get("/users", auth, getAll)
    .post("/users", register)
    .post("/userlogin", userLogin)
    .get("/user/:_id", getOne)
    .put("/user/:_id", updateUser)
    .post("/user/forgotPassword", forgotPassword)
    .post("/user/resetPassword", resetPassword)


export default route;
