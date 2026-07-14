/*
  Warnings:

  - Made the column `price` on table `JobPost` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_JobPost" (
    "id" INTEGER NOT NULL PRIMARY KEY AUTOINCREMENT,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "category" TEXT NOT NULL,
    "price" REAL NOT NULL,
    "location" TEXT NOT NULL,
    "contactInfo" TEXT NOT NULL,
    "status" TEXT NOT NULL DEFAULT 'OPEN',
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL,
    "userId" INTEGER NOT NULL,
    "pickedById" INTEGER,
    CONSTRAINT "JobPost_userId_fkey" FOREIGN KEY ("userId") REFERENCES "User" ("id") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "JobPost_pickedById_fkey" FOREIGN KEY ("pickedById") REFERENCES "User" ("id") ON DELETE SET NULL ON UPDATE CASCADE
);
INSERT INTO "new_JobPost" ("category", "contactInfo", "createdAt", "description", "id", "location", "pickedById", "price", "status", "title", "updatedAt", "userId") SELECT "category", "contactInfo", "createdAt", "description", "id", "location", "pickedById", "price", "status", "title", "updatedAt", "userId" FROM "JobPost";
DROP TABLE "JobPost";
ALTER TABLE "new_JobPost" RENAME TO "JobPost";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
