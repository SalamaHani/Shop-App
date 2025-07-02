import ContenerProducts from "@/components/products/ContenerProducts";
import React from "react";

function ProductsPage({
  searchParams,
}: {
  searchParams: { layout: string; Parmes: string; page: string };
}) {
  const layout = searchParams.layout || "grid";
  const Parmes = searchParams.Parmes || "";
  const Page = parseInt(searchParams.page || "1");
  return (
    <>
      <ContenerProducts layout={layout} Page={Page} Parmes={Parmes} />
    </>
  );
}

export default ProductsPage;
