-- CreateTable
CREATE TABLE "Access" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "userName" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "form_name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "author" TEXT NOT NULL
);
