// import React from "react";
// import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
// import {
//   TableCell,
//   TableRow,
// } from "@/components/ui/table";
// // import { Input } from "@/components/ui/input";
// import {
//   MoreHorizontal,
//   MapPin,
//   Calendar,
//   User,
//   Mail,
//   Phone,
//   Home,
//   RefreshCw,
//   Settings,
//   Receipt,
//   Box,
//   Globe,
//   Send,
//   Eye,
//   Clock,
//   Package,
//   Truck,
//   CheckCircle,
// } from "lucide-react";
// import { Order } from "@prisma/client";
// import { Badge } from "@/components/ui/badge";
// import { formatDate } from "@/utils/format";
// import { Button } from "@/components/ui/button";
// import Deletorder from "./Deletorder";
// import OrderStatusDropdown from "./StatusOrders";
//     const status = [
//   {
//     id: 1,
//     states: "delivered",
//     color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
//     icon: CheckCircle,
//     description: "Order successfully delivered",
//   },
//   {
//     id: 2,
//     states: "shipped",
//     color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
//     icon: Truck,
//     description: "Order is in transit",
//   },
//   {
//     id: 3,
//     states: "processing",
//     color:
//       "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-300",
//     icon: Package,
//     description: "Order is being prepared",
//   },
//   {
//     id: 4,
//     states: "pending",
//     color: "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-300",
//     icon: Clock,
//     description: "Order awaiting confirmation",
//   },
// ];
// const getStatusConfig = (statusName: string) => {
//   return status.find((s) => s.states === statusName) || status[3];
// };
// function BodyTable({orders}:{orders:Order[]}) {
//   const getInitials = (name: string) => {
//     return name
//       .split(" ")
//       .map((n) => n[0])
//       .join("")
//       .toUpperCase();
//   };
//   return (
//     <div>
//       {orders.map((order, index) => {
//         const statusConfig = getStatusConfig(order.status);
//         const StatusIcon = statusConfig.icon;
//         return (
//           <TableRow
//             key={order.id}
//             className=" transition-colors animate-in fade-in duration-300"
//             style={{ animationDelay: `${index * 100}ms` }}
//           >
//             <TableCell className="font-medium">
//               <div className="flex items-center gap-2">
//                 <div className="p-1 bg-gray-100 dark:bg-gray-800 rounded">
//                   <Receipt className="h-3 w-3 text-gray-600 dark:text-gray-400" />
//                 </div>
//                 <div>
//                   <div className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-1">
//                     {order.orderNumbar}
//                   </div>
//                   <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
//                     <Box className="h-3 w-3" />
//                     {order.products} item
//                   </div>
//                 </div>
//               </div>
//             </TableCell>
//             <TableCell>
//               <div className="flex items-center gap-3">
//                 <Avatar className="h-8 w-8">
//                   <AvatarImage
//                     src={order.name || "/placeholder.svg"}
//                     alt={order.name}
//                   />
//                   <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs">
//                     {getInitials(order.name)}
//                   </AvatarFallback>
//                 </Avatar>
//                 <div>
//                   <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-1">
//                     <User className="h-3 w-3" />
//                     {order.name}
//                   </div>
//                   <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
//                     <Mail className="h-3 w-3" />
//                     {order.email}
//                   </div>
//                   {order.phone && (
//                     <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
//                       <Phone className="h-3 w-3" />
//                       {order.phone}
//                     </div>
//                   )}
//                 </div>
//               </div>
//             </TableCell>
//             <TableCell>
//               <Badge
//                 className={`${statusConfig.color} flex items-center gap-1 w-fit`}
//               >
//                 <StatusIcon className="h-3 w-3" />
//                 {order.status.charAt(0).toUpperCase() + order.status.slice(1)}
//               </Badge>
//             </TableCell>
//             <TableCell>
//               <div className="flex items-center gap-1 text-sm">
//                 <Calendar className="h-3 w-3 text-gray-400" />
//                 <div>
//                   <div className="font-medium">
//                     {formatDate(order.createdAt)}
//                   </div>
//                 </div>
//               </div>
//             </TableCell>

//             <TableCell>
//               <div className="flex items-start gap-1 text-sm">
//                 <MapPin className="h-3 w-3 text-gray-400 mt-0.5 flex-shrink-0" />
//                 <div className="min-w-0">
//                   <div className="font-medium truncate flex items-center gap-1">
//                     <Home className="h-3 w-3" />
//                     {order.city}
//                   </div>
//                   <div className="text-xs text-gray-500 dark:text-gray-400 truncate flex items-center gap-1">
//                     <Globe className="h-3 w-3" />
//                     {order.city}, {order.streetAddress} {order.tax}
//                   </div>
//                 </div>
//               </div>
//             </TableCell>
//             <TableCell>
//               <div className="flex items-center justify-center">
//                 <div>
//                   <div className="font-semibold text-gray-900 dark:text-gray-100">
//                     ${order.orderTotal}
//                   </div>
//                 </div>
//               </div>
//             </TableCell>

//             <TableCell className="text-right">
//               <div className="flex items-center justify-center gap-1">
//                 <Button
//                   variant="ghost"
//                   size="sm"
//                   className="h-8 w-8 p-0 hover:scale-110 transition-transform"
//                 >
//                   <Eye className="h-4 w-4" />
//                 </Button>
//                 <Deletorder orderId={order.id} />
//                 <DropdownMenu>
//                   <DropdownMenuTrigger asChild>
//                     <Button
//                       variant="ghost"
//                       className="h-8 w-8 p-0 hover:scale-110 transition-transform"
//                     >
//                       <MoreHorizontal className="h-4 w-4" />
//                     </Button>
//                   </DropdownMenuTrigger>
//                   <DropdownMenuContent align="end">
//                     <DropdownMenuLabel className="flex items-center gap-2">
//                       <Settings className="h-4 w-4" />
//                       Actions
//                     </DropdownMenuLabel>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuItem>
//                       <Send className="mr-2 h-4 w-4" />
//                       Send Email
//                     </DropdownMenuItem>
//                     <DropdownMenuSeparator />
//                     <DropdownMenuLabel className="flex items-center gap-2">
//                       <RefreshCw className="h-4 w-4" />
//                       Change Status
//                     </DropdownMenuLabel>
//                     <OrderStatusDropdown
//                       orderId={order.id}
//                       sttus={order.status}
//                     />
//                   </DropdownMenuContent>
//                 </DropdownMenu>
//               </div>
//             </TableCell>
//           </TableRow>
//         );
//       })}
//     </div>
//   );
// }

// export default BodyTable;
