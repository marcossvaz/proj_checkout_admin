import { AttributesServicesFactory } from "../factories/attributesFactory.js";
import { addSchema} from "./schemas/attributesSchema.js";
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
}