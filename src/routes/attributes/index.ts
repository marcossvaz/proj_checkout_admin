import { Router } from "express";
import { AttributesController } from "../../controllers/attributesController.js";

export const routesAttributes = Router();

const attributesController = new AttributesController();

routesAttributes.post('/attributes', attributesController.add);
routesAttributes.post('/attributes/valueAttribute/:id', attributesController.addValuesAttribute)
