"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const renterRatingSchema = new mongoose_1.Schema({
    ratedUserID: String,
    rating: Number,
}, { timestamps: true });
const RenterRating = (0, mongoose_1.model)("renterRatings", renterRatingSchema);
exports.default = RenterRating;
