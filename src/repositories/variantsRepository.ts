import { PrismaFactory } from "../factories/prismaFactory.js";
import type { Variants } from "../models/Variants.js";

export class VariantsRepository {
    async add(data: Variants[]) {
        return await PrismaFactory.variants.createMany({
            data: data.map(variant => ({
                ...variant,
            }))
        })
    }
}