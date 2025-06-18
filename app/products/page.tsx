
import ContenerProducts from "@/components/products/ContenerProducts";
import React from "react";

function ProductsPage({
  searchParams,
}: {
  searchParams: { layout: string; Parmes: string };
}) {
  const layout = searchParams.layout || "grid";
  const Parmes = searchParams.Parmes || "";
  return (
    <>
      <ContenerProducts layout={layout} Parmes={Parmes} />
    </>
  );
}

export default ProductsPage;
