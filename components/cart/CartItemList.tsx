"use client";
import React from "react";
import { Card } from "../ui/card";
import { FirstColumn, FourthColumn, SecondColumn } from "./CartItemlor";
// import ThirdColumn from "./ThirdColumn";
import { CartItemWithProduct } from "@/utils/Type";
import ThirdColumn from "./ThirdColumn";
import { MotionDiv } from "../MotionDiv";
import { AnimatePresence } from "motion/react";
function CartItemList({ cartItems }: { cartItems: CartItemWithProduct[] }) {
  return (
    <MotionDiv>
      <AnimatePresence>
        {cartItems.map((cartItem) => {
          const { id, amount } = cartItem;
          const {
            image,
            name,
            company,
            price,
            id: productId,
          } = cartItem.product;

          return (
            <MotionDiv
              layout
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              key={id}
            >
              <Card
                key={id}
                className="flex flex-col gap-y-4 md:flex-row flex-wrap p-6 mb-8 gap-x-4"
              >
                <FirstColumn image={image} name={name} />
                <SecondColumn
                  name={name}
                  company={company}
                  productId={productId}
                />
                <ThirdColumn id={id} quantity={amount} />
                <FourthColumn price={price} />
              </Card>
            </MotionDiv>
          );
        })}
      </AnimatePresence>
    </MotionDiv>
  );
}

export default CartItemList;
