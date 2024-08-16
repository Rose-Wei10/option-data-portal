"use client"; // Ensure this file is treated as a client-side module

import { useEffect } from "react";
import { useUser } from "@clerk/nextjs";
import React from "react";

// Define and export the useStoreUserEmail hook
// export default function UseStoreUserEmail() {
//   const { user } = useUser();

//   useEffect(() => {
//     if (user?.primaryEmailAddress?.emailAddress) {
//       localStorage.setItem("userEmail", user.primaryEmailAddress.emailAddress);
//     }
//   }, [user]);

//   return null;
// }
interface ButtonProps{
  email: string;
}


export default function Button({email}: ButtonProps) {
    useEffect(() => {
      localStorage.setItem("userEmail", email);
    
  });
  return null;
}