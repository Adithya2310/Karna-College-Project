
"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';
import { CommonKarnaContractSetup } from '@/helpers/commonSetup/CommonActionSetup';
import { executeCampaign } from '../server/Actions';
import { useToast } from '@/components/ui/use-toast';
// context type
interface DaoContextType {
    approveCampiagn:(signer:any,id:number)=>void;
    addMembers:(signer:any,address:string)=>void;
}

// Creating the context with an initial value
const DaoContext = createContext<DaoContextType | undefined>(undefined);

// Create a context provider component
interface DaoContextProviderProps {
  children: React.ReactNode;
}

// provider for the user context
export const DaoContextProvider: React.FC<DaoContextProviderProps> = ({ children }) => {
    // adding the toaster element
    const {toast}=useToast();
    // to approve campaign by the dao members
    const approveCampiagn=async(signer:any,id:number)=>{
      try{
        console.log("aproving proposal",id);
        const karna_contract=await CommonKarnaContractSetup(signer);
        console.log("contract from the setup",karna_contract);
        const tx=await karna_contract?.vote(id);
        const respose=await tx.wait();
        const proposal=await karna_contract?.proposals(id);
        console.log("the resposne is",respose.events[1].args[1]);
        console.log("the proposal details",proposal);
        if(proposal[3])
        {
          console.log("the resposne is",respose);
          const address=respose.events[1].args[1];
          await executeCampaign(id,address);
        }
        toast({
          title: "Success",
          description: "Campaign Approved sucessfully",
        });
      }
      catch(e)
      {
        toast({
          variant: "destructive",
          title: "Try Again",
          description: "Sorry the transaction failed",
        });
        console.log("the error message is",e);
      }
    }

    // to add members to the dao
    const addMembers=async(signer:any,address:string)=>{
      try{
        console.log("add member",address);
        const karna_contract=await CommonKarnaContractSetup(signer);
        console.log("contract from the setup",karna_contract);
        const respose=await karna_contract?.addMember(address);
        toast({
          title: "Success",
          description: "Member Added Successfully",
        });
      }
      catch(e)
      {
        console.log("the error message is",e);
        toast({
          variant: "destructive",
          title: "Try Again",
          description: "Sorry the transaction failed",
        });
      }
    }
  // add all the function here
  return <DaoContext.Provider value={{approveCampiagn, addMembers}}>{children}</DaoContext.Provider>;
};

// custom hook for accessing the user context 
export const useDaoContext = () => {
  const context = useContext(DaoContext);
  if (!context) {
    throw new Error('useDaoContext must be used within a DaoContextProvider');
  }
  return context;
};
