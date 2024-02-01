# Quiz App

A simple web application for study materials.

## Getting Started

1. Click "Use This Template" and "Create a new repository."
2. Clone down your repo and run `npm install`.
3. Create a `.env` file according to the provided `example.env`.
4. Apply the initial Prisma migration and generate the client.\
   `npx prisma migrate reset`
5. Start developing!\
   `npm run dev`

## Architecture

### Backend

The backend consists of an [Express](https://expressjs.com/) server with a SQLite database and [Prisma](https://www.prisma.io/) as the ORM. The entrypoint is `src/server/index.js`.

API routes can be found in `src/server/api/`.

![Database schema as described below](database_schema.svg)

<details>
<summary>Expand to see DBML</summary>

```dbml
-- CreateTable
CREATE TABLE "Category" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Card" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "question" TEXT NOT NULL,
    "answer" TEXT NOT NULL,
    "isSaved" BOOLEAN NOT NULL DEFAULT false,
    "categoryId" INTEGER NOT NULL,
    CONSTRAINT "Card_categoryId_fkey" FOREIGN KEY ("categoryId") REFERENCES "Category" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Post" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "cardId" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "content" TEXT NOT NULL,
    CONSTRAINT "Post_cardId_fkey" FOREIGN KEY ("cardId") REFERENCES "Card" ("id") ON DELETE CASCADE ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Category_name_key" ON "Category"("name");

-- CreateIndex
CREATE UNIQUE INDEX "Card_question_key" ON "Card"("question");
```

</details>

### Frontend

The frontend is a [React](https://react.dev/) app created with [Vite](https://vitejs.dev/). Vite middleware is used in development, but the frontend should be built for production.

Routing is handled with [React Router](https://reactrouter.com/en/main). The router is defined in `src/client/main.jsx`.

Application state is managed with [Redux Toolkit](https://redux-toolkit.js.org/). The store is defined in `src/client/store/index.js`. Additional slices should be defined separately in `src/client/features`.

[RTK Query](https://redux-toolkit.js.org/rtk-query/overview) is used to handle data fetching. The central API slice is defined in `src/client/store/api.js` and is intended to stay empty. Additional endpoints should be injected separately in `src/client/features`.

