const express = require("express");
const router = express.Router();
//const authorize = require("../middleware/auth.js");
const api = require("../controllers/api.js");
//router.use("/auth", authorize);

router.post("/save", api.saveData);
router.post("/datagen", api.dataGen);


module.exports = router;
