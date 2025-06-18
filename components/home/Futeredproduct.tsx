import { fatchFutrerProduct } from "@/utils/actions";
import React from "react";
import ProductsGrid from "../products/ProductsGrid";
import TitelSection from "../global/TitelSection";

async function Futeredproduct() {
  const futererproduct = await fatchFutrerProduct();
  return (
    <section className="mt-23">
      <TitelSection text={"Featured Products"} />
      <div>
        <ProductsGrid products={futererproduct} />
      </div>
    </section>
  );
}

export default Futeredproduct;
