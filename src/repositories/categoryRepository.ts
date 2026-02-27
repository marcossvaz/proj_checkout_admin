import { PrismaFactory } from "../factories/prismaFactory.js";


export class CategoryRepository {
    async getAll() {
        return await PrismaFactory.category.findMany({
            where: {active: true}
        })
    }
}