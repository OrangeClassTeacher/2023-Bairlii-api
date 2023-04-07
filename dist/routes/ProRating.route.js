"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proRating_controller_1 = require("../controllers/proRating.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/prorating", proRating_controller_1.getAll);
route.get("/prorating/:_id", proRating_controller_1.getOne);
exports.default = route;
