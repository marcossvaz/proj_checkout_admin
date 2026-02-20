import { AttributeRepository } from "../repositories/attributesRepository.js";
import { ValueAttributeRepository } from "../repositories/valueAttributeReposiitory.js";
import { AttributesServices } from "../services/attributesService.js";

// prisma
export const AttributeRepositoryFactory = new AttributeRepository()
export const ValueAttributeRepositoryFactory = new ValueAttributeRepository()
// this a factories of service
export const AttributesServicesFactory = new AttributesServices(
    AttributeRepositoryFactory,
    ValueAttributeRepositoryFactory
);


