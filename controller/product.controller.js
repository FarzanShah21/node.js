import Product from "../model/product.model.js"

export const addproduct = async(req,res)=>{
try {
    const product = req.body;
const newproduct = await Product.create(product);
res.status(201).json({message:"product added successfully",newproduct});
} catch (error) {
    res.status(500).json({message:"error adding product",error});
}
}
