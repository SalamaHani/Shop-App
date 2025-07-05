"use client";

import { Card, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <>
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-10  mt-10 my-5">
        <UserDataLoadingCard />
        <Card className="col-span-12 lg:col-span-4 border  rounded-lg p-8">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <CardTitle className="mt-3">
            <Skeleton className="h-5 w-full" />
          </CardTitle>
          <div className="py-3">
            <div className="flex flex-wrap items-center gap-7">
              <Skeleton className="h-5 w-10 rounded-full" />
              <Skeleton className="h-5 w-10 rounded-full" />
              <Skeleton className="h-5 w-10 rounded-full" />
              <Skeleton className="h-5 w-10 rounded-full" />
              <Skeleton className="h-5 w-10 rounded-full" />
            </div>
          </div>
          <div className="flex items-center gap-3">
            <Skeleton className="h-5 w-full" />
          </div>
          <Skeleton className="h-7 w-full rounded-full " />
        </Card>
      </div>
    </>
  );
}

const UserDataLoadingCard = () => {
  return (
    <div className="col-span-12 h-full lg:col-span-8 border p-4 rounded-lg">
      <div className="h-full">
        <div className="space-y-4">
          <div className="flex gap-4">
            <div className="w-[50%]">
              <Skeleton className="h-10 my-5 w-full" />
            </div>
            <div className="w-[50%]">
              <Skeleton className="h-10 my-5 w-full" />
            </div>
          </div>
          <div>
            <Skeleton className="h-10 my-5 w-full" />
          </div>
          <div className="flex gap-4">
            <div className="w-[50%]">
              <Skeleton className="h-10 my-5 w-full" />
            </div>
            <div className="w-[50%]">
              <Skeleton className="h-10 my-5 w-full" />
            </div>
          </div>
          <div>
            <Skeleton className="h-10 my-5 w-full" />
          </div>
          <div className="flex gap-4">
            <div className="w-[50%]">
              <Skeleton className="h-10 my-5 w-full" />
            </div>
            <div className="w-[50%]">
              <Skeleton className="h-10 my-5 w-full" />
            </div>
          </div>
          <Skeleton className="h-10 my-5 w-full" />
        </div>
      </div>
    </div>
  );
};
export default loading;
