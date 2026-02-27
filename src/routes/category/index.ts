import { Router } from "express";
import { CategoryController } from "../../controllers/categoryController.js";


export const routesCategory = Router();

const categoryController = new CategoryController();

routesCategory.get('/category', categoryController.getAllProduct);