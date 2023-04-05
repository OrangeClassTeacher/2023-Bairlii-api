"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const properties_route_1 = __importDefault(require("./routes/properties.route"));
const mongoose_1 = __importDefault(require("mongoose"));
dotenv_1.default.config();
const app = (0, express_1.default)();
const port = process.env.PORT;
const uri = process.env.DB_URI || "";
mongoose_1.default
    .connect(uri)
    .then(() => console.log("DB success"))
    .catch((err) => console.log(err));
app.use("/api", properties_route_1.default);
app.get("/api", (req, res) => {
    res.send(" ⚡️⚡️⚡️⚡️⚡️Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
