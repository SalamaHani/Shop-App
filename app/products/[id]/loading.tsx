import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="mt-6 w-full grid gap-y-8 lg:grid-cols-2 lg:gap-x-16">
      <Card>
        <CardContent className="p-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-3/4 mt-4" />
          <Skeleton className="h-4 w-1/2 mt-4" />
        </CardContent>
      </Card>
      <Card>
        <CardContent className="p-4">
          <Skeleton className="h-48 w-full" />
          <Skeleton className="h-4 w-3/4 mt-4" />
          <Skeleton className="h-4 w-1/2 mt-4" />
        </CardContent>
      </Card>
    </div>
  );
}

export default loading;
