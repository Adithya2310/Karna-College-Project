
"use client"
import React, { createContext, useContext, useEffect, useState } from 'react';
import axios from 'axios';

// context type
interface DaoContextType {
    approveCampiagn:(id:number)=>void;
    addMembers:(address:string)=>void;
}

// Creating the context with an initial value
const DaoContext = createContext<DaoContextType | undefined>(undefined);

// Create a context provider component
interface DaoContextProviderProps {
  children: React.ReactNode;
}

// provider for the user context
export const DaoContextProvider: React.FC<DaoContextProviderProps> = ({ children }) => {
    // to approve campaign by the dao members
    const approveCampiagn=async(id:number)=>{
        console.log("approve campaign",id);
    }
    // to add members to the dao
    const addMembers=async(address:string)=>{
        console.log("add member",address);
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
