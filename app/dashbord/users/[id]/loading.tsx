import { Skeleton } from "@/components/ui/skeleton";
import React from "react";

function loading() {
  return (
    <section>
      <Skeleton className="w-30 h-3 rounded" />
      <div>
        <div className="col-span-12 h-full lg:col-span-8 border p-4 rounded-lg">
          <div className="h-full">
            <div className="space-y-4">
              <div>
                <div
                  className={`dark:hover:border-brand-500 w-full rounded-xl border border-dashed   p-7 lg:p-10 `}
                >
                  <div className="dz-message m-0 ">
                    <Skeleton className="w-full h-15 " />
                  </div>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[100%]">
                  <Skeleton className="w-full h-8 " />
                </div>
              </div>
              <div className="flex gap-4">
                <div className="w-[50%]">
                  <Skeleton className="w-full h-8 " />
                </div>
                <div className="w-[50%]">
                  <Skeleton className="w-full h-8 " />
                </div>
              </div>
              <div className="mt-6">
                <Skeleton className="w-15 h-4 rounded" />
              </div>
              <Skeleton className="w-full h-15 rounded" />
            </div>
          </div>
        </div>
        <div className=" flex justify-end mt-5">
          <Skeleton className="w-30 h-8 rounded-2xl" />
        </div>
      </div>
    </section>
  );
}

export default loading;
