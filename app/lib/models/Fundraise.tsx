import mongoose from "mongoose";

const FundRaiseSchema=new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    email:{
        type:String,
        required:true
    },  
    description:{
        type:String,
        required:true
    },
    amount:{
        type:Number,
        required:true
    },
    type:{
        type:String,
        required:true
    },
    approved:{
        type: Boolean,
        required: true,
        default: false
    },
    createdAt:{
        type:Date,
        default:Date.now
    }
})

const FundRaise=mongoose.models.FundRaise||mongoose.model("FundRaise",FundRaiseSchema);

export default FundRaise;