import { PrismaFactory } from "../factories/prismaFactory.js";
import type { Product } from "../models/Product.js";

export class ProductRepository {
    async add(data: Product): Promise<Product> {
        return await PrismaFactory.product.create({
            data: {
                id_category: data.id_category,
                name: data.name,
                description: data.description ?? null,
                active: data.active
            }
        })
    }
}