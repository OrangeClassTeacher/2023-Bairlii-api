"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const propertiesComment_conroller_1 = require("../controllers/propertiesComment.conroller");
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/procomment", propertiesComment_conroller_1.getAll);
route.get("/procomment/:_id", propertiesComment_conroller_1.getOne);
exports.default = route;
