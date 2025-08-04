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

async function SingleProductPage({ params }: { params: { id: string } }) {
  const product = await fetchSingleProduct(params.id);
  const { name, image, company, description, price } = product;
  const ProductId = await getProductById(params.id);
  return (
    <section>
      <Titelproduct name={name} />
      <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
        {/* IMAGE FIRST COL */}
        <div className="relative h-full">
          <Image
            urlEndpoint={process.env.ImagekitIDURL}
            src={image}
            alt={name}
            fill
            sizes="(max-width:768px) 100vw,(max-width:1200px) 50vw, 33vw"
            className="w-full rounded object-cover"
            loading="lazy" // Use "eager" to load immediately. `lazy` is the default value
          />
        </div>
        {/* PRODUCT INFO SECOND COL */}
        <div>
          <div className="flex gap-x-8 items-center">
            <h1 className="capitalize text-3xl font-bold">{name} </h1>
            <div className="flex items-center gap-x-2">
              <FavoriteToggleButton productId={params.id} />
              <ShareButton name={name} productId={params.id} />
            </div>
          </div>
          <ProductRating productId={params.id} />
          <h4 className="text-xl mt-2">{company}</h4>
          <p className="mt-3 text-md bg-muted inline-block p-2 rounded">
            {formatCurrency(price)}
          </p>
          <p className="mt-6 leading-8 text-muted-foreground">{description}</p>
          <AddToCart productId={params.id} />
        </div>
      </div>
      <ProductReviews productId={ProductId.id} />
      <ReviewDiloge productId={ProductId.id} />
      <ReviewsDiloge productId={ProductId.id} />
    </section>
  );
}

export default SingleProductPage;
