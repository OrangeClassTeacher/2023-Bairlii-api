"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const propertiesRating_controller_1 = require("../controllers/propertiesRating.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/prorating", propertiesRating_controller_1.getAll);
route.get("/prorating/:_id", propertiesRating_controller_1.getOne);
route.post("/prorating", propertiesRating_controller_1.create);
exports.default = route;
