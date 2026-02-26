import { PrismaFactory } from "../factories/prismaFactory.js";
import type { Variants } from "../models/Variants.js";

export class VariantsRepository {

    async add(data: Omit<Variants, 'id' | 'created_at' | 'updated_at'>[]) {
        return await PrismaFactory.variants.createMany({
            data: data
        })
    }

    async getAll(id_product: string) {
        return await PrismaFactory.variants.findMany({
            where: {
                id_product
            }
        });
    }
}