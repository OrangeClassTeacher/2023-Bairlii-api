"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const users_contoller_1 = require("../controllers/users.contoller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/users", users_contoller_1.getAll).post("/users", users_contoller_1.create);
exports.default = route;
