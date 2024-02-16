"use server"
import { FundRaiseProps } from "../types"

export async function storeFundDetails(FundRaise: FundRaiseProps) {
    console.log("Storing in DB",FundRaise);
}