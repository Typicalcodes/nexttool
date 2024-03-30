'use client'
import { Inter } from "next/font/google";
import "./globals.css";
import { createContext, useEffect, useState } from "react";
import { MyContext } from "./Provider";
const inter = Inter({ subsets: ["latin"] });

const metadata = {
  title: "Nexttool",
  description: "A toll for AI Questions",
};

// Step 2: Create a Provider Component
const Providers = ({ children }) => {
  // Define state and functions to update the context
  const [Dataqa, setDataqa] = useState([]);

  // Use useEffect for initialization
  useEffect(() => {
    if (typeof window !== 'undefined') {
      // Retrieve data from localStorage
      const storedState = localStorage.getItem("QAs");
      if (storedState) {
        try {
          const parsedData = JSON.parse(storedState);
          console.log("parsed data is", parsedData )
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
    console.log("setting");
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
export default function RootLayout({ children }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <Providers>
      <body className={inter.className}>{children}</body>
      </Providers>
    </html>
  );
}
