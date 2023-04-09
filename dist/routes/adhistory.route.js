"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const adhistory_controller_1 = require("../controllers/adhistory.controller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/adhistory", adhistory_controller_1.getAll);
route.get("/adhistory/:_id", adhistory_controller_1.getOne);
route.put("/adhistory", adhistory_controller_1.create);
exports.default = route;
