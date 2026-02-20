-- CreateTable
CREATE TABLE "attributes_values" (
    "id" TEXT NOT NULL,
    "id_attribute" TEXT NOT NULL,
    "value" TEXT NOT NULL,
    "created_at" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" TIMESTAMP(3) NOT NULL,

    CONSTRAINT "attributes_values_pkey" PRIMARY KEY ("id")
);
