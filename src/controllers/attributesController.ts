import { AttributesServicesFactory } from "../factories/attributesFactory.js";
import { addSchema, addValueSchema} from "./schemas/attributesSchema.js";
import type { Request, Response } from "express";


export class AttributesController {

    async add(req: Request, res: Response ) {
        try {
            await addSchema.validate(req.body);

            const result = await AttributesServicesFactory.add(req.body);
            
            res.status(201).json(result);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async addValuesAttribute(req: Request<{id: string}>, res: Response) {
        try {

            await addValueSchema.validate(req.body);

            if(!req.params.id) {
                throw new Error("Registro não encontrado, selecione um atributo");     
            }

            const attributes = await AttributesServicesFactory.addValueAttribute(req.body, req.params.id)

            res.status(201).json(attributes);

            console.log(req.body, req.params.id);
           
        } catch (err: any) {
            res.status(401).json({ error: err.message  });
        }
    }
}