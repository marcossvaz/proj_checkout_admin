import type { IEditVariant } from "../controllers/schemas/productSchema.js";
import type { VariantValue } from "../models/VarianteValue.js";
import type { Variants } from "../models/Variants.js";
import type { VariantValuesRepository } from "../repositories/valuesVariantsRepository.js";
import type { VariantsRepository } from "../repositories/variantsRepository.js";

export class VariantsService {
    constructor(
        private readonly variantsRepository: VariantsRepository,
        private readonly variantValueRepository: VariantValuesRepository
    ) { }


    async add(data: Omit<Variants, 'id' | 'created_at' | 'updated_at'>[]){
        return await this.variantsRepository.add(data);
    }

    async addValueVariants(data: VariantValue[]) {
        return await this.variantValueRepository.addMany(data);
    }

    async editVariant(id: string, dado: IEditVariant) {
        return await this.variantsRepository.editVariant(id, dado);
    }

    async deleteVariant(id: string) {
        return await this.variantsRepository.deleteVariant(id);
    }

    async getAll(id_product: string) {
        return await this.variantsRepository.getAll(id_product);
    }
}