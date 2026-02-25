import type { Variants } from "../models/Variants.js";
import type { VariantsRepository } from "../repositories/variantsRepository.js";

export class VariantsService {
    constructor(
        private readonly variantsRepository: VariantsRepository
    ) { }

    async add(data: Variants[]){
        return await this.variantsRepository.add(data);
    }
}