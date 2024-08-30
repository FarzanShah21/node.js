import express from 'express';
import { product } from './data.js';
import dotenv from 'dotenv';
import User from './model/usermodel.js';
import dbconnection from './config/dbconnection.js';
import routes from './routes/userroutes.js';
import productroutes from './routes/product.js';
dotenv.config();

const app = express();
app.use(express.json());
const port =process.env.PORT || 5000;
dbconnection();
User();
app.use("/api",routes)
app.use("/",productroutes)
app.get('/product',(req,res)=>{
res.send(product)
})
app.listen(port , ()=>{
    console.log(`Server is running on port ${port}`)
})

