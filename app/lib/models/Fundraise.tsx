import mongoose from "mongoose";

const ProductSchema=new mongoose.Schema({
    url:{
        type:String,
        required:true
    },
    title:{
        type:String,
        required:true
    },  
    mrp:{
        type:String,
        required:true
    },
    price:{
        type:String,
        required:true
    },
    image:{
        type:String,
        required:true
    },
    priceArray:[
        {
            price:{type:String,required:true},
            date:{type:Date,required:true, default:Date.now()}
        }
    ],
    outOfStock:{
        type:Boolean,
        required:true,
        default:false
    },
    lowestPrice:{
        type:String,
        required:true
    },
    highestPrice:{
        type:String,
        required:true
    },
    averagePrice:{
        type:String,
        required:true
    }
})

const Product=mongoose.models.Product||mongoose.model("Product",ProductSchema);

export default Product;