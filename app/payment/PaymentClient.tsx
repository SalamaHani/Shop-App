"use client";

import axios from "axios";
import React, { useCallback } from "react";
import { loadStripe } from "@stripe/stripe-js";
import {
  EmbeddedCheckoutProvider,
  EmbeddedCheckout,
} from "@stripe/react-stripe-js";
import { ThemeProvider } from "../theme-provider";

const stripePromise = loadStripe(
  process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY as string
);
interface PaymentClientProps {
  orderId: string;
  cartId: string;
}

export default function PaymentClient({ orderId, cartId }: PaymentClientProps) {
  const fetchClientSecret = useCallback(async () => {
    try {
      const response = await axios.post("/api/payment", {
        orderId,
        cartId,
      });

      if (!response.data.clientSecret) {
        throw new Error("No client secret returned");
      }
      return response.data.clientSecret;
    } catch (error) {
      console.error("Failed to fetch client secret:", error);
      // You could also update some state here to show an error message
      throw error; // Re-throw so EmbeddedCheckout can handle it
    }
  }, [orderId, cartId]);
  // options={{
  //   clientSecret: 'cs_...',
  //   appearance: { /* ... */ }
  // }}
  const options = { fetchClientSecret };

  return (
    <ThemeProvider
      attribute="class"
      defaultTheme="system"
      enableSystem
      disableTransitionOnChange
    >
      <div id="checkout">
        <EmbeddedCheckoutProvider stripe={stripePromise} options={options}>
          <EmbeddedCheckout />
        </EmbeddedCheckoutProvider>
      </div>
    </ThemeProvider>
  );
}
