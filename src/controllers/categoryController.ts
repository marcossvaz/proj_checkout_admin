import type { Request, Response } from "express";
import { CategoryServiceFactory } from "../factories/categoryFactory.js";


export class CategoryController {
    async getAllProduct(_req: Request, res: Response) {
        try {
            const result = await CategoryServiceFactory.getAll();

            res.status(200).json(result);
        } catch (err: any) {
            res.status(400).json({ error: err.message });
        }
    }

}