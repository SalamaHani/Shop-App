import TitelSection from "@/components/global/TitelSection";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/actions";
import React from "react";
import { MotionDiv } from "@/components/MotionDiv";
import { AnimatePresence } from "motion/react";
async function page() {
  const favorites = await fetchUserFavorites();
  if (favorites.length == 0)
    return <TitelSection text="You have no favorites yet." />;
  return (
    <AnimatePresence>
      <MotionDiv
        key={0}
        layout
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.5 }}
      >
        <TitelSection text="Favorites" />
        <ProductsGrid
          products={favorites.map((favorite) => favorite.product)}
        />
      </MotionDiv>
    </AnimatePresence>
  );
}

export default page;
