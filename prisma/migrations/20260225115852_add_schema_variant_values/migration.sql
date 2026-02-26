-- CreateTable
CREATE TABLE "VariantsValue" (
    "id" TEXT NOT NULL,
    "id_value_attribute" TEXT NOT NULL,
    "active" BOOLEAN NOT NULL,
    "id_variant" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "VariantsValue_pkey" PRIMARY KEY ("id")
);

-- AddForeignKey
ALTER TABLE "VariantsValue" ADD CONSTRAINT "VariantsValue_id_variant_fkey" FOREIGN KEY ("id_variant") REFERENCES "Variants"("id") ON DELETE RESTRICT ON UPDATE CASCADE;
