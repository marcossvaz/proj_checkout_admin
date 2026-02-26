import { ProductRepository } from "../repositories/productRepository.js";
import { ProductService } from "../services/productService.js";
import { VariantsServiceFactory } from "./variantsFactory.js";

 
export const ProductRepositoryFactory = new ProductRepository();
export const ProductServiceFactory = new ProductService(
    ProductRepositoryFactory,
    VariantsServiceFactory
);
