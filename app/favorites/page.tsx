import TitelSection from "@/components/global/TitelSection";
import ProductsGrid from "@/components/products/ProductsGrid";
import { fetchUserFavorites } from "@/utils/actions";
import React from "react";
async function page() {
  const favorites = await fetchUserFavorites();
  if (favorites.length == 0)
    return <TitelSection text="You have no favorites yet." />;
  return (
    <div>
      <div>
        <TitelSection text="Favorites" />
        <ProductsGrid
          products={favorites.map((favorite) => favorite.product)}
        />
      </div>
    </div>
  );
}

export default page;
