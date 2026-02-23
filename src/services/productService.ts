import type { IAddProducts, IEditProducts } from "../controllers/schemas/productSchema.js";
import type { ProductRepository } from "../repositories/productRepository.js";

export class ProductService {
    constructor(private readonly productRepository: ProductRepository) { };

    async add(data: IAddProducts) {
        const productAdded = await this.productRepository.add(data);

        console.log(productAdded);

        return productAdded;
    }

    async editProduct(id: string, data: IEditProducts) {
        const productEdit = await this.productRepository.edit(id, data);

        return productEdit;
    }

    async deleteProduct(id: string) {
        const productDelete = await this.productRepository.deleteProduct(id);

        return productDelete;
    }
}