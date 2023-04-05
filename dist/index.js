"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
<<<<<<< HEAD
const properties_route_1 = __importDefault(require("./routes/properties.route"));
const mongoose_1 = __importDefault(require("mongoose"));
=======
const mongoose_1 = __importDefault(require("mongoose"));
const users_route_1 = __importDefault(require("./routes/users.route"));
>>>>>>> 446cbb9bc2c0b98bf3472f5e00eb87ea2084d205
dotenv_1.default.config();
const uri = process.env.MONGO_DB_URI || "";
mongoose_1.default
    .connect(uri)
    .then(() => console.log("DB Success"))
    .catch((err) => console.log(err));
const app = (0, express_1.default)();
const port = process.env.PORT;
<<<<<<< HEAD
const uri = process.env.DB_URI || "";
mongoose_1.default
    .connect(uri)
    .then(() => console.log("DB success"))
    .catch((err) => console.log(err));
app.use("/api", properties_route_1.default);
app.get("/api", (req, res) => {
=======
app.use("/api", users_route_1.default);
app.get("/", (req, res) => {
>>>>>>> 446cbb9bc2c0b98bf3472f5e00eb87ea2084d205
    res.send(" ⚡️⚡️⚡️⚡️⚡️Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
