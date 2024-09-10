import mongoose from "mongoose";
const {Schema}= mongoose;

const ProductSchema = new Schema({
    title :{
    type:String ,
    required:true   
    },
    price:{
        type:Number,
        required:true
    },
    description:{
        type:String,
        required:true
    },
    category:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    stock:{
        type:Number,
        default:0
    },
    isFeatured:{
        type:Boolean,
        default:false
    }
    
})

const Product =  mongoose.model("Product",ProductSchema)

// const Product = mongoose.model("Product",ProductSchema);

export default Product;