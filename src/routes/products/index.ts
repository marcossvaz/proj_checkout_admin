import { Router, type Response, type Request } from "express";
import { ProductsController } from "../../controllers/productsController.js";

export const routesProduct = Router();

const productsController = new ProductsController();

routesProduct.post('/products', productsController.add);