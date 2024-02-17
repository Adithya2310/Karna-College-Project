
"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import { FundRaiseProps } from '../types';
import { storeFundDetails, getAllFundRaise } from '../server/Actions';


// context type
interface FundRaiseContextType {
    storeInitialFundDetails: (ProductData:FundRaiseProps) => void;
}

// Creating the context with an initial value
const FundRaiseContext = createContext<FundRaiseContextType | undefined>(undefined);

// Create a context provider component
interface FundRaiseContextProviderProps {
  children: React.ReactNode;
}

// provider for the user context
export const FundRaiseContextProvider: React.FC<FundRaiseContextProviderProps> = ({ children }) => {
  useEffect(()=>{
    getAllFundRaise();
  },[])
  const getAllFundRaise=async ()=>{
    try {
      const FundRaise=await getAllFundRaise();
      console.log("details from the database",FundRaise);
    } catch (error) {
      console.log("some error occured", error);
    }
  }
  const storeInitialFundDetails=(ProductData:FundRaiseProps)=>{
      console.log("got products in context",ProductData);
      storeFundDetails(ProductData);
  }
  // add all the function here
  return <FundRaiseContext.Provider value={{storeInitialFundDetails}}>{children}</FundRaiseContext.Provider>;
};

// custom hook for accessing the user context 
export const useFundRaiseContext = () => {
  const context = useContext(FundRaiseContext);
  if (!context) {
    throw new Error('useFundRaiseContext must be used within a FundRaiseContextProvider');
  }
  return context;
};
