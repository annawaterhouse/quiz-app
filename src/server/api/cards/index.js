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
    const category = await prisma.card.findMany({
      where: { categoryId: catId },
      include: {
        category: {
          select: {
            name: true,
          },
        }, // Include category data in the result
      },
    });
    // Create a new object where the keys are the category names
    const categoryCards = category.reduce((grouped, card) => {
      const key = card.category.name;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(card);
      return grouped;
    }, {});
    res.json({ data: categoryCards });
  } catch (error) {
    next(error);
  }
});
//get all quiz cards
router.get("/", async (req, res, next) => {
  try {
    const cards = await prisma.card.findMany({
      include: { category: { select: { name: true } } },
    });
    const groupedByCategory = cards.reduce((grouped, card) => {
      const key = card.category.name;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(card);
      return grouped;
    }, {});
    res.json({
      data: groupedByCategory,
    });
  } catch (error) {
    next(error);
  }
});

//get all saved quiz cards
router.get("/saved", async (req, res, next) => {
  try {
    const saved = await prisma.card.findMany({
      where: { isSaved: true },
      include: {
        category: { select: { name: true } },
      },
    });
    const savedByCategory = saved.reduce((grouped, card) => {
      const key = card.category.name;
      if (!grouped[key]) {
        grouped[key] = [];
      }
      grouped[key].push(card);
      return grouped;
    }, {});
    res.json({
      data: savedByCategory,
    });
  } catch (error) {
    next(error);
  }
});

/* create a new card */
router.post("/create/card", async (req, res, next) => {
  try {
    const { category, question, answer } = req.body;
    const newCard = await prisma.card.create({
      data: {
        categoryId: +category,
        question,
        answer,
      },
    });
    res.json({ message: "new card successfully created", data: newCard });
  } catch (err) {
    next(err);
  }
});
/** deletes card by id */
router.delete("/delete/card/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    if (!id) res.json({ error: "Cannot find ID" });
    const deletedCard = await prisma.card.delete({
      where: {
        id,
      },
    });
    res.json({ message: "Successfully deleted card", data: deletedCard });
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
    res.json({ message: "Category created", data: newCategory});
  } catch (err) {
    next(err);
  }
});

/** deletes category id */
router.delete("/delete/category/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    if (!id) res.json({ error: "Cannot find ID" });
    const deleteCategory = await prisma.category.delete({
      where: {
        id,
      },
    });
    res.json({ message: "Successfully deleted category", data: deleteCategory });
  } catch (err) {
    next(err);
  }
});

/** Updates card by id */
router.put("/update/:id", async (req, res, next) => {
  try {
    const id = +req.params.id;
    const { question, answer, isSaved } = req.body;

    const updatedCard = await prisma.card.update({
      where: { id },
      data: { question, answer, isSaved },
    });
    res.json(updatedCard);
  } catch (err) {
    next(err);
  }
});
