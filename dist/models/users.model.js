"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usersSchema = new mongoose_1.Schema({
    userName: String,
    firstName: String,
    lastName: String,
    email: String,
    address: {
        district: String,
        subdistrict: Number,
        street: String,
        block: Number,
        fence: Number,
    },
    password: String,
    profilePicture: String,
    phoneNumber: Number,
    ratingAsRenter: String,
    ratingAsLandlord: String,
});
const users = (0, mongoose_1.model)("users", usersSchema);
exports.default = users;
