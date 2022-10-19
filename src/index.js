const express = require("express");
const { Schema, model, connect } = require("mongoose");

const CREATED = 201;
const ACCEPTED = 202;

const recordSchema = new Schema({
  date: Date,
  description: String,
  value: Number,
});

const Record = model("Record", recordSchema);

const app = express();
const port = 3005;

async function main() {
  await connect("mongodb://localhost:27017/test");
  app.use(express.json());

  app.get("/api", async (req, res) => {
    const records = await Record.find();
    res.json(records);
  });

  app.post("/api", async (req, res) => {
    const record = await Record.create(req.body);
    res.status(CREATED).json(record);
  });

  app.delete("/api/:id", async (req, res) => {
    const { id } = req.params;
    const deletedRecord = await Record.findByIdAndDelete(id);
    res.status(ACCEPTED).json(deletedRecord);
  });

  app.put("/api/:id", async (req, res) => {
    const { id } = req.params;
    const updatedRecord = await Record.findByIdAndUpdate(id, req.body, {
      returnDocument: "after",
    });
    res.status(ACCEPTED).json(updatedRecord);
  });

  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
}

main().catch((err) => console.log(err));
