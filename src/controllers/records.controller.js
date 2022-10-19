const Record = require("../models/record.model");

const CREATED = 201;
const ACCEPTED = 202;

const getRecords = async (req, res) => {
  const records = await Record.find();
  res.json(records);
};

const createRecord = async (req, res) => {
  const record = await Record.create(req.body);
  res.status(CREATED).json(record);
};

const deleteRecord = async (req, res) => {
  const { id } = req.params;
  const deletedRecord = await Record.findByIdAndDelete(id);
  res.status(ACCEPTED).json(deletedRecord);
};

const updateRecord = async (req, res) => {
  const { id } = req.params;
  const updatedRecord = await Record.findByIdAndUpdate(id, req.body, {
    returnDocument: "after",
  });
  res.status(ACCEPTED).json(updatedRecord);
};

module.exports = {
  getRecords,
  createRecord,
  deleteRecord,
  updateRecord,
};
