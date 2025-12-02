-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Schedule" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "title" TEXT NOT NULL,
    "desc" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "image" TEXT NOT NULL,
    "invitedAt" DATETIME,
    "day" DATETIME,
    "time" DATETIME,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_Schedule" ("address", "createdAt", "desc", "id", "image", "invitedAt", "title", "updatedAt") SELECT "address", "createdAt", "desc", "id", "image", "invitedAt", "title", "updatedAt" FROM "Schedule";
DROP TABLE "Schedule";
ALTER TABLE "new_Schedule" RENAME TO "Schedule";
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
