import  Express  from "express";
import dotenv from 'dotenv';
import { routes } from "./routes/products/index.js";

dotenv.config();

const server = Express();

server.use(routes)

server.listen(process.env.PORT, () => {
    console.log("Serve is Running....")
});