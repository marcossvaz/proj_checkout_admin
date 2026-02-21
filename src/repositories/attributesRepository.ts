import { PrismaFactory } from "../factories/prismaFactory.js";
import type { Attribute } from "../models/Attributes.js";

export class AttributeRepository {

    async add(name:string) {
        return await PrismaFactory.attribute.create({
            data: { name }
        });
    }

    async edit(data: Attribute, id_attribute: string) {
        return await PrismaFactory.attribute.update({
            where: {
                id: id_attribute
            },
            data: data
        })
    }

    async getAlls() {
        return await PrismaFactory.attribute.findMany({
            include: {
                value_attribute: true
            }
        })
    }
}