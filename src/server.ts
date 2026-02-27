import  Express  from "express";
import dotenv from 'dotenv';

import { routesProduct } from "./routes/products/index.js";
import { routesAttributes } from "./routes/attributes/index.js";
import { routesCategory } from "./routes/category/index.js";

dotenv.config();

const server = Express();

server.use(Express.json());
server.use(Express.urlencoded({ extended: true }));

server.use(routesProduct);
server.use(routesAttributes);
server.use(routesCategory);

server.listen(process.env.PORT, () => {
    console.log("Serve is Running....")
});