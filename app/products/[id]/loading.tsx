import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="mt-6 grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
      {/* IMAGE FIRST COL */}
      <div className="relative h-full ">
        <Skeleton className="h-110 w-full" />
      </div>
      {/* PRODUCT INFO SECOND COL */}
      <div>
        <div className="flex gap-x-8 items-center">
          <Skeleton className="h-5 w-30 my-5" />
          <div className="flex items-center gap-x-2">
            <Skeleton className="h-8 w-8 " />
            <Skeleton className="h-8 w-8" />
          </div>
        </div>
        <Skeleton className="h-3 w-30 my-5" />
        <Skeleton className="h-3 w-20 my-5" />
        <Skeleton className="h-3 w-30 my-5" />
        <div>
          <Skeleton className="h-3 w-150 my-5" />
          <Skeleton className="h-3 w-150 my-5" />
          <Skeleton className="h-3 w-150 my-5" />
          <Skeleton className="h-3 w-150 my-5" />
        </div>
        <Skeleton className="h-6 w-20 my-8 rounded-full" />
        <Skeleton className="h-8 w-35 rounded-full my-5 " />
      </div>
    </div>
  );
}

export default loading;
