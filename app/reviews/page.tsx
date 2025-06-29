import { IconButton } from "@/components/form/Buttons";
import FormContainer from "@/components/form/FormContener";
import TitelSection from "@/components/global/TitelSection";
import ReviewCard from "@/components/reviews/ReviewCard";
import { deleteReview, fetchProductReviewsByUser } from "@/utils/actions";
import React from "react";

async function page() {
  const reviews = await fetchProductReviewsByUser();
  if (reviews.length == 0)
    return <TitelSection text="you have no reviews yet" />;
  return (
    <>
      <TitelSection text="Your Reviews" />
      <section className="grid md:grid-cols-2 gap-8 mt-4">
        {reviews.map((review) => {
          const { comment, rating , authorName } = review;
          const { image } = review.product;
          const reviewInfo = { comment, rating, authorName, image };
          return (
            <ReviewCard key={review.id} reviewInfo={reviewInfo}>
              <DeleteReview reviewId={review.id} />
            </ReviewCard>
          );
        })}
      </section>
    </>
  );
}
const DeleteReview = ({ reviewId }: { reviewId: string }) => {
  return (
    <FormContainer className="" action={deleteReview}>
      <input hidden name="reviewId" value={reviewId} />
      <IconButton actionType="delete" />
    </FormContainer>
  );
};

export default page;
