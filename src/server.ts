import  Express  from "express";
import dotenv from 'dotenv';

dotenv.config();

const server = Express();


server.listen(process.env.PORT, () => {
    console.log("Serve is Running....")
});