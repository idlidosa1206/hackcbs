const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");
const connectDb = require("./config/db");

const port=4444
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

connectDb();

app.get("/", (req, res) => {
  res.send(" api running");
});

app.use("/api/users", require("./routes/userRoutes"));
app.use("/api/scan", require("./routes/scanRoutes"));

app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
