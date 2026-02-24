//this a a global schema
import { string, } from "yup";


export const UuIdValidationSchema = string().uuid("id inválido").required();