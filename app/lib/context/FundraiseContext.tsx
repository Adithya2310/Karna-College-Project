
"use client"
import React, { createContext, useContext, useState } from 'react';


// context type
interface UserContextType {
}


// Creating the context with an initial value
const UserContext = createContext<UserContextType | undefined>(undefined);



// Create a context provider component
interface UserContextProviderProps {
  children: React.ReactNode;
}


// provider for the user context
export const UserContextProvider: React.FC<UserContextProviderProps> = ({ children }) => {
  // add all the function here
  return <UserContext.Provider value={{}}>{children}</UserContext.Provider>;
};


// custom hook for accessing the user context 
export const useUserContext = () => {
  const context = useContext(UserContext);
  if (!context) {
    throw new Error('useUserContext must be used within a UserContextProvider');
  }
  return context;
};
