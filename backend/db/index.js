const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const cors = require("cors");

const port=4444
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

app.get("/", (req, res) => {
  res.send(" api running");
});

app.use("/api/users", require("./routes/userRoutes"));

app.listen(port, () => {
    console.log(`server started on port ${port}`);
  });
