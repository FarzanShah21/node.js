import express from 'express';
import { addToCart, clearCart, removeFromCart, updatedCartItems } from '../controller/cart.controller.js';
const cartroutes=express.Router();

cartroutes.route('/addcart').post(addToCart);
cartroutes.route('/remove/:id').delete(removeFromCart);
cartroutes.route('/update/:id').put(updatedCartItems);
cartroutes.route('/clear').delete(clearCart);

export default cartroutes;