import { fetchSingleProduct, getProductById } from "@/utils/actions";
import React from "react";
import { Image } from "@imagekit/next";
import { formatCurrency } from "@/utils/format";
import AddToCart from "@/components/singel-product/AddToCart";
import Titelproduct from "@/components/singel-product/Titelproduct";
import FavoriteToggleButton from "@/components/products/FavaretToggel";
import ShareButton from "@/components/singel-product/ShareButton";
import ProductRating from "@/components/singel-product/ProductRating";
import ProductReviews from "@/components/reviews/ProductReviews";
import { ReviewDiloge } from "@/components/reviews/ReviewDiloge";
import ReviewsDiloge from "@/components/reviews/ReviewsDiloge";
// import SubmitReview from "@/components/reviews/SubmitReview";
type ProductEditPageProps = {
  params: Promise<{
    id: string;
  }>;
};
async function Page({ params }: ProductEditPageProps) {
  const resolvedParams = await params;
  const { id } = resolvedParams;
  const product = await fetchSingleProduct(id);
  const ProductId = await getProductById(id);
  return (
    <section>
      <Titelproduct name={product?.name ?? ""} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            urlEndpoint={process.env.ImagekitIDURL}
            src={product?.image ?? ""}
            alt={product?.name ?? ""}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
            className="w-full rounded object-cover"
            loading="lazy" // Use "eager" to load immediately. `lazy` is the default value
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">
              {product?.name ?? ""}{" "}
            </h1>
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={id} />
              <ShareButton name={product?.name ?? ""} productId={id} />
              <ReviewDiloge productId={ProductId.id} />
            </div>
          </div>
          <ProductRating productId={id} />
          <h4 className="text-xl mt-2">{product?.company ?? ""}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {formatCurrency(product?.price ?? 0)}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">
            {product?.description ?? ""}
          </p>
          <AddToCart productId={id} />
        </div>
      </div>
      <ProductReviews productId={ProductId.id} />
      <ReviewsDiloge productId={ProductId.id} />
    </section>
  );
}

export default Page;
