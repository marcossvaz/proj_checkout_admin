import { PrismaFactory } from "../factories/prismaFactory.js";

export class AttributeRepository {

    async add(name:string) {
        return await PrismaFactory.attribute.create({
            data: { name }
        });
    }
}