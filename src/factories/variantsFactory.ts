import { VariantsRepository } from "../repositories/variantsRepository.js";
import { VariantsService } from "../services/variantsService.js";
 
export const VariantsRepositoryFactory = new VariantsRepository();
export const VariantsServicesFactory = new VariantsService(VariantsRepositoryFactory); // service instance of repository