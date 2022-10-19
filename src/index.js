require("dotenv").config();
const express = require("express");
const { connect } = require("mongoose");
const {
  getRecords,
  createRecord,
  deleteRecord,
  updateRecord,
} = require("./controllers/records.controller");

const app = express();
const port = 3005;

async function main() {
  await connect(process.env.MONGODB_URL);
  app.use(express.json());

  app.get("/api", getRecords);

  app.post("/api", createRecord);

  app.delete("/api/:id", deleteRecord);

  app.put("/api/:id", updateRecord);

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main().catch((err) => console.log(err));
