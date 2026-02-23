import { boolean, object, string, type InferType } from "yup";

export const addProductSchema = object().shape({
    id_category: string().required(),
    name: string().required("O nome do produto é obrigatório"),
    description: string().nullable(),
    active : boolean().required(),
})

export const editProductSchema = object().shape({
    name: string().required("O nome do produto é obrigatório para edição"),
    description: string().nullable(),
})

export const editActiveProductSchema = object().shape({
    active: boolean().required()
})


export type IAddProducts = InferType<typeof addProductSchema>;
export type IEditProducts = InferType<typeof editProductSchema>;