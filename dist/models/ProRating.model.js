"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const proratingSchema = new mongoose_1.Schema({
    propertyID: String,
    rating: String,
    userID: String,
}, {
    timestamps: true,
});
const Prorating = (0, mongoose_1.model)("prorating", proratingSchema);
exports.default = Prorating;
