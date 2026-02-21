import { string, object, array, type InferType, number, date } from 'yup';

export const addSchema = object().shape({
    name: string().required("O nome é obrigatório"),
    values: array(object().shape({
        value: string().required("Defina o nome para o atributo")
    })).nullable()
})

export const addValueSchema = object().shape({
    value: string().required('O nome do valor do atributo é obrigatório'),
})

export const editAttributeSchema = object().shape({
    name: string().required("O nome é obrigatório"),
})

export const editValueAttribute = object().shape({
    value: string().required("o nome do valor é requerido")
})


// inferir type infertype
export type IAddValue = InferType<typeof addValueSchema>;
export type IAddAttribute = InferType<typeof addSchema>;
export type IEditAttribute = InferType<typeof editAttributeSchema>;
export type IEditValueAttribute = InferType<typeof editValueAttribute>;