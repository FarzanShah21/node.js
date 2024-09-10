import Product from "../model/product.model.js"

// export const getCartProduct= async(req,res)=>{
//     try {
//         const products= await Product.find({_id:{$in:req.user.cartItems}})
//     const cartItems = products.map((product)=>{
//         const item = req.user.cartItems.map((x)=>x.id === product.id)
//         return{
//             ...product.toJSON(),quantity:item.quantity
//         }
//     })
//     res.status(200).json({cartItems})
//     } catch (error) {
        
//     }
// }
export const addToCart=async(req,res)=>{
    try {
        const {productId}=req.body;
        const user = req.user;
        const existingProduct= user.cartItems.find((item)=>item.id === productId)
        if(existingProduct){
            existingProduct.quantity +=1;
        } else{
            const product = await Product.findById(productId)
            if(!product){
                return res.status(404).json({message:"product not found"})
            }
            user.cartItems.push({
                productId
            })
            await user.save();
        }
        res.status(200).json({message:"product added to cart"})
    } catch (error) {
        res.status(500).json({message:"error adding to cart",error})
        
    }

}
export const removeFromCart=async(req,res)=>{
    try {
        const {productId}= req.body;
        const user = req.user;
        const updatedCartItems = user.cartItems.filter((item)=>item.id !== productId)
        user.cartItems = updatedCartItems;
        await user.save();
        res.status(200).json({message:"product removed from cart"})
    } catch (error) {
        res.status(500).json({message:"error removing from cart",error})
        
    }
}

export const updatedCartItems = async(req,res)=>{
    try {
        const {productId,quantity}=req.body;
        const user= req.user;
        const updatedProduct = user.cartItems.find((item)=>item.id === productId)
        if(!updatedProduct){
            return res.status(404).json({message:"product not found"})
        }
        updatedProduct.quantity = quantity;
        await user.save();
        res.status(200).json({message:"product quantity updated"})
    } catch (error) {
        res.status(500).json({message:"error updating cart",error})
    }
}


export const clearCart=async(req,res)=>{
    try {
        const user = req.user;
        user.cartItems = [];
        await user.save();
        res.status(200).json({message:"cart cleared"})
    } catch (error) {
        res.status(500).json({
            message:"error clearing cart",error
        })
        
    }
}