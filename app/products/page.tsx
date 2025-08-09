import ContenerProducts from "@/components/products/ContenerProducts";
import React from "react";

type ProductsPageProps = {
  searchParams: Promise<{
    layout?: string;
    Parmes?: string;
    Page?: string;
  }>;
};
async function Page({ searchParams }: ProductsPageProps) {
  const params = await searchParams; // Await as required
  const layout = params.layout || "grid";
  const Parmes = params.Parmes || "";
  const Page = parseInt(params.Page || "1");
  return (
    <>
      <ContenerProducts layout={layout} Page={Page} Parmes={Parmes} />
    </>
  );
}

export default Page;
