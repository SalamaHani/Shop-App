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
import React from "react";
const staus = [
  { id: 1, states: "delivered", color: "bg-success/20 text-success/100" },
  { id: 2, states: "shipped", color: "bg-error/20 text-error/100" },
  { id: 3, states: "processing", color: "bg-primary/20 text-primary/100" },
  { id: 4, states: "pending", color: "bg-warning/20 text-warning/100" },
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
            return (
              <TableRow key={order.id}>
                <TableCell>{products}</TableCell>
                <TableCell>{formatCurrency(orderTotal)}</TableCell>
                <TableCell>{formatCurrency(tax)}</TableCell>
                <TableCell>{formatCurrency(shipping)}</TableCell>
                <TableCell>{city}</TableCell>
                <TableCell>
                  {staus.map((item) => {
                    if (item.states == status) {
                      return (
                        <span
                          key={item.id}
                          className={`${item.color} text-xs text-success-600 dark:bg-success/500/15 rounded-full px-2 py-0.5 font-medium`}
                        >
                          {status}
                        </span>
                      );
                    }
                  })}
                </TableCell>
                <TableCell>{formatDate(createdAt)}</TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </>
  );
}

export default page;
