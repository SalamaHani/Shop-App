"use client";
import { Skeleton } from "@/components/ui/skeleton";

function loading() {
  return (
    <>
      <UserDataLoadingCard />
      <UserProfinalLoadingCard />
      <UserAderrdsLoadingCard />
    </>
  );
}

const UserDataLoadingCard = () => {
  return (
    <div className="p-5 mb-6 border  rounded-2xl  lg:p-6 w-full">
      <div className="flex flex-col gap-5 xl:flex-row xl:items-center xl:justify-between">
        <div className="flex flex-col items-center w-full gap-6 xl:flex-row">
          <Skeleton className="w-20 h-20 rounded-full" />
          <div className="order-3 xl:order-2 ">
            <Skeleton className="w-50 h-4" />
            <div className="flex flex-col mt-3 items-center gap-1 text-center xl:flex-row xl:gap-3 xl:text-left">
              <Skeleton className="w-90 h-4" />
            </div>
          </div>
        </div>
        <div>
          <Skeleton className="w-15 h-8  rounded-full" />
        </div>
      </div>
    </div>
  );
};
const UserProfinalLoadingCard = () => {
  return (
    <div className="p-5 mb-6 border rounded-2xl h-60  lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Skeleton className="w-100 h-4" />
          <div className="grid grid-cols-3 mt-10 gap-10 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <div>
                <Skeleton className="w-50 h-4 my-8" />
              </div>
              <div>
                <Skeleton className="w-50 h-4 my-8" />
              </div>
            </div>
            <div>
              <div>
                <Skeleton className="w-50 h-4 my-8" />
              </div>
              <div>
                <Skeleton className="w-50 h-4 my-8" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Skeleton className="w-30 h-8  rounded-full" />
        </div>
        <div>
          <Skeleton className="w-15 h-8  rounded-full" />
        </div>
      </div>
    </div>
  );
};
const UserAderrdsLoadingCard = () => {
  return (
    <div className="p-5 mb-6 border rounded-2xl h-60  lg:p-6">
      <div className="flex flex-col gap-6 lg:flex-row lg:items-start lg:justify-between">
        <div>
          <Skeleton className="w-100 h-4" />
          <div className="grid grid-cols-3 mt-10 gap-10 lg:grid-cols-2 lg:gap-7 2xl:gap-x-32">
            <div>
              <div>
                <Skeleton className="w-50 h-4 my-8" />
              </div>
              <div>
                <Skeleton className="w-50 h-4 my-8" />
              </div>
            </div>
            <div>
              <div>
                <Skeleton className="w-50 h-4 my-8" />
              </div>
              <div>
                <Skeleton className="w-50 h-4 my-8" />
              </div>
            </div>
          </div>
        </div>
        <div>
          <Skeleton className="w-15 h-8  rounded-full" />
        </div>
      </div>
    </div>
  );
};

export default loading;
