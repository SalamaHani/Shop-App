"use client";
import { Progress } from "@/components/ui/progress";
import { useEffect, useState } from "react";
// import { Star } from "lucide-react";
import { cn } from "@/lib/utils";
import { FaStar } from "react-icons/fa";

interface RatingBreakdown {
  stars: number;
  count: number;
  percentage: number;
}

interface RatingsReviewsProps {
  overallRating: number;
  totalRatings: number;
  ratingBreakdown: RatingBreakdown[];
  onClose?: boolean;
  className?: string;
}

export default function RatingsReviews({
  overallRating,
  totalRatings,
  ratingBreakdown,
  className,
}: RatingsReviewsProps) {
  const [animatedPercentages, setAnimatedPercentages] = useState<number[]>(
    ratingBreakdown.map(() => 0)
  );
  const [animatedRating, setAnimatedRating] = useState(0);

  useEffect(() => {
    // Animate the overall rating
    const ratingTimer = setTimeout(() => {
      let currentRating = 0;
      const ratingInterval = setInterval(() => {
        currentRating += overallRating / 20;
        if (currentRating >= overallRating) {
          currentRating = overallRating;
          clearInterval(ratingInterval);
        }
        setAnimatedRating(currentRating);
      }, 50);
    }, 300);
    // Animate the progress bars
    const timer = setTimeout(() => {
      ratingBreakdown.forEach((rating, index) => {
        setTimeout(() => {
          let currentPercentage = 0;
          const interval = setInterval(() => {
            currentPercentage += rating.percentage / 20;
            if (currentPercentage >= rating.percentage) {
              currentPercentage = rating.percentage;
              clearInterval(interval);
            }
            setAnimatedPercentages((prev) => {
              const newPercentages = [...prev];
              newPercentages[index] = currentPercentage;
              return newPercentages;
            });
          }, 30);
        }, index * 100);
      });
    }, 600);

    return () => {
      clearTimeout(timer);
      clearTimeout(ratingTimer);
    };
  }, [overallRating, ratingBreakdown]);

  return (
    <div className={cn("border bg-card rounded-lg shadow-sm  p-3", className)}>
      {/* Header */}
      {/* <div className="flex items-center justify-between mb-2"></div> */}
      {/* Overall Rating */}
      <div className="flex-col items-center gap-1 mb-3">
        <div className="flex items-center gap-1">
          <span className="text-4xl font-bold transition-all duration-500">
            {animatedRating.toFixed(1)}
          </span>
          <FaStar className="h-4 w-4   transition-transform duration-500 hover:scale-110" />
        </div>
        <div className="text-sm text-gray-600 dark:text-gray-400 flex items-center gap-1">
          <span className=" flex underline  mt-1 items-center gap-1">
            {totalRatings} rating{totalRatings > 1 ? "s" : ""}
          </span>
        </div>
      </div>
      {/* Rating Breakdown */}
      <div className="space-y-1">
        {ratingBreakdown.map((rating, index) => (
          <div key={rating.stars} className="flex items-center gap-3">
            <span className="text-sm font-medium  w-2">{rating.stars}</span>
            <div className="flex-1 relative">
              <Progress
                value={animatedPercentages[index]}
                className="h-2 transition-all duration-300"
              />
              <div
                className="absolute inset-0 bg-gradient-to-r from-transparent to-white/90 rounded-full opacity-0 animate-pulse"
                style={{
                  animationDelay: `${index * 100}ms`,
                  animationDuration: "2s",
                }}
              />
            </div>
            <span className="text-xs text-gray-500 w-8 text-right">
              {rating.count > 0 ? rating.count : 0}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
