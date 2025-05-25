-- CreateEnum
CREATE TYPE "Instrument" AS ENUM ('TRUMPET', 'CLARINET', 'BASS', 'HORN', 'SAX', 'PERCUSSION', 'MAJORETTE', 'FLUTE', 'FLAGS');

-- CreateEnum
CREATE TYPE "Position" AS ENUM ('PRIMERA', 'SEGUNDA', 'TRESERA', 'QUARTA', 'QUINTA');

-- CreateTable
CREATE TABLE "Register" (
    "id" SERIAL NOT NULL,
    "username" TEXT NOT NULL,
    "email" TEXT NOT NULL,
    "address" TEXT NOT NULL,
    "instrument" "Instrument" NOT NULL,
    "position" "Position" NOT NULL,
    "password" TEXT NOT NULL
);

-- CreateIndex
CREATE UNIQUE INDEX "Register_id_key" ON "Register"("id");

-- CreateIndex
CREATE UNIQUE INDEX "Register_email_key" ON "Register"("email");
