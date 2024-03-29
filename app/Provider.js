"use client";
import React, { createContext, useEffect, useState } from "react";

// Step 1: Create a context
export const MyContext = createContext();

// Step 2: Create a Provider Component
export const Providers = ({ children }) => {
  // Define state and functions to update the context
  const [Dataqa, setDataqa] = useState(() => {
    const storedState = localStorage.getItem("QAs");
    return storedState
      ? JSON.parse(storedState)
      : [{
          question: "there is no question",
          answer: "there is no answer"
        }];
  });

  const setqaData = (Dataqa) => {
    setDataqa(Dataqa);
  };

  // Provide the state and update functions through the context value
  const contextValue = {
    Dataqa,
    setqaData,
  };
  useEffect(() => {
    localStorage.setItem('QAs', JSON.stringify(Dataqa));
  }, [Dataqa]);

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
