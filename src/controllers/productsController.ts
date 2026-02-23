import type { Request, Response } from "express";

export class ProductsController {

    async add(req: Request, res: Response) {
       return console.log(req.body);
    }
}