-- CreateTable
CREATE TABLE "UserForms" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "user_id" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UserForm" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "form_id" TEXT NOT NULL,
    "form_name" TEXT NOT NULL,
    "form_author" TEXT NOT NULL,
    "is_author" TEXT NOT NULL,
    "user_forms_id" TEXT NOT NULL,
    CONSTRAINT "UserForm_user_forms_id_fkey" FOREIGN KEY ("user_forms_id") REFERENCES "UserForms" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "FormCase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "case_id" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "name" TEXT NOT NULL,
    "user_form_id" TEXT NOT NULL,
    CONSTRAINT "FormCase_user_form_id_fkey" FOREIGN KEY ("user_form_id") REFERENCES "UserForm" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Role" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "User" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "number_id" TEXT NOT NULL,
    "user_name" TEXT NOT NULL,
    "last_name" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "role_id" TEXT NOT NULL,
    CONSTRAINT "User_role_id_fkey" FOREIGN KEY ("role_id") REFERENCES "Role" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);
