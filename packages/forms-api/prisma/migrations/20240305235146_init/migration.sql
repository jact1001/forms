-- CreateTable
CREATE TABLE "Access" (
    "userId" TEXT NOT NULL PRIMARY KEY,
    "user_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Form" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "form_name" TEXT NOT NULL,
    "state" TEXT NOT NULL,
    "author" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "Section" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "section_name" TEXT NOT NULL,
    "access" TEXT NOT NULL,
    "form_id" TEXT NOT NULL,
    CONSTRAINT "Section_form_id_fkey" FOREIGN KEY ("form_id") REFERENCES "Form" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Field" (
    "field_id" TEXT NOT NULL PRIMARY KEY,
    "form_field_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "section_id" TEXT NOT NULL,
    CONSTRAINT "Field_section_id_fkey" FOREIGN KEY ("section_id") REFERENCES "Section" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UseCase" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "case_name" TEXT NOT NULL,
    "case_state" TEXT NOT NULL,
    "case_creator" TEXT NOT NULL,
    "form_id" TEXT NOT NULL,
    "form_name" TEXT NOT NULL
);

-- CreateTable
CREATE TABLE "UseCaseSection" (
    "id" TEXT NOT NULL PRIMARY KEY,
    "section_name" TEXT NOT NULL,
    "access" TEXT NOT NULL,
    "use_case_id" TEXT NOT NULL,
    CONSTRAINT "UseCaseSection_use_case_id_fkey" FOREIGN KEY ("use_case_id") REFERENCES "UseCase" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "UseCaseField" (
    "field_id" TEXT NOT NULL PRIMARY KEY,
    "form_field_id" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "use_case_section_id" TEXT NOT NULL,
    CONSTRAINT "UseCaseField_use_case_section_id_fkey" FOREIGN KEY ("use_case_section_id") REFERENCES "UseCaseSection" ("id") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Form_form_name_key" ON "Form"("form_name");
