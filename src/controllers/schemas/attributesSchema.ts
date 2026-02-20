import { string, object, array, type InferType, number } from 'yup';

export const addSchema = object().shape({
    name: string().required("O nome é obrigatório"),
    values: array(object().shape({
        value: number().required("Defina o nome para o atributo")
    })).nullable()
})

// inferir type com interface

export type IAddAttribute = InferType<typeof addSchema>;