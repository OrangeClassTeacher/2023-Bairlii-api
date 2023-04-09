"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const mongoose_1 = require("mongoose");
const adHistorySchema = new mongoose_1.Schema({
    renterID: String,
    advertisementID: String,
}, { timestamps: true });
const AdHistory = (0, mongoose_1.model)("adHistory", adHistorySchema);
exports.default = AdHistory;
