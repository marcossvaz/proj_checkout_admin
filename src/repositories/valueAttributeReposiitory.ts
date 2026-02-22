import { PrismaFactory } from "../factories/prismaFactory.js";
import type { ValueAttributes } from "../models/ValueAttributes.js";


export class ValueAttributeRepository {
    
    
    async add(data: ValueAttributes[]) {
        return await PrismaFactory.attributeValue.createMany({
            data: data
        })
    }

    async getValueAttributeById(id_attribute: string) {
        return await PrismaFactory.attributeValue.findMany({
            where: {
                id_attribute
            }
        });
    } 
    
    async editValueAttribute(data: Partial<ValueAttributes>, id: string) {
        return await PrismaFactory.attributeValue.update({
            where: { id },
            data: data
        })
    }

    async deleteAttributeValue(id: string) {
        return await PrismaFactory.attributeValue.update({
            where: {
                id
            },
            data: {
                active: false
            }
        })
    }

}