import React from "react";
import { Card, CardHeader } from "../ui/card";
import { Skeleton } from "../ui/skeleton";

function LodingReadMore() {
  return (
    <div className="grid md:grid-cols-1 gap-8 mt-4">
      <ReviewMordLoadingCard />
      <ReviewMordLoadingCard />
      <ReviewMordLoadingCard />
    </div>
  );
}

export default LodingReadMore;
const ReviewMordLoadingCard = () => {
  return (
    <Card>
      <CardHeader>
        <div className="flex items-center">
          <Skeleton className="w-12 h-12 rounded-full" />
          <div className="ml-4">
            <Skeleton className="w-[150px] h-4 mb-2" />
            <Skeleton className="w-[150px] h-4 " />
          </div>
        </div>
      </CardHeader>
    </Card>
  );
};
