"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const landLordRating_controller_1 = require("../controllers/landLordRating.controller");
const auth_1 = __importDefault(require("../middleware/auth"));
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/landlordrating", landLordRating_controller_1.getAll);
route.get("/landlordrating/:_id", landLordRating_controller_1.getOne);
route.post("/landlordrating", auth_1.default, landLordRating_controller_1.create);
exports.default = route;
