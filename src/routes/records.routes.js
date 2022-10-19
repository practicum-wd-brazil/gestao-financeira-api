const { Router } = require("express");

const {
  getRecords,
  createRecord,
  deleteRecord,
  updateRecord,
} = require("../controllers/records.controller");

const router = new Router();

router.get("/", getRecords);
router.post("/", createRecord);
router.delete("/:id", deleteRecord);
router.put("/:id", updateRecord);

module.exports = router;
