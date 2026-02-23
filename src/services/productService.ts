import type { IAddProducts } from "../controllers/schemas/productSchema.js";
import type { ProductRepository } from "../repositories/productRepository.js";

export class ProductService {
    constructor(private readonly productRepository: ProductRepository) { };

    async add(data: IAddProducts) {
        const productAdded = await this.productRepository.add(data);

        console.log(productAdded);

        return productAdded;
    }

}