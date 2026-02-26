import { VariantValuesRepository } from "../repositories/valuesVariantsRepository.js";
import { VariantsRepository } from "../repositories/variantsRepository.js";
import { VariantsService } from "../services/variantsService.js";
 
export const VariantsRepositoryFactory = new VariantsRepository();
export const VariantValuesRepositoryFactory = new VariantValuesRepository();

export const VariantsServiceFactory = new VariantsService(
    VariantsRepositoryFactory,
    VariantValuesRepositoryFactory

);

