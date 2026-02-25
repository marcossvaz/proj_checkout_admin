-- AlterTable
ALTER TABLE "Variants" ADD COLUMN     "components" JSONB,
ADD COLUMN     "images" JSONB,
ALTER COLUMN "value" DROP NOT NULL;
