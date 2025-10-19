-- RedefineTables
PRAGMA defer_foreign_keys=ON;
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL,
    "password" TEXT NOT NULL,
    "shortName" TEXT,
    "name" TEXT,
    "dob" DATETIME,
    "phone" TEXT,
    "type" TEXT NOT NULL DEFAULT 'Undetermined',
    "qrCodeUrl" TEXT,
    "address" TEXT,
    "mapUrl" TEXT,
    "father" TEXT,
    "mother" TEXT,
    "bio" TEXT,
    "note" TEXT,
    "title" TEXT,
    "bank" TEXT,
    "account" TEXT,
    "weddingDate" DATETIME,
    "weddingTime" TEXT,
    "createdAt" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updatedAt" DATETIME NOT NULL
);
INSERT INTO "new_User" ("account", "address", "bank", "bio", "createdAt", "dob", "father", "id", "mapUrl", "mother", "name", "note", "password", "phone", "qrCodeUrl", "shortName", "title", "updatedAt", "userName", "weddingDate", "weddingTime") SELECT "account", "address", "bank", "bio", "createdAt", "dob", "father", "id", "mapUrl", "mother", "name", "note", "password", "phone", "qrCodeUrl", "shortName", "title", "updatedAt", "userName", "weddingDate", "weddingTime" FROM "User";
DROP TABLE "User";
ALTER TABLE "new_User" RENAME TO "User";
CREATE UNIQUE INDEX "User_userName_key" ON "User"("userName");
PRAGMA foreign_keys=ON;
PRAGMA defer_foreign_keys=OFF;
