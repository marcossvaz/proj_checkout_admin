import type { Request, Response } from "express";
import { addProductSchema } from "./schemas/productSchema.js";
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
}