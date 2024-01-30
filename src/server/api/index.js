const prisma = require("../prisma");
const router = require("express").Router();
module.exports = router;
//create a new quiz question

router.use("/cards", require("./cards"));
