/*
  Warnings:

  - Changed the type of `value` on the `attributes_values` table. No cast exists, the column would be dropped and recreated, which cannot be done if there is data, since the column is required.

*/
-- AlterTable
ALTER TABLE "attributes_values" DROP COLUMN "value",
ADD COLUMN     "value" DOUBLE PRECISION NOT NULL;

-- AddForeignKey
ALTER TABLE "attributes_values" ADD CONSTRAINT "attributes_values_id_attribute_fkey" FOREIGN KEY ("id_attribute") REFERENCES "Attribute"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
