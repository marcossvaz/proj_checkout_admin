import type { IEditProducts } from "../controllers/schemas/productSchema.js";
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

    async edit(id: string, data: IEditProducts): Promise<Product> {
        return await PrismaFactory.product.update({
            where: { id },
            data: {
                name: data.name,
                description: data.description ?? null,
            }
        })
    }

    async deleteProduct(id: string) {
        return await PrismaFactory.product.update({
            where: { id },
            data: {
                active: false
            }
        })
    }
}