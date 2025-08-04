"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Package, Truck, CheckCircle } from "lucide-react";
import { useRouter, useSearchParams } from "next/navigation";
import { Order } from "@prisma/client";
// import { useDebouncedCallback } from "use-debounce";
export function CompactOrderFilter({ orders }: { orders: Order[] }) {
  const router = useRouter();
  const searchParams = useSearchParams();
  const currentStatus = searchParams.get("Status") || "all";
  const handleClick = (Status: string) => {
    const params = new URLSearchParams(searchParams.toString());
    if (Status === "all") {
      params.delete("Status");
    } else {
      params.set("Status", Status);
    }
    params.set("page", "1"); // reset to first page
    router.push(`?${params.toString()}`);
  };

  // const searchParams = useSearchParams();
  // const currentStatus = searchParams.get("status") || "all";
  // const router = useRouter();
  // const handleClick = useDebouncedCallback((value: string) => {
  //   const params = new URLSearchParams(searchParams);
  //   console.log(params.get("status"));
  //   if (value) {
  //     params.set("status", value);
  //   } else {
  //     params.delete("status");
  //   }
  //   params.set("page", "1"); // reset to first page
  //   router.push(`?${params.toString()}`);
  // }, 500);
  const filterOptions = [
    {
      id: "all",
      label: "All",
      value: "all",
      icon: null,
      count: orders.length || 0,
    },
    {
      id: "pending",
      label: "pending",
      value: "pending",
      icon: Clock,
      count: currentStatus == "pending" ? orders.length : 0,
    },
    {
      id: "processing",
      label: "processing",
      value: "processing",
      icon: Package,
      count: currentStatus == "processing" ? orders.length : 0,
    },
    {
      id: "shipped",
      label: "shipped",
      value: "shipped",
      icon: Truck,
      count: currentStatus == "shipped" ? orders.length : 0,
    },
    {
      id: "delivered",
      label: "delivered",
      value: "delivered",
      icon: CheckCircle,
      count: currentStatus == "delivered" ? orders.length : 0,
    },
  ];
  return (
    <div
      className={`inline-flex items-center gap-1 p-1 mb-5    bg-card text-card-foreground   rounded-xl border  shadow-sm`}
    >
      {filterOptions.map((option) => {
        const Icon = option.icon;
        const isSelected = currentStatus == option.value;
        return (
          <Button
            key={option.id}
            variant="ghost"
            size="sm"
            onClick={() => handleClick(option.value)}
            className={`
              flex items-center gap-2 px-4 py-2 cursor-pointer rounded-full transition-all duration-200  text-sm font-medium
              ${
                isSelected
                  ? "bg-black dark:bg-gray-700 text-white shadow-sm  dark:text-gray-100 border border-gray-200 dark:border-gray-700"
                  : "hover:bg-gray-200 g-card text-card-foreground   dark:text-gray-400"
              }
            `}
          >
            {Icon && (
              <Icon
                className={`h-4 w-4 ${
                  isSelected ? "text-gray-800 " : "text-gray-500 "
                }`}
              />
            )}
            <span>{option.label}</span>
            {option.count > 0 && (
              <Badge
                variant="secondary"
                className={`
                  ml-1 text-xs px-1.5 py-0.5 min-w-[18px] h-4 flex items-center justify-center
                  ${
                    isSelected
                      ? " bg-card text-card-foreground  dark:text-gray-300"
                      : "bg-card text-card-foreground dark:text-gray-400"
                  }
                `}
              >
                {option.count}
              </Badge>
            )}
          </Button>
        );
      })}
    </div>
  );
}
