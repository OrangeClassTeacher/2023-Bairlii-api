"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const procommentSchema = new mongoose_1.Schema({
    propertyID: String,
    userID: String,
    comment: [String],
}, {
    timestamps: true,
});
const Procomment = (0, mongoose_1.model)("procomment", procommentSchema);
exports.default = Procomment;
