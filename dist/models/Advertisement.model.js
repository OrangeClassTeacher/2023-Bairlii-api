"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const advertisementsSchema = new mongoose_1.Schema({
    userID: String,
    propertyID: String,
    price: Number,
    rentingDuration: Number,
    paymentContition: String,
    adDuration: Number
}, { timestamps: true });
const Advertisements = (0, mongoose_1.model)("advertisement", advertisementsSchema);
exports.default = Advertisements;
