"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const users_contoller_1 = require("../controllers/users.contoller");
const auth_1 = __importDefault(require("../middleware/auth"));
const express_1 = require("express");
const route = (0, express_1.Router)();
route
    .get("/users", auth_1.default, users_contoller_1.getAll)
    .post("/users", users_contoller_1.create)
    .post("userlogin", users_contoller_1.userLogin)
    .get("/user/:_id", users_contoller_1.getOne);
exports.default = route;
