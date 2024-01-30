const prisma = require("../../prisma");
const router = require("express").Router();
module.exports = router;
//get all categories
//get all quiz cards in a category
//get all quiz cards
router.get("/", async (req, res, next) => {
    console.log("Hello from the cards route!");
    try {
        const cards = await prisma.card.findMany();
        res.json({ data: cards });
    } catch (err) {
        console.log(err);
    }
});

