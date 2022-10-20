require("dotenv").config();
const express = require("express");
require("express-async-errors");
const { connect } = require("mongoose");
const recordRouter = require("./routes/records.routes");

const app = express();
const port = process.env.PORT;

async function main() {
  await connect(process.env.MONGODB_URL);
  app.use(express.json());
  app.use("/api", recordRouter);
  // eslint-disable-next-line no-unused-vars
  app.use((err, req, res, next) => {
    console.log(err);
    res.status(500).json("Internal server error");
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main().catch((err) => console.log(err));
