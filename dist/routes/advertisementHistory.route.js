"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const advertisementHistory_controller_1 = require("../controllers/advertisementHistory.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/adhistory", advertisementHistory_controller_1.getAll);
route.get("/adhistory/:_id", advertisementHistory_controller_1.getOne);
route.post("/adhistory", advertisementHistory_controller_1.create);
exports.default = route;
