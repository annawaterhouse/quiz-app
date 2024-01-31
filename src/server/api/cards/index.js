const prisma = require("../../prisma");
const router = require("express").Router();
module.exports = router;
//get all categories
router.get("/categories", async (req, res, next) => {
    try {
        const categories = await prisma.category.findMany();
        res.json({ data: categories });
    } catch (err) {
        console.log(err);
    }
});
//get all quiz cards in a category
router.get("/byCategory/:id", async (req, res, next) => {
    
    try {
        const catId = +req.params.id;
        if (!catId) res.json({ error: "Cannot find ID" });
        const categoryCards = await prisma.card.findMany({
            where: { categoryId: catId },
        });
        res.json({ data: categoryCards });
    } catch (error) {
        next(error);
    }
});
//get all quiz cards
router.get("/", async (req, res, next) => {
    try {
        const cards = await prisma.card.findMany();
        res.json({ data: cards });
    } catch (err) {
        console.log(err);
    }
});

/* create a new card */
router.post("/create/card", async (req, res, next) => {
    try {
        const { question, answer, isSaved, categoryId } = req.body;
        const newCard = await prisma.card.create({
            data: {
                question,
                answer,
                isSaved,
                categoryId,
            },
        });
        res.json({ data: newCard });
    } catch (err) {
        next(err);
    }
});

/* create a new category */
router.post("/create/category", async (req, res, next) => {    
    try {
        const { name } = req.body;
        const newCategory = await prisma.category.create({
            data: {
                name,
            },
        });
        res.json({ data: newCategory });
    } catch (err) {
        next(err);
    }
});

/** deletes single card by id */
router.delete("/card/delete/:id", async (req, res, next) => {
    try {
      const id = +req.params.id;
      if (!id) res.json({ error: "Cannot find ID" });
      const deleteCard = await prisma.card.delete({
        where: {
          id,
        },
      });
      res.json({ data: deleteCard});
    } catch (err) {
      next(err);
    }
  });
  
  /** Updates single card by id */
  router.put("/update/:id", async (req, res, next) => {
    try {
      const id = +req.params.id;
      const { question, answer, isSaved } = req.body;

      const updatedCard = await prisma.card.update({
        where: { id },
        data: { question, answer, isSaved}
      });
      res.json(updatedCard);
    } catch (err) {
      next(err);
    }
  });
  


