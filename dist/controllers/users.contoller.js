"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.userLogin = exports.getOne = exports.getAll = exports.create = void 0;
const users_model_1 = __importDefault(require("../models/users.model"));
const bcryptjs_1 = __importDefault(require("bcryptjs"));
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const create = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { userName, firstName, lastName, email, address, password, profilePicture, phoneNumber, ratingAsRenter, ratingAsLandlord, } = req.body;
    if (!password || !email || !userName) {
        res.status(500).send({
            status: false,
            message: "incomplete information",
        });
        return;
    }
    const hashedPass = yield bcryptjs_1.default.hash(password, 5);
    if (hashedPass) {
        const newUser = new users_model_1.default({
            email,
            password: hashedPass,
            userName,
            firstName,
            lastName,
            address,
            profilePicture,
            phoneNumber,
            ratingAsRenter,
            ratingAsLandlord,
        });
        const result = yield newUser.save();
        if (result) {
            res.status(200).send({
                status: true,
                message: "user registered successfully",
            });
            return;
        }
        else {
            res.status(500).send({
                status: false,
                message: "Registration failed",
            });
            return;
        }
    }
    else {
        res.status(500).send({
            status: false,
            messsage: "password didn't encrypted",
        });
    }
});
exports.create = create;
const userLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, password } = req.body;
    if (!email || !password) {
        res.status(500).send({
            status: false,
            message: "Enter user email and password",
        });
        return;
    }
    const user = yield users_model_1.default.findOne({ email });
    if (user && (yield bcryptjs_1.default.compare(password, user.password))) {
        const secretToken = process.env.TOKEN_KEY || "";
        const token = jsonwebtoken_1.default.sign({ user: user }, secretToken, {
            expiresIn: "1d",
        });
        res.status(200).send({ status: true, message: "success", token });
        return;
    }
    else {
        res.status(500).send({ status: false, message: "user not found!!" });
        return;
    }
});
exports.userLogin = userLogin;
const getAll = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const result = yield users_model_1.default.find({}).limit(10);
    res.json({ status: true, result });
});
exports.getAll = getAll;
const getOne = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { _id } = req.params;
    try {
        const result = yield users_model_1.default.findById({ _id });
        res.json({ status: true, result });
    }
    catch (err) {
        res.json({ status: false, err });
    }
});
exports.getOne = getOne;
