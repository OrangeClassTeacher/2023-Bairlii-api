"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const advertisement_contoller_1 = require("../controllers/advertisement.contoller");
const auth_1 = __importDefault(require("../middleware/auth"));
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/advertisement", advertisement_contoller_1.getAll);
route.get("/advertisement/:_id", advertisement_contoller_1.getOne);
route.post("/advertisement", auth_1.default, advertisement_contoller_1.create);
exports.default = route;
