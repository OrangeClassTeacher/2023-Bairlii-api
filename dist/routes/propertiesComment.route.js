"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const propertiesComment_conroller_1 = require("../controllers/propertiesComment.conroller");
const auth_1 = __importDefault(require("../middleware/auth"));
const express_1 = require("express");
const route = (0, express_1.Router)();
route.get("/procomment", propertiesComment_conroller_1.getAll);
route.get("/procomment/:_id", propertiesComment_conroller_1.getOne);
route.post("/procomment", auth_1.default, propertiesComment_conroller_1.create);
exports.default = route;
