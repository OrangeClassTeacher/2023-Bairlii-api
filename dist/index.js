"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const properties_route_1 = __importDefault(require("./routes/properties.route"));
const mongoose_1 = __importDefault(require("mongoose"));
const users_route_1 = __importDefault(require("./routes/users.route"));
const proComment_route_1 = __importDefault(require("./routes/proComment.route"));
const proRating_route_1 = __importDefault(require("./routes/proRating.route"));
const advertisement_route_1 = __importDefault(require("./routes/advertisement.route"));
const adhistory_route_1 = __importDefault(require("./routes/adhistory.route"));
const renterRating_route_1 = __importDefault(require("./routes/renterRating.route"));
const landLordRating_route_1 = __importDefault(require("./routes/landLordRating.route"));
dotenv_1.default.config();
const uri = process.env.MONGO_DB_URI || "";
const app = (0, express_1.default)();
const port = process.env.PORT;
mongoose_1.default
    .connect(uri)
    .then(() => console.log("DB success"))
    .catch((err) => console.log(err));
app.use("/api", users_route_1.default);
app.use("/api", properties_route_1.default);
app.use("/api", proComment_route_1.default);
app.use("/api", proRating_route_1.default);
app.use("/api", advertisement_route_1.default);
app.use("/api", adhistory_route_1.default);
app.use("/api", renterRating_route_1.default);
app.use("/api", landLordRating_route_1.default);
app.get("/", (req, res) => {
    res.send(" ⚡️⚡️⚡️⚡️⚡️Express + TypeScript Server");
});
app.listen(port, () => {
    console.log(`⚡️ [server]: Server is running at http://localhost:${port}`);
});
