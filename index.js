const express = require("express");
const cors = require("cors");
const app = express();
const mongoose = require("mongoose");
const dotenv = require("dotenv");

dotenv.config();

app.use(cors());
app.use(express.json());


app.use("/api", menuRouter);
app.use("/api", cateRouter);
app.use("/api", productRouter);
app.use("/api", userRouter);



app.get("/api", (req, res) => {
  res.json({ message: "Welcome Rest API" });
});




mongoose
  .connect(process.env.MONGO_DB_STRING)
  .then(() => console.log("Database successfully connected"))
  .catch((err) => console.log(err));

app.get("/api", (req, res) => {
  res.json({ message: "welcome Rest API" });
});

app.listen(port, () => console.log("server is running " + process.env.PORT));
