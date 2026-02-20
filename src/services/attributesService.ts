import type { IAddAttribute } from "../controllers/schemas/attributesSchema.js";
import type { AttributeRepository } from "../repositories/attributesRepository.js";
import type { ValueAttributeRepository } from "../repositories/valueAttributeReposiitory.js";

export class AttributesServices {
    constructor(
        private readonly attributeRepository: AttributeRepository,
        private readonly attributeValueRepository: ValueAttributeRepository
    ) { };


    async add(data: IAddAttribute) {
        const attributeAdded = await this.attributeRepository.add(data.name);

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
}