import { Card, CardTitle } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <CardProdect />
        <CardProdect />
        <CardProdect />
      </div>
      <div className="lg:col-span-4">
        <Card className="col-span-12 lg:col-span-4 border  rounded-lg p-8">
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <Skeleton className="h-5 w-full" />
          <CardTitle className="mt-3">
            <Skeleton className="h-5 w-full" />
          </CardTitle>
          <div className="flex items-center gap-3">
            <Skeleton className="h-5 w-full" />
          </div>
          <Skeleton className="h-10 w-full rounded-full " />
        </Card>
      </div>
    </div>
  );
}
const CardProdect = () => {
  return (
    <Card className="flex flex-col gap-y-4 justify-between md:flex-row flex-wrap p-6 mb-8 gap-x-4">
      <div className="relative h-24 w-24 sm:h-32 sm:w-32">
        <Skeleton className="h-24 w-24" />
      </div>
      <div className="sm:w-48">
        <Skeleton className="h-3 w-30 my-5" />
        <Skeleton className="h-3 w-20 my-5" />
      </div>
      <div className="md:ml-8">
        <div>
          <Skeleton className="h-7 w-15 my-5 " />
          <Skeleton className="h-8 w-35 rounded-full my-5 " />
        </div>
      </div>
      <Skeleton className="h-7 w-15 my-5" />
    </Card>
  );
};
export default loading;
