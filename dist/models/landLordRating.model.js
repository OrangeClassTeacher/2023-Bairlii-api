"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const landlordRatingSchema = new mongoose_1.Schema({
    ratedUserID: String,
    rating: Number,
}, { timestamps: true });
const LandlordRating = (0, mongoose_1.model)("landlordRatings", landlordRatingSchema);
exports.default = LandlordRating;
