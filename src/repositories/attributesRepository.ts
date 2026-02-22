import { PrismaFactory } from "../factories/prismaFactory.js";
import type { Attribute } from "../models/Attributes.js";

export class AttributeRepository {

    async add(data: Attribute) {
        return await PrismaFactory.attribute.create({
            data: data 
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
            where: {
                active: true
            },
            include: {
                value_attribute: {
                    where: {
                        active: true
                    }
                }
            }
        })
    }

    async delete(id: string) {
        return await PrismaFactory.attribute.update({
            where: { id },
            data: {
                active: false
            }
        });
    }
}