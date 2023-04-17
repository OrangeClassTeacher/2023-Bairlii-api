"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const usersSchema = new mongoose_1.Schema({
    userName: {
        type: String,
        required: [true, "Хэрэглэгчийн нэрийг оруулна уу"],
    },
    firstName: {
        type: String,
        required: [true, "Нэрээ оруулна уу"],
    },
    lastName: {
        type: String,
        required: [true, "Овогоо оруулна уу"],
    },
    email: {
        type: String,
        required: [true, "Хэрэглэгчийн имэйл хаягийг оруулна уу"],
        unique: true,
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Имэйл хаяг буруу байна.",
        ],
    },
    address: {
        type: {
            district: {
                type: String,
                required: [true, "Гэрийн хаягаа оруулна уу"],
            },
            subdistrict: Number,
            street: String,
            block: Number,
            fence: Number,
        },
    },
    password: {
        type: String,
        minlength: 6,
        required: [true, "Нууц үгээ оруулна уу"],
        select: false,
    },
    profilePicture: {
        type: String,
        required: [true, "Та зураг оруулна уу"],
    },
    phoneNumber: {
        type: Number,
        length: 8,
        required: [true, "Утасны дугаараа оруулна уу"],
    },
    ratingAsRenter: String,
    ratingAsLandlord: String,
}, { timestamps: true });
const Users = (0, mongoose_1.model)("users", usersSchema);
exports.default = Users;
