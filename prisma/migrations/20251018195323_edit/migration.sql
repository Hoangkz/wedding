/*
  Warnings:

  - You are about to alter the column `attended` on the `Customer` table. The data in that column could be lost. The data in that column will be cast from `Boolean` to `Int`.
  - Made the column `attended` on table `Customer` required. This step will fail if there are existing NULL values in that column.

*/
-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Customer" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL,
    "type" TEXT NOT NULL,
    "invitation" TEXT NOT NULL,
    "invitedAt" DATETIME NOT NULL,
    "attended" INTEGER NOT NULL,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Customer" ("attended", "createdAt", "id", "invitation", "invitedAt", "name", "type", "updatedAt") SELECT "attended", "createdAt", "id", "invitation", "invitedAt", "name", "type", "updatedAt" FROM "Customer";
DROP TABLE "Customer";
ALTER TABLE "new_Customer" RENAME TO "Customer";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
