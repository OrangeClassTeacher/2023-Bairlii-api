"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const renterRating_controller_1 = require("../controllers/renterRating.controller");
const auth_1 = __importDefault(require("../middleware/auth"));
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/renterrating", renterRating_controller_1.getAll);
route.get("/renterrating/:_id", renterRating_controller_1.getOne);
route.post("/renterrating", auth_1.default, renterRating_controller_1.create);
exports.default = route;
