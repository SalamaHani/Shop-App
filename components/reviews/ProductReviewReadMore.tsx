"use client";
import { Review } from "@prisma/client";
import React, { useEffect, useState } from "react";
import { useInView } from "react-intersection-observer";
import ReviewCard from "./ReviewCard";
import { fetchReivewsReadMore } from "@/utils/actions";
import LodingReadMore from "./Lodingmor";
let Page = 1;
function ProductReviewReadMore({ productId }: { productId: string }) {
  const [data, setData] = useState<Review[]>([]);
  const { ref, inView } = useInView();
  const [hasNext, setHasNext] = useState(true);
  const loadReviews = async () => {
    if (!hasNext) return;
    const reviews = await fetchReivewsReadMore({ productId, Page });
    setData([...data, ...reviews]);
    Page++;
    console.log(reviews.length);
    setHasNext(reviews.length != 0);
  };
  //   useEffect(() => {
  //     const lode = async () => {

  //       if (inView && hasNext) {
  //         setData([...data, ...reviews]);
  //       }
  //     };
  //     lode();
  //   }, [inView, Page]);
  useEffect(() => {
    if (inView && hasNext) {
      loadReviews();
    }
  }, [inView, hasNext]);
  return (
    <div className="grid md:grid-cols-1 gap-4 mt-2">
      {data.map((review) => {
        const { comment, rating, authorName, createdAt } = review;
        const reviewInfo = {
          comment,
          rating,
          authorName,
          createdAt,
        };
        return <ReviewCard key={review.id} reviewInfo={reviewInfo} />;
      })}
      {hasNext && (
        <div ref={ref} className="text-center text-sm text-gray-500 py-4">
          <LodingReadMore />
        </div>
      )}
    </div>
  );
}

export default ProductReviewReadMore;
