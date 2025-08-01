import {
  fetchProductRating,
  fetchProductReviews,
  ratingSummary,
} from "@/utils/actions";
import TitelSection from "../global/TitelSection";
import ReviewCard from "./ReviewCard";
import RatingsReviews from "../singel-product/RatingsReviews";

async function ProductReviews({ productId }: { productId: string }) {
  const reviews = await fetchProductReviews(productId);
  const { count, rating } = await fetchProductRating(productId);
  const Reating = await ratingSummary(productId);
  // const sampleRatingBreakdown2 = [
  //   { stars: 5, count: 89, percentage: 57 },
  //   { stars: 4, count: 45, percentage: 29 },
  //   { stars: 3, count: 15, percentage: 10 },
  //   { stars: 2, count: 5, percentage: 3 },
  //   { stars: 1, count: 2, percentage: 1 },
  // ];
  console.log(Reating);
  return (
    <div className="mt-16">
      <TitelSection text="Ratings and reviews" />
      <div className="grid md:grid-cols-2 gap-8 my-8">
        <RatingsReviews
          overallRating={+rating}
          totalRatings={count}
          ratingBreakdown={Reating}
        />
        {reviews.map((review) => {
          const { comment, rating, authorName } = review;
          const reviewInfo = {
            comment,
            rating,
            authorName,
          };
          return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
        })}
      </div>
    </div>
  );
}
export default ProductReviews;
