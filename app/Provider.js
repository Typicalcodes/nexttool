'use client'
import React, { createContext, useEffect, useState } from "react";

// Step 1: Create a context
export const MyContext = createContext();

// Step 2: Create a Provider Component
export const Providers = ({ children }) => {
  // Define state and functions to update the context
  const [Dataqa, setDataqa] = useState([{ question: "there is no question", answer: "there is no answer" }]);

  // Use useEffect for initialization
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Retrieve data from localStorage
      const storedState = localStorage.getItem("QAs");
      if (storedState) {
        try {
          const parsedData = JSON.parse(storedState);
    
          setDataqa(parsedData);
        } catch (error) {
          console.error("Error parsing stored data:", error);
          // Handle invalid JSON data or other errors
          // For example, set a default value if parsing fails
          setDataqa([{ question: "there is no question", answer: "there is no answer" }]);
        }
      } else {
        // Set a default value if no data is found
        setDataqa([{ question: "there is no question", answer: "there is no answer" }]);
      }
    }
  }, []);

  const setqaData = (Dataqa) => {
    // Update data in localStorage (client-side)
    if (typeof window !== 'undefined') {
      try {
        localStorage.setItem("QAs", JSON.stringify(Dataqa));
      } catch (error) {
        console.error("Error setting data in localStorage:", error);
      }
    }
    // Set state after ensuring localStorage operation
    setDataqa(Dataqa);
  };

  useEffect(() => {
    // LocalStorage operations are only performed on the client-side
  }, [Dataqa]);

  // Provide the state and update functions through the context value
  const contextValue = {
    Dataqa,
    setqaData,
  };

  return (
    <MyContext.Provider value={contextValue}>{children}</MyContext.Provider>
  );
};
