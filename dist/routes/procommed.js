"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const procommend_1 = require("../controllers/procommend");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/procommend", procommend_1.getAll);
route.get("/procommend/:_id", procommend_1.getOne);
exports.default = route;
