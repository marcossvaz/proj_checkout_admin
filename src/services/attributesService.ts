import type { IAddAttribute, IAddValue,  IEditAttribute, IEditValueAttribute} from "../controllers/schemas/attributesSchema.js";
import type { AttributeRepository } from "../repositories/attributesRepository.js";
import type { ValueAttributeRepository } from "../repositories/valueAttributeReposiitory.js";

export class AttributesServices {
    constructor(
        private readonly attributeRepository: AttributeRepository,
        private readonly attributeValueRepository: ValueAttributeRepository
    ) { };


    async add(data: IAddAttribute) {
        const payLoadAddAttribute = { active: data.active ?? null, name: data.name };
        const attributeAdded = await this.attributeRepository.add(payLoadAddAttribute);

        const returns = {
            attribute: attributeAdded,
            values: data.values
        }

        if (data.values) {

            const updateValuesAttributes = data.values.map(value => ({
                ...value,
                id_attribute: attributeAdded.id
            }))

            const countOfValueAdded = await this.attributeValueRepository.add(updateValuesAttributes);

            const valuesAttributeAdded = await this.attributeValueRepository.getValueAttributeById(attributeAdded.id)

            returns.values = valuesAttributeAdded;
        }

        console.log(returns);

        return returns;
    }

    async addValueAttribute(data: IAddValue, id_attribute: string) {
        this.attributeValueRepository.add([{...data, id_attribute}]);
        return await this.attributeValueRepository.getValueAttributeById(id_attribute);
    }

    async editedAttribute(data: IEditAttribute, id_attribute: string) {
        return await this.attributeRepository.edit(data, id_attribute);
    }

    async editValueAttribute(data: IEditValueAttribute, id_value_attribute: string) {
        return await this.attributeValueRepository.editValueAttribute(data, id_value_attribute);
    }

    async getAll() {
        return await this.attributeRepository.getAlls();
    }

    async deleteAttribute(id: string) {
        return await this.attributeRepository.delete(id);
    }

    async deleteAttributeValue(id: string) {
        return await this.attributeValueRepository.deleteAttributeValue(id);
    }
}  