import express from 'express';
import { addproduct } from '../controller/product.controller.js';

const productroutes = express.Router();

productroutes.route("/product").post(addproduct)

export default productroutes;