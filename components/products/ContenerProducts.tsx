import React from "react";
import { fetchallproductsdb } from "@/utils/actions";
import ProductsGrid from "./ProductsGrid";
import ProductsList from "./ProductsList";
import { Button } from "../ui/button";
import Link from "next/link";
import { LuLayoutGrid, LuList } from "react-icons/lu";
import { Separator } from "../ui/separator";
import Compelxpagination from "../global/Compelxpagination";
async function ContenerProducts({
  layout,
  Parmes,
  Page,
}: {
  layout: string;
  Parmes: string;
  Page: number;
}) {
  const { products, metadata } = await fetchallproductsdb({ Parmes, Page });
  const totalProducts = products.length;
  const searchTerm = Parmes ? `&Parmes=${Parmes}` : "";
  const pagedata = Page ? `&Page=${Page}` : "";
  return (
    <>
      <section>
        <div className="flex justify-between items-center">
          <h4 className="font-medium text-lg">
            {totalProducts} product{totalProducts > 1 && "s"}
          </h4>
          <div className="flex gap-x-4">
            <Button
              variant={layout === "grid" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=grid${searchTerm}${pagedata}`}>
                <LuLayoutGrid />
              </Link>
            </Button>
            <Button
              variant={layout === "list" ? "default" : "ghost"}
              size="icon"
              asChild
            >
              <Link href={`/products?layout=list${searchTerm}${pagedata}`}>
                <LuList />
              </Link>
            </Button>
          </div>
        </div>
        <Separator className="mt-4" />
      </section>
      <section>
        <div>
          {totalProducts === 0 ? (
            <h5 className="text-2xl mt-16">
              Sorry, no products matched your search...
            </h5>
          ) : layout === "grid" ? (
            <ProductsGrid products={products} />
          ) : (
            <ProductsList products={products} />
          )}
        </div>
        <Compelxpagination Page={Page} metadata={metadata} />
      </section>
    </>
  );
}

export default ContenerProducts;
