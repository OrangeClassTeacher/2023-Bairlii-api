"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const procommendSchema = new mongoose_1.Schema({
    propertyID: String,
    userID: String,
    comment: [String],
}, {
    timestamps: true,
});
const Procommend = (0, mongoose_1.model)("procommend", procommendSchema);
exports.default = Procommend;
