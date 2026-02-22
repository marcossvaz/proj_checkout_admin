import { Router } from "express";
import { AttributesController } from "../../controllers/attributesController.js";

export const routesAttributes = Router();

const attributesController = new AttributesController();

routesAttributes.post('/attributes', attributesController.add);
routesAttributes.post('/attributes/valueAttribute/:id', attributesController.addValuesAttribute);
routesAttributes.patch('/attribute/:id', attributesController.editAttribute);
routesAttributes.patch('/attributes/value/:id', attributesController.editValueAttribute);
routesAttributes.get('/attributes', attributesController.getAllAttributes);
routesAttributes.delete('/attributes/:id', attributesController.deleteAttribute); // delete attribute
routesAttributes.delete('//attributes/:id', attributesController.deleteAttributeValue); // delete  attribute value