import { string, object, array, type InferType, number, date } from 'yup';

export const addSchema = object().shape({
    name: string().required("O nome é obrigatório"),
    values: array(object().shape({
        value: number().required("Defina o nome para o atributo")
    })).nullable()
})

export const addValueSchema = object().shape({
    value: number().required('O nome do valor do atributo é obrigatório'),
})


// inferir type infertype
export type IAddValue = InferType<typeof addValueSchema>
export type IAddAttribute = InferType<typeof addSchema>;