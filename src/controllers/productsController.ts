import type { Request, Response } from "express";
import { addProductSchema, editProductSchema } from "./schemas/productSchema.js";
import { ProductServiceFactory } from "../factories/productFactort.js";

export class ProductsController {

    async add(req: Request, res: Response) {
        try {
            const body = await addProductSchema.validate(req.body);

            const result = await ProductServiceFactory.add(body)

            res.status(201).json(result);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }

    }

    async editProduct(req: Request<{ id: string }>, res: Response) {
        try {
            const { id } = req.params;
            if (!id) throw new Error("O registro não foi encontrado");

            const body = await editProductSchema.validate(req.body);

            const result = await ProductServiceFactory.editProduct(id, body);
            res.status(200).json(result);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }
}