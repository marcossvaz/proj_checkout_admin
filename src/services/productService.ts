import type { IAddProducts, IAddVariants, IEditProducts } from "../controllers/schemas/productSchema.js";
import type { Variants } from "../models/Variants.js";
import type { ProductRepository } from "../repositories/productRepository.js";
import type { VariantsRepository } from "../repositories/variantsRepository.js";

export class ProductService {
    constructor(
        private readonly productRepository: ProductRepository,
        private readonly variantsRepository: VariantsRepository
    ) { };

    async add(data: IAddProducts) {
        // add product
        const productAdded = await this.productRepository.add(data);

        // linked variant of product into product
        if (data.variants) {
            const variants: Variants[] = data.variants.map(variant => ({
                id_product: productAdded.id,
                sku: variant.sku,
                price: variant.price,
                stock: variant.stock,
                active: variant.active,
                combo: variant.combo,
                height: variant.height,
                width: variant.width,
                length: variant.length,
                weight: variant.weight,
                value: variant.value,
                json_feature: variant.json_feature ?? null,
                main: variant.main,
            })) 

            await this.variantsRepository.add(variants);
            console.log(variants)
        }

        console.log(data.variants);

        return productAdded;
    }

    async getAll() {
        return await this.productRepository.getAll();
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