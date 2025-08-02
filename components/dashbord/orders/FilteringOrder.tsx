"use client";

import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Clock, Package, Truck, CheckCircle } from "lucide-react";
import { startTransition, useActionState } from "react";

import { filtarOrderStatusAction } from "@/utils/actions";
export function CompactOrderFilter({
  selectedStatus,
}: {
  selectedStatus: string;
  cont: number;
}) {
  // const [state, action] = useActionState(handleStatusChange, initialState);
  const [state, action] = useActionState(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (prevState: any, formData: FormData) => {
      const option = formData.get("option") as string;
      return await filtarOrderStatusAction(option);
    },
    null
  );
  const onStatusChange = (option: string) => {
    const formData = new FormData();
    formData.append("option", option);
    startTransition(() => {
      action(formData);
    });
  };
  console.log(state);
  console.log(selectedStatus);
  const filterOptions = [
    {
      id: "all",
      label: "All",
      value: "all",
      icon: null,
      count: state?.cont || 0,
    },
    {
      id: "pending",
      label: "pending",
      value: "pending",
      icon: Clock,
      count: state?.cont || 0,
    },
    {
      id: "processing",
      label: "processing",
      value: "processing",
      icon: Package,
      count: state?.cont || 0,
    },
    {
      id: "shipped",
      label: "shipped",
      value: "shipped",
      icon: Truck,
      count: state?.cont || 0,
    },
    {
      id: "delivered",
      label: "delivered",
      value: "delivered",
      icon: CheckCircle,
      count: state?.cont || 0,
    },
  ];
  return (
    <div
      className={`inline-flex items-center gap-1 p-1 bg-gray-50 dark:bg-gray-900 rounded-full border border-gray-200 dark:border-gray-800`}
    >
      {filterOptions.map((option) => {
        const Icon = option.icon;
        const isSelected =
          state?.selectedStatus == option.value &&
          state?.selectedStatus != null;
        const allselcted = selectedStatus == option.value;
        return (
          <Button
            key={option.id}
            variant="ghost"
            size="sm"
            onClick={() => onStatusChange(option.value)}
            className={`
              flex items-center gap-2 px-4 py-2 cursor-pointer rounded-full transition-all duration-200  text-sm font-medium
              ${
                isSelected || allselcted
                  ? "bg-black text-white dark:bg-gray-800 shadow-sm  dark:text-gray-100 border border-gray-200 dark:border-gray-700"
                  : "hover:bg-gray-200 dark:hover:bg-gray-800 text-gray-600 dark:text-gray-400"
              }
            `}
          >
            {Icon && (
              <Icon
                className={`h-4 w-4 ${
                  isSelected || allselcted
                    ? "text-gray-700 dark:text-gray-300"
                    : "text-gray-500 dark:text-gray-500"
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
                    isSelected || allselcted
                      ? "bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-300"
                      : "bg-gray-200 dark:bg-gray-800 text-gray-600 dark:text-gray-400"
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
