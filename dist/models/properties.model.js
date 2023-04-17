"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const propertiesSchema = new mongoose_1.Schema({
    userID: String,
    rating: String,
    comments: [String],
    photos: [String],
    panaromaPhoto: String,
    roomNumber: Number,
    area: Number,
    locationCoordinate: {
        lang: Number,
        long: Number,
    },
    locationName: String,
}, { timestamps: true });
const Properties = (0, mongoose_1.model)("properties", propertiesSchema);
exports.default = Properties;
