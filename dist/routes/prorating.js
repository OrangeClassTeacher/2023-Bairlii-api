"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const prorating_1 = require("../controllers/prorating");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/prorating", prorating_1.getAll);
route.get("/prorating/:_id", prorating_1.getOne);
exports.default = route;
