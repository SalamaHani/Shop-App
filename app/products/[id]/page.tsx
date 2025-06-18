import { fetchSingleProduct } from "@/utils/actions";
import React from "react";
import ProductDiletes from "@/components/singel-product/ProductDiletes";
interface ProductPageProps {
  params: {
    id: string;
  };
}
async function SingleProductPage({ params }: ProductPageProps) {
  const product = await fetchSingleProduct(params.id);
  return (
    <>
      <ProductDiletes product={product} />
    </>
  );
}

export default SingleProductPage;
