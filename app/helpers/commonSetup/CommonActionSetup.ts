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

export const CommonCampaignContractSetup=async (signer:any,contractAddress:string)=>{
    try{
        const signerOriginal=await signer.provider.getSigner();
        const campaign_contract=new ethers.Contract(contractAddress,CampaignAbi,signerOriginal);
        return campaign_contract;
    }
    catch(e)
    {
        console.log("error in creating the campaign contract object",e);
    }
}