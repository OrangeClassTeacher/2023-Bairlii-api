"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const verifyToken = (req, res, next) => {
    const token = req.body.token || req.query.token || req.headers["x-access-token"];
    if (!token) {
        return res.status(403).json({
            success: false,
            message: "User have no token",
        });
    }
    try {
        const secretToken = process.env.TOKEN_KEY || "";
        const decoded = jsonwebtoken_1.default.verify(token, secretToken);
        return next();
    }
    catch (_a) {
        return res.json({
            success: false,
            message: "User token incorrect or inactive",
        });
    }
};
exports.default = verifyToken;
