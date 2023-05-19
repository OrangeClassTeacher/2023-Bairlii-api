import {
    register,
    getAll,
    getOne,
    userLogin,
    updateUser,
    forgotPassword,
    resetPassword,
    deleteUser
} from "../controllers/users.controller";
import auth from "../middleware/auth";
import { Router } from "express";

const route = Router();

route
    .get("/users", auth, getAll)
    .post("/users", register)
    .post("/user/login", userLogin)
    .get("/user/:_id", getOne)
    .put("/user/:_id", updateUser)
    .post("/user/forgotPassword", forgotPassword)
    .post("/user/resetPassword", resetPassword)
    .get("/user/delete/:_id", deleteUser)


export default route;
