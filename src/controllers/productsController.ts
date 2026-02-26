import type { Request, Response } from "express";
import { addProductSchema, editProductSchema, editVariant } from "./schemas/productSchema.js";
import { ProductServiceFactory } from "../factories/productFactory.js";
import { UuIdValidationSchema } from "../factories/globalSchema.js";

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

    async getAll(_req: Request, res: Response) {
        try {
            const result = await ProductServiceFactory.getAll();

            res.status(200).json(result);
        } catch (err: any) {
            res.status(401).json({ error: err.message });
        }
    }

    async editProduct(req: Request<{ id: string }>, res: Response) {
        try {
            const { id } = req.params;
            UuIdValidationSchema.validate(id);

            const body = await editProductSchema.validate(req.body);

            const result = await ProductServiceFactory.editProduct(id, body);
            res.status(200).json(result);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    async deleteProduct(req: Request<{ id: string }>, res: Response) {
        try {
            const { id } = req.params;
            UuIdValidationSchema.validate(id);

            const result = await ProductServiceFactory.deleteProduct(id);

            res.status(201).json(result);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    // ABOUT VARIANT PRODUCT
    // edit Variant of product
    async editVariantById(req: Request, res: Response) {
        try {
            const idIsValidated = await UuIdValidationSchema.validate(req.params.id);
            const bodyIsValidated = await editVariant.validate(req.body);

            const returns = await ProductServiceFactory.editVariant(idIsValidated, bodyIsValidated);

            res.status(200).json(returns);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

    // delete variant
    async deleteVariant(req: Request, res: Response) {
        try {
            const idIsValidated = await UuIdValidationSchema.validate(req.params.id);

            const result = await ProductServiceFactory.deleteVariant(idIsValidated);

            res.status(200).json(result);
            
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }
}