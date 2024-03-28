"use client";
import React, { createContext, useState } from 'react';

// Step 1: Create a context
export const MyContext = createContext();

// Step 2: Create a Provider Component
export const Providers = ({ children }) => {
  // Define state and functions to update the context
  const [Dataqa, setDataqa] = useState(0);

  const setqaData = (Dataqa) => {
    setDataqa(Dataqa);
  };

  // Provide the state and update functions through the context value
  const contextValue = {
    Dataqa,
    setqaData,
  };

  return <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>;
};
