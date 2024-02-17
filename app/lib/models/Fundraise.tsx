import mongoose from "mongoose";

const FundRaiseSchema=new mongoose.Schema({
    title:{
        type: String,
        required: true
    },
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
    donatedAmount:{
        type:Number,
        default:0
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