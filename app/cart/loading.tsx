import { Card, CardContent } from "@/components/ui/card";
import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <div className="mt-8 grid gap-4 lg:grid-cols-12">
      <div className="lg:col-span-8">
        <Card>
          <CardContent className="p-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-3/4 mt-4" />
            <Skeleton className="h-4 w-1/2 mt-4" />
          </CardContent>
        </Card>
      </div>
      <div className="lg:col-span-4">
        <Card>
          <CardContent className="p-4">
            <Skeleton className="h-48 w-full" />
            <Skeleton className="h-4 w-3/4 mt-4" />
            <Skeleton className="h-4 w-1/2 mt-4" />
          </CardContent>
        </Card>
      </div>
    </div>
  );
}

export default loading;
