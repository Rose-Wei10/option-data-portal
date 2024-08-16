"use client";

import React, {useEffect} from "react";

interface StripePricingTableProps {
    email?: string; // Add email as an optional prop
  }
  
  export const StripePricingTable: React.FC<StripePricingTableProps> = ({ email }) => {

    useEffect(() => {
      const script = document.createElement("script");
      script.src = "https://js.stripe.com/v3/pricing-table.js";
      script.async = true;
      document.body.appendChild(script);
      
      return () => {
        document.body.removeChild(script);
      };
  
    }, []);
  
    return React.createElement("stripe-pricing-table", {
      "pricing-table-id": "prctbl_1PfmhiEsKvZ43FCydDcsdwd8",
      "publishable-key":
        "pk_test_51MXLheEsKvZ43FCyiiv8RwwCkcVM3XiunrE2tv451aH5tQuO8kc7mfnd3OyTeLXes4PEZkbrOGvvzPHYeGzo0aTx00awQ7d3el",
       "customer-email": {email}
    });
  
  };