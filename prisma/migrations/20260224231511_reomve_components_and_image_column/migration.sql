/*
  Warnings:

  - You are about to drop the column `components` on the `Variants` table. All the data in the column will be lost.
  - You are about to drop the column `images` on the `Variants` table. All the data in the column will be lost.

*/
-- AlterTable
ALTER TABLE "Variants" DROP COLUMN "components",
DROP COLUMN "images";
