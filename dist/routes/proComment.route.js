"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const proComment_conroller_1 = require("../controllers/proComment.conroller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/procomment", proComment_conroller_1.getAll);
route.get("/procomment/:_id", proComment_conroller_1.getOne);
exports.default = route;
