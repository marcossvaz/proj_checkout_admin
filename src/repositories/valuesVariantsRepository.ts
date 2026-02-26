import { PrismaFactory } from "../factories/prismaFactory.js";
import type { VariantValue } from "../models/VarianteValue.js";

export class VariantValuesRepository {
    async addMany(dado: VariantValue[]) {
        return await PrismaFactory.variantsValue.createMany({
            data: dado
        })
    }
}