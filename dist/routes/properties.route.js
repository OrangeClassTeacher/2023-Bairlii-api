"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const properties_contoller_1 = require("../controllers/properties.contoller");
const auth_1 = __importDefault(require("../middleware/auth"));
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/properties", properties_contoller_1.getAll);
route.get("/properties/:_id", properties_contoller_1.getOne);
route.post("/properties", auth_1.default, properties_contoller_1.create);
exports.default = route;
