"use server"
import { connectToDB } from "../connectToDB";
import { FundRaiseProps } from "../types";
import FundRaise from "../models/Fundraise";
import { useReducer } from "react";

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

export async function executeCampaign(id:number,address:string)
{    
    connectToDB();
    FundRaise.findOne({proposalId:id})
    .then((res:any)=>{
        res.approved=true;
        res.deployedContractAddress=address;
        res.save()
        .then((data:any)=>{
            console.log("the executed proposal",data);
        })
        .catch((err:any)=>{
            console.log("error in executing the proposal",err);
        })
    })
    .catch((err:any)=>{
        console.log("error in finding the proposal",err);
    })
}

export async function donateCampaign(id:number, amount:number)
{
    connectToDB();
    FundRaise.findOne({proposalId:id})
    .then((res:any)=>{
        console.log("found out the object",res);
        res.donatedAmount+=amount;
        res.save()
        .then((data:any)=>{
            console.log("amount updated to the database", data);
        })
        .catch((err:any)=>{
            console.log("error in adding amoun to the database",err);
        })
    })
    .catch((err:any)=>{
        console.log("error in finding the proposal",err);
    })
}