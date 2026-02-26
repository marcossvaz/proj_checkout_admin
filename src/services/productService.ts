import type { IAddProducts, IAddVariants, IEditProducts, IEditVariant } from "../controllers/schemas/productSchema.js";
import type { Variants } from "../models/Variants.js";
import type { ProductRepository } from "../repositories/productRepository.js";
import type { VariantsService } from "./variantsService.js";

export class ProductService {
    constructor(
        private readonly productRepository: ProductRepository,
        private readonly variantsService: VariantsService

    ) { };

    async add(data: IAddProducts) {
        // added product
        const productAdded = await this.productRepository.add(data);

        // linked variant of product into product
        if (data.variants) {
            const variants = data.variants.map(variant => ({
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
                value: variant.value || null,
                json_feature: variant.json_feature ?? null,
                main: variant.main,
            }));

            await this.variantsService.add(variants);
            console.log(variants);
        }

        const variantsProduct = await this.variantsService.getAll(productAdded.id);
        const payloadVariantValue = this.orderPayloadAddValueVariant(variantsProduct, data.variants);

        const variantValuesAdded = await this.variantsService.addValueVariants(payloadVariantValue);

        console.log(variantValuesAdded);
        console.log(data.variants);
        console.log(variantsProduct);
        return {
            ...productAdded,
            variants: variantsProduct
            
        };
    }
    
    // function for order and link variant and variant-value
    orderPayloadAddValueVariant(variantProduct: Variants[], data: IAddVariants) {
        return variantProduct.flatMap((variant) => {
            const variantCorrespondFront = data?.find(item => item.sku === variant.sku);

            if (variantCorrespondFront && variantCorrespondFront.attributeValue) {
                return variantCorrespondFront.attributeValue.map(variantFront => ({
                    id_value_attribute: variantFront,
                    id_variant: variant.id,
                    active: true
                }))
            }

            return [];
        })
    }
    
    // adit variant of product
    async editVariant(id: string, dado: IEditVariant) {
        return await this.variantsService.editVariant(id, dado);
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

    async deleteVariant(id: string) {
        const variantDelete = await this.variantsService.deleteVariant(id);

        return variantDelete;
    }
}