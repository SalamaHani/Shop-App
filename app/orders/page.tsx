import TitelSection from "@/components/global/TitelSection";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { fetchOrderUser } from "@/utils/actions";
import { formatCurrency, formatDate } from "@/utils/format";
import { Calendar, CheckCircle, Clock, Package, Truck } from "lucide-react";
import React from "react";
const getStatusConfig = (statusName: string) => {
  return statuse.find((s) => s.states === statusName) || statuse[3];
};
const statuse = [
  {
    id: 1,
    states: "delivered",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
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
async function page() {
  const orders = await fetchOrderUser();
  return (
    <>
      <TitelSection text="Your Orders" />
      <Table>
        <TableCaption>Total Orders : {orders.length}</TableCaption>
        <TableHeader>
          <TableRow>
            <TableHead>Products</TableHead>
            <TableHead>Order Total</TableHead>
            <TableHead>Tax</TableHead>
            <TableHead>Shipping</TableHead>
            <TableHead>City</TableHead>
            <TableHead>Status</TableHead>
            <TableHead>Date</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {orders.map((order) => {
            const {
              products,
              orderTotal,
              tax,
              shipping,
              createdAt,
              city,
              status,
            } = order;
            ///stuts acont condeing

            const statusConfig = getStatusConfig(status);
            const StatusIcon = statusConfig.icon;
            console.log(StatusIcon);
            return (
              <TableRow key={order.id}>
                <TableCell className="font-medium">{products}</TableCell>
                <TableCell className="font-medium">
                  {formatCurrency(Number(orderTotal))}
                </TableCell>
                <TableCell className="font-medium">
                  {formatCurrency(Number(tax))}
                </TableCell>
                <TableCell className="font-medium">
                  {formatCurrency(shipping)}
                </TableCell>
                <TableCell className="font-medium">{city}</TableCell>
                <TableCell></TableCell>
                <TableCell>
                  <div className="flex items-center gap-1">
                    <Calendar className="h-3 w-3 text-gray-400" />
                    <div>
                      <div className="font-medium">{formatDate(createdAt)}</div>
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default page;
