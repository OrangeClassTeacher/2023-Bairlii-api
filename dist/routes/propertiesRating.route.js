"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const propertiesRating_controller_1 = require("../controllers/propertiesRating.controller");
const auth_1 = __importDefault(require("../middleware/auth"));
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/prorating", propertiesRating_controller_1.getAll);
route.get("/prorating/:_id", propertiesRating_controller_1.getOne);
route.post("/prorating", auth_1.default, propertiesRating_controller_1.create);
exports.default = route;
