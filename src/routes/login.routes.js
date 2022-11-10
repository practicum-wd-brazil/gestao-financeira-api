const { Router } = require("express");
const { register, login } = require("../controllers/login.controller");

const router = new Router();
router.post("/register", register);
router.post("/", login);

module.exports = router;
