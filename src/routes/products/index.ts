import { Router, type Response, type Request } from "express";
import { ProductsController } from "../../controllers/productsController.js";

export const routesProduct = Router();

const productsController = new ProductsController();



// edit about product
routesProduct.post('/products', productsController.add);
routesProduct.patch('/products/:id', productsController.editProduct);
routesProduct.delete('/products/:id', productsController.deleteProduct);
routesProduct.get('/products', productsController.getAll);


// adit variant of products
routesProduct.patch('/products/variants/:id', productsController.editVariantById);