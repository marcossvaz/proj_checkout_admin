import { boolean, object, string, type InferType } from "yup";

export const addProductSchema = object().shape({
    id_category: string().required(),
    name: string().required("O nome do produto é obrigatório"),
    description: string().nullable(),
    active : boolean().required(),
})

export const EdditProductSchema = object().shape({
    id_category: string().required(),
    name: string().required("O nome do produto é obrigatório para edição"),
    description: string().nullable(),
    active: boolean().required(),
})


export type IAddProducts = InferType<typeof addProductSchema>;