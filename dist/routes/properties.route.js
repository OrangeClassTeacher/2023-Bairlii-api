"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const properties_contoller_1 = require("../controllers/properties.contoller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/properties", properties_contoller_1.getAll);
route.get("/properties/:_id", properties_contoller_1.getOne);
exports.default = route;
