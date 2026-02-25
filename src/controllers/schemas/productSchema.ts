import { array, boolean, number, object, string, type InferType } from "yup";

export const addVariants = array().of(
    object({
        sku: string().required("SKU é obrigatório"),
        attributeValue: array().of(string()),
        price: number().required("O valor é obrigatório"),
        weight: number().required(),
        height: number().required(),
        width: number().required(),
        length: number().required(),
        value: number().required(),
        active: boolean().required(),
        stock: number().required(),
        json_feature: array().of(object({
            key: string().required(),
            value: string().required()
        })).nullable(),
        main: boolean().required(),
        combo: boolean().required(),
        components: array().of(
            object({
                id_variants: string().required(),
                quantity: number().required()
            })
        ).nullable(),
        images: array().nullable()
    })
).nullable();

export const addProductSchema = object().shape({
    id_category: string().required(),
    name: string().required("O nome do produto é obrigatório"),
    description: string().nullable(),
    active: boolean().required(),
    variants: addVariants
})

export const editProductSchema = object().shape({
    name: string().required("O nome do produto é obrigatório para edição"),
    description: string().nullable(),
})

export const editActiveProductSchema = object().shape({
    active: boolean().required()
})

export type IAddVariants = InferType<typeof addVariants>;
export type IAddProducts = InferType<typeof addProductSchema>;
export type IEditProducts = InferType<typeof editProductSchema>;