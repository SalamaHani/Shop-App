"use client";

import {
  DropdownMenuItem,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";

// import { Input } from "@/components/ui/input";
import { Truck, Package, Clock, CheckCircle } from "lucide-react";
import { ActionChangSutst } from "@/utils/Type";
import { startTransition, useActionState } from "react";
import { handleStatusChange } from "@/utils/actions";
import { useRouter } from "next/navigation";

export default function OrderStatusDropdown({
  orderId,
  sttus,
}: {
  orderId: string;
  sttus: string;
}) {
  const status = [
    {
      id: 1,
      states: "delivered",
      color:
        "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
      icon: CheckCircle,
      description: "Order successfully delivered",
    },
    {
      id: 2,
      states: "shipped",
      color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
      icon: Truck,
      description: "Order is in transit",
    },
    {
      id: 3,
      states: "processing",
      color:
        "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
      icon: Package,
      description: "Order is being prepared",
    },
    {
      id: 4,
      states: "pending",
      color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
      icon: Clock,
      description: "Order awaiting confirmation",
    },
  ];
  const initialState: ActionChangSutst = {
    success: false,
    message: "",
  };
  const [state, action] = useActionState(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (prevState: any, formData: FormData) => {
      const status = formData.get("status") as string;
      const orderId = formData.get("orderId") as string;
      return await handleStatusChange(orderId, status);
    },
    initialState
  );
  const router = useRouter();
  const handleClick = (status: string, orderId: string) => {
    const formData = new FormData();
    formData.append("orderId", orderId);
    formData.append("status", status);
    startTransition(() => {
      action(formData);
    });
    router.refresh();
  };
  console.log(state);
  return (
    <>
      <DropdownMenuSeparator />
      {status.map((s) => {
        const StatusIcon = s.icon;
        return (
          <div key={s.id}>
            <DropdownMenuItem
              disabled={sttus === s.states}
              onClick={() => handleClick(s.states, orderId)}
            >
              <StatusIcon className="mr-2 h-4 w-4" />
              {s.states.charAt(0).toUpperCase() + s.states.slice(1)}
            </DropdownMenuItem>
          </div>
        );
      })}
    </>
  );
}
