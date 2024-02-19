
"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { FundRaiseProps, CampaignCardProps, AddFundRaiseProps } from '../types';
import { storeFundDetails, getAllFundRaise } from '../server/Actions';
import axios from 'axios';
import { CommonKarnaContractSetup } from '@/helpers/commonSetup/CommonActionSetup';
import { ethers } from 'ethers';

// context type
interface FundRaiseContextType {
    daoMembers: string[];
    storeInitialFundDetails: (signer:any,ProductData:AddFundRaiseProps) => void;
    fundRaiseDetails: CampaignCardProps[];
    setFundRaiseDetails: React.Dispatch<React.SetStateAction<CampaignCardProps[]>>;
    donateToOrganisation: (amount: number)=>void;
    donateToCampaign: (amount: number, id: number)=>void;
}

// Creating the context with an initial value
const FundRaiseContext = createContext<FundRaiseContextType | undefined>(undefined);

// Create a context provider component
interface FundRaiseContextProviderProps {
  children: React.ReactNode;
}

// provider for the user context
export const FundRaiseContextProvider: React.FC<FundRaiseContextProviderProps> = ({ children }) => {
  // to store all the dao members
  const [daoMembers, setDaoMembers] = useState<string[]>([]);
  // to store all the funds from the database
  const [fundRaiseDetails, setFundRaiseDetails] = useState<CampaignCardProps[]>([]);
  const url=process.env.NEXT_PUBLIC_URL;
  useEffect(()=>{
    getAllDaoMembers();
    getAllFundRaise();
  },[]);

  // a function to get all the fund details from the database
  const getAllFundRaise=async ()=>{
    try {
      const fundRaise=await axios.get(`${url}api/campaigns`);
      console.log("details from the database",fundRaise.data.message);
      setFundRaiseDetails(fundRaise.data.message);
    } catch (error) {
      console.log("some error occured", error);
    }
  }

  // a fucntion to get the list of dao members from the databse
  const getAllDaoMembers=async ()=>{
    try {
      setDaoMembers([]);
    } catch (error) {
      console.log("some error occured", error);
      
    }
  }

  // a function to store the initial fund details
  const storeInitialFundDetails=async (signer:any,ProductData:AddFundRaiseProps)=>{
    try {
      console.log("got products in context",ProductData);
      const karna_contract=await CommonKarnaContractSetup(signer);
      console.log("contract from the setup",karna_contract);
      const tx=await karna_contract?.createProposal(ProductData.title,ethers.utils.parseEther(ProductData.amount.toString()));
      const respose=await tx.wait();
      let proposalId=parseInt(respose.events[0].data);
      console.log("the proposal id is",proposalId);
      const newProductData:FundRaiseProps={proposalId,...ProductData};
      storeFundDetails(newProductData); 
    } catch (error) {
      console.log("error in the transaction", error);
    }
  }

  // a function to donate to the organisation
  const donateToOrganisation=(amount:number)=>{
    console.log("DONATE TO THE ORGANISATION INITIATED",amount);
  }

  // to donate to a campaign
  const donateToCampaign=(amount:number, id:number)=>{
    console.log("DONATE TO THE CAMPAIGN INITIATED",amount,id);
  }

  // add all the function here
  return <FundRaiseContext.Provider value={{storeInitialFundDetails, daoMembers, fundRaiseDetails, setFundRaiseDetails, donateToOrganisation,donateToCampaign}}>{children}</FundRaiseContext.Provider>;
};

// custom hook for accessing the user context 
export const useFundRaiseContext = () => {
  const context = useContext(FundRaiseContext);
  if (!context) {
    throw new Error('useFundRaiseContext must be used within a FundRaiseContextProvider');
  }
  return context;
};
