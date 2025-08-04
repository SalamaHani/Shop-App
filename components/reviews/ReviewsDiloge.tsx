import React from "react";
import {
  Dialog,
  DialogContent,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import RatingsReviews from "../singel-product/RatingsReviews";
import { fetchProductRating, ratingSummary } from "@/utils/actions";
import ProductReviewReadMore from "./ProductReviewReadMore";
// import { Separator } from "@radix-ui/react-separator";

async function ReviewsDiloge({ productId }: { productId: string }) {
  const { count, rating } = await fetchProductRating(productId);
  const Reating = await ratingSummary(productId);
  //   const reviews = await fetchReivewsReadMore({ productId, Page });
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Button className="text-sm" variant="outline">
          Read More Reviews
        </Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[725px] max-h-[90vh] overflow-hidden">
        <DialogHeader>
          <DialogTitle>Ratings and reviews</DialogTitle>
        </DialogHeader>
        <div className="overflow-y-auto max-h-[60vh]">
          <RatingsReviews
            overallRating={+rating}
            totalRatings={count}
            ratingBreakdown={Reating}
            className={" flex-row border-0 "}
          />
          <ProductReviewReadMore productId={productId} />
        </div>
        <DialogFooter>{/* <SubmitButton text="Send Review" /> */}</DialogFooter>
      </DialogContent>
    </Dialog>
  );
}

export default ReviewsDiloge;
