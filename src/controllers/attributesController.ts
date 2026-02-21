import { AttributesServicesFactory } from "../factories/attributesFactory.js";
import { addSchema, addValueSchema, editAttributeSchema, editValueAttribute } from "./schemas/attributesSchema.js";
import type { Request, Response } from "express";


export class AttributesController {

    // create a new attribute
    async add(req: Request, res: Response) {
        try {
            const body = await addSchema.validate(req.body);

            const result = await AttributesServicesFactory.add(body);

            res.status(201).json(result);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    // create a new value in attribute
    async addValuesAttribute(req: Request<{ id: string }>, res: Response) {
        try {

            const body = await addValueSchema.validate(req.body);
            const { id } = req.params;

            if (!req.params.id) {
                throw new Error("Registro não encontrado, selecione um atributo");
            }

            const attributes = await AttributesServicesFactory.addValueAttribute(body, id)

            res.status(201).json(attributes);

            console.log(req.body, req.params.id);

        } catch (err: any) {
            res.status(401).json({ error: err.message });
        }
    }

    // update a attribute
    async editAttribute(req: Request<{ id: string }>, res: Response) {
        try {
            const body = await editAttributeSchema.validate(req.body);
            const { id } = req.params;

            if (!id) {
                throw new Error("Registro de usuário inválido");
            }

            const attributeEdited = await AttributesServicesFactory.editedAttribute(body, id);
            res.status(200).json(attributeEdited);

        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async editValueAttribute(req: Request<{id: string}>, res: Response) {
        try {
            const body = await editValueAttribute.validate(req.body);
            const { id } = req.params;

            const valueAttribute = await AttributesServicesFactory.editValueAttribute(body, id);
            res.status(200).json({
                valueAttribute
            })
        } catch (err) {

        }
    }

    async getAllAttributes(req: Request, res: Response) {
        try {
            const returns = await AttributesServicesFactory.getAll();

            res.status(201).json(returns);
        } catch (err: any) {
            res.status(400).json({error: err.message})
        }
    }
}