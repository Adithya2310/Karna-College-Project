import { KarnaAbi, CampaignAbi } from "@/lib/data"
import { ethers } from "ethers"
import { KarnaContract } from "@/lib/data";
export const CommonKarnaContractSetup=async (signer:any)=>{
    try {
        const signerOriginal=await signer.provider.getSigner();
        const karna_contract=new ethers.Contract(KarnaContract,KarnaAbi,signerOriginal);
        return karna_contract;   
    } catch (error) {
        console.log("error in creatign the contract object", error);
        
    }
}