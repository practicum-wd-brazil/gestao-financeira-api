require("dotenv").config();
const cors = require("cors");
const express = require("express");
require("express-async-errors");
const { connect } = require("mongoose");
const recordRouter = require("./routes/records.routes");
const loginRouter = require("./routes/login.routes");
const authMiddleware = require("./middlewares/auth");
const errorMiddleware = require("./middlewares/error");

const app = express();
const port = process.env.PORT;

async function main() {
  await connect(process.env.MONGODB_URL);
  app.use(cors());
  app.use(express.json());
  app.use("/login", loginRouter);
  app.use("/api", authMiddleware, recordRouter);
  app.use(errorMiddleware);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main().catch((err) => console.log(err));
