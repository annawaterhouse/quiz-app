const prisma = require("../prisma");
const router = require("express").Router();
module.exports = router;

router.use("/cards", require("./cards"));
