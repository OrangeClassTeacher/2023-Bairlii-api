"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const renterRating_controller_1 = require("../controllers/renterRating.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/renterrating", renterRating_controller_1.getAll);
route.get("/renterrating/:_id", renterRating_controller_1.getOne);
route.post("/renterrating", renterRating_controller_1.create);
exports.default = route;
