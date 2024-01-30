const prisma = require("../prisma");
dbDS = [
  {
    question: "What is a linked list?",
    answer: "A linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a linked list are linked using pointers.",
    category: "Data Structures",
    isSaved: false,
  },
  {
    question: "What is a doubly linked list?",
    answer: "A doubly linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a doubly linked list are linked using pointers in both directions.",
    category: "Data Structures",
    isSaved: false,
  },
  {
    question: "What is a circular linked list?",
    answer: "A circular linked list is a linear data structure, in which the elements are not stored at contiguous memory locations. The elements in a circular linked list are linked using pointers in both directions.",
    category: "Data Structures",
    isSaved: false,
  },
];
const dbJS = [
    {
        question : "What is javascript?",
        answer: "Javascript is a programming language",
        category: "Javascript",
        isSaved: false
},
{
    question : "What is javascript?",
    answer: "Javascript is a programming language",
    category: "Javascript",
    isSaved: false
},
{
    question : "What is javascript?",
    answer: "Javascript is a programming language",
    category: "Javascript",
    isSaved: false
}
];
const dbRt = [
    {
        question : "What is React?",
        answer: "React is a programming language",
        category: "React",
        isSaved: false
    },
    {
        question : "What is React?",
        answer: "React is a programming language",
        category: "React",
        isSaved: false
    },
    {
        question : "What is React?",
        answer: "React is a programming language",
        category: "React",
        isSaved: false
    }
]
const posts = [
  {
    content: "i've had a lot of linked lists on interviews",
  },
  {
    content: "me too",
  },
];
const seed = async () => {
  await prisma.category.upsert({
    where: { name: "Data Structures" },
    update: {},
    create: {
      name: "Data Structures",
      cards: {
        create: dbDS.map((item, index) => ({
          question: `${item.question + index}`,
          answer: item.answer,
          isSaved: item.isSaved,
          posts: {
            create: posts.map((post) => ({
              content: post.content,
            })),
          },
        })),
      },
    },
  });
  await prisma.category.upsert({
    where: { name: "Javascript" },
    update: {},
    create: {
      name: "Javascript",
      cards: {
        create: dbJS.map((item, index) => ({
          question: `${item.question + index}`,
          answer: item.answer,
          isSaved: item.isSaved,
          posts: {
            create: posts.map((post) => ({
              content: post.content,
            })),
          },
        })),
      },
    },
  });
  await prisma.category.upsert({
    where: { name: "React" },
    update: {},
    create: {
      name: "React",
      cards: {
        create: dbRt.map((item, index) => ({
          question: `${item.question + index}`,
          answer: item.answer,
          isSaved: item.isSaved,
          posts: {
            create: posts.map((post) => ({
              content: post.content,
            })),
          },
        })),
      },
    },
  });
};
seed()
  .then(async () => await prisma.$disconnect())
  .catch(async (err) => {
    console.error(err);
    await prisma.$disconnect();
    process.exit(1);
  });
