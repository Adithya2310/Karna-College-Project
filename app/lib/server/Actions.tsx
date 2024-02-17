"use server"
import { connectToDB } from "../connectToDB";
import { FundRaiseProps } from "../types";
import FundRaise from "../models/Fundraise";

export async function storeFundDetails(newFundRaise: FundRaiseProps) {
    console.log("Storing in DB",newFundRaise);
    connectToDB();
    const fundRaise=new FundRaise(newFundRaise);
    await fundRaise.save()
    .then(()=>{
        console.log("Data Saved Successfully");
    })
    .catch((err:any)=>{
        console.log("error in saving the products to the db", err);
    });
}

export async function getAllFundRaise(){
    connectToDB();
    const fundRaise=await FundRaise.find();
    console.log("the product details from ",fundRaise);
    return JSON.stringify(fundRaise);
}