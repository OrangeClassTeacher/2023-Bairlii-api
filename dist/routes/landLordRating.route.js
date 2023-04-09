"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const landLordRating_controller_1 = require("../controllers/landLordRating.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/landlordrating", landLordRating_controller_1.getAll);
route.get("/landlordrating/:_id", landLordRating_controller_1.getOne);
route.put("/landlordrating", landLordRating_controller_1.create);
exports.default = route;
