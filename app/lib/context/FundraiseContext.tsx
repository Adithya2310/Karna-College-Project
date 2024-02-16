
"use client"
import React, { createContext, useContext, useState } from 'react';
import { FundRaiseProps } from '../types';

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
    const storeInitialFundDetails=(ProductData:FundRaiseProps)=>{
        console.log("got products in context",ProductData);
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
