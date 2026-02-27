import type { IAddProducts, IEditProducts } from "../controllers/schemas/productSchema.js";
import { PrismaFactory } from "../factories/prismaFactory.js";
import type { Product } from "../models/Product.js";

export class ProductRepository {
    async add(data: IAddProducts): Promise<Product> {
        return await PrismaFactory.product.create({
            data: {
                id_category: data.id_category,
                name: data.name,
                description: data.description ?? null,
                active: data.active,
                
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

    async getAll() {
        return await PrismaFactory.product.findMany({
            where: {
                active: true
            },
            include: {
                variants: {
                    where: {
                        active: true
                    },
                    include: {
                        value_variants: {
                            where: {
                                active: true
                            }
                        }
                    }
                }
            }
        });
    }
}