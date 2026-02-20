import { Router, type Response, type Request } from "express";
import { ProductsController } from "../../controllers/productsController.js";

export const routes = Router();

const productsController = new ProductsController();

routes.post('/products', productsController.add);