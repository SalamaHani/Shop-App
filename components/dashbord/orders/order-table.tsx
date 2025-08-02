"use client";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
// import { Input } from "@/components/ui/input";
import {
  MoreHorizontal,
  Truck,
  Package,
  Clock,
  CheckCircle,
  MapPin,
  Calendar,
  DollarSign,
  User,
  Mail,
  Phone,
  Home,
  ShoppingBag,
  Hash,
  RefreshCw,
  Plus,
  Trash2,
  BarChart3,
  Settings,
  Receipt,
  ShoppingCart,
  Box,
  Target,
  Globe,
  Send,
  CheckCircle2,
  Ban,
} from "lucide-react";
import { Order } from "@prisma/client";
import { formatDate } from "@/utils/format";
import { ActionChangSutst } from "@/utils/Type";
import { startTransition, useActionState } from "react";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { handleStatusChange } from "@/utils/actions";
import { useRouter } from "next/navigation";

const status = [
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

const getStatusConfig = (statusName: string) => {
  return status.find((s) => s.states === statusName) || status[3];
};

export function OrdersTable({ orders }: { orders: Order[] }) {
  const getInitials = (name: string) => {
    return name
      .split(" ")
      .map((n) => n[0])
      .join("")
      .toUpperCase();
  };
  const initialState: ActionChangSutst = {
    success: false,
    message: "",
  };
  // const [state, action] = useActionState(handleStatusChange, initialState);
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
  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <ShoppingCart className="h-6 w-6 text-black dark:text-white" />
            Orders Management
          </CardTitle>
          <div className="flex items-center gap-2">
            <Badge variant="secondary" className="ml-2 animate-pulse">
              <BarChart3 className="h-3 w-3 mr-1" />
              {/* {filteredOrders.length} orders */}
            </Badge>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        {state?.message && (
          <Alert
            className="mb-5"
            variant={state?.success ? "default" : "destructive"}
          >
            {state?.success ? <CheckCircle2 className="h-4 w-4" /> : <Ban />}
            <AlertDescription>{state.message}</AlertDescription>
          </Alert>
        )}
        {/* Filters */}
        {/* <div className="flex items-center gap-4 mb-6">
          <div className="relative flex-1 max-w-sm">
            <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 h-4 w-4 text-gray-400" />
            <Input
              placeholder="Search orders, customers..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="pl-10"
            />
          </div>

          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button
                variant="outline"
                className="flex items-center gap-2 bg-transparent"
              >
                <Filter className="h-4 w-4" />
                Status: {statusFilter === "all" ? "All" : statusFilter}
                <ChevronDown className="h-3 w-3" />
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="flex items-center gap-2">
                <Settings className="h-4 w-4" />
                Filter by Status
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem onClick={() => setStatusFilter("all")}>
                <Globe className="mr-2 h-4 w-4" />
                All Orders
              </DropdownMenuItem>
              {status.map((s) => {
                const StatusIcon = s.icon;
                return (
                  <DropdownMenuItem
                    key={s.id}
                    onClick={() => setStatusFilter(s.states)}
                  >
                    <StatusIcon className="mr-2 h-4 w-4" />
                    {s.states.charAt(0).toUpperCase() + s.states.slice(1)}
                  </DropdownMenuItem>
                );
              })}
            </DropdownMenuContent>
          </DropdownMenu>

          <Button
            variant="outline"
            className="flex items-center gap-2 bg-transparent"
          >
            <Calendar className="h-4 w-4" />
            Date Range
          </Button>
        </div> */}

        {/* Stats Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-6">
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-blue-100 dark:bg-blue-900 rounded-lg">
                <ShoppingBag className="h-5 w-5 text-blue-600 dark:text-blue-400" />
              </div>
              <div>
                <div className="text-2xl font-bold">
                  {/* {filteredOrders.length} */}
                </div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Total Orders
                </div>
              </div>
            </div>
          </Card>

          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-green-100 dark:bg-green-900 rounded-lg">
                <CheckCircle className="h-5 w-5 text-green-600 dark:text-green-400" />
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Delivered
                </div>
              </div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-yellow-100 dark:bg-yellow-900 rounded-lg">
                <Clock className="h-5 w-5 text-yellow-600 dark:text-yellow-400" />
              </div>
              <div></div>
            </div>
          </Card>
          <Card className="p-4">
            <div className="flex items-center gap-3">
              <div className="p-2 bg-purple-100 dark:bg-purple-900 rounded-lg">
                <DollarSign className="h-5 w-5 text-purple-600 dark:text-purple-400" />
              </div>
              <div>
                <div className="text-sm text-gray-600 dark:text-gray-400">
                  Total Revenue
                </div>
              </div>
            </div>
          </Card>
        </div>
        {/* Table */}
        <div className="rounded-md border">
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 p-0 h-auto font-medium hover:bg-transparent"
                  >
                    <Hash className="h-4 w-4" />
                    Order
                  </Button>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 p-0 h-auto font-medium hover:bg-transparent"
                  >
                    <User className="h-4 w-4" />
                    Customer
                  </Button>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    <Target className="h-4 w-4" />
                    Status
                  </div>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 p-0 h-auto font-medium hover:bg-transparent"
                  >
                    <Calendar className="h-4 w-4" />
                    Date
                  </Button>
                </TableHead>
                <TableHead>
                  <div className="flex items-center gap-1">
                    <Home className="h-4 w-4" />
                    Address
                  </div>
                </TableHead>
                <TableHead>
                  <Button
                    variant="ghost"
                    className="flex items-center gap-1 p-0 h-auto font-medium hover:bg-transparent"
                  >
                    <DollarSign className="h-4 w-4" />
                    Total
                  </Button>
                </TableHead>
                <TableHead className="text-right">
                  <div className="flex items-center justify-end gap-1">
                    <Settings className="h-4 w-4" />
                    Actions
                  </div>
                </TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {orders.map((order, index) => {
                const statusConfig = getStatusConfig(order.status);
                const StatusIcon = statusConfig.icon;
                return (
                  <TableRow
                    key={order.id}
                    className="hover:bg-gray-50 dark:hover:bg-gray-800 transition-colors animate-in fade-in duration-300"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <TableCell className="font-medium">
                      <div className="flex items-center gap-2">
                        <div className="p-1 bg-gray-100 dark:bg-gray-800 rounded">
                          <Receipt className="h-3 w-3 text-gray-600 dark:text-gray-400" />
                        </div>
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-gray-100 flex items-center gap-1">
                            {order.orderNumbar}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <Box className="h-3 w-3" />
                            {order.products} item
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage
                            src={order.name || "/placeholder.svg"}
                            alt={order.name}
                          />
                          <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs">
                            {getInitials(order.name)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium text-gray-900 dark:text-gray-100 flex items-center gap-1">
                            <User className="h-3 w-3" />
                            {order.name}
                          </div>
                          <div className="text-sm text-gray-500 dark:text-gray-400 flex items-center gap-1">
                            <Mail className="h-3 w-3" />
                            {order.email}
                          </div>
                          {order.phone && (
                            <div className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1">
                              <Phone className="h-3 w-3" />
                              {order.phone}
                            </div>
                          )}
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>
                      <Badge
                        className={`${statusConfig.color} flex items-center gap-1 w-fit`}
                      >
                        <StatusIcon className="h-3 w-3" />
                        {order.status.charAt(0).toUpperCase() +
                          order.status.slice(1)}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1 text-sm">
                        <Calendar className="h-3 w-3 text-gray-400" />
                        <div>
                          <div className="font-medium">
                            {formatDate(order.createdAt)}
                          </div>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell>
                      <div className="flex items-start gap-1 text-sm">
                        <MapPin className="h-3 w-3 text-gray-400 mt-0.5 flex-shrink-0" />
                        <div className="min-w-0">
                          <div className="font-medium truncate flex items-center gap-1">
                            <Home className="h-3 w-3" />
                            {order.city}
                          </div>
                          <div className="text-xs text-gray-500 dark:text-gray-400 truncate flex items-center gap-1">
                            <Globe className="h-3 w-3" />
                            {order.city}, {order.streetAddress} {order.tax}
                          </div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center justify-center">
                        <div>
                          <div className="font-semibold text-gray-900 dark:text-gray-100">
                            ${order.orderTotal}
                          </div>
                        </div>
                      </div>
                    </TableCell>

                    <TableCell className="text-right">
                      <div className="flex items-center justify-center">
                        <DropdownMenu>
                          <DropdownMenuTrigger asChild>
                            <Button
                              variant="ghost"
                              className="h-8 w-8 p-0 hover:scale-110 transition-transform"
                            >
                              <MoreHorizontal className="h-4 w-4" />
                            </Button>
                          </DropdownMenuTrigger>
                          <DropdownMenuContent align="end">
                            <DropdownMenuLabel className="flex items-center gap-2">
                              <Settings className="h-4 w-4" />
                              Actions
                            </DropdownMenuLabel>
                            <DropdownMenuSeparator />
                            {/* <DropdownMenuItem>
                              <Eye className="mr-2 h-4 w-4" />
                              View Details
                            </DropdownMenuItem> */}
                            {/* <DropdownMenuItem>
                              <Edit className="mr-2 h-4 w-4" />
                              Edit Order
                            </DropdownMenuItem> */}
                            {/* <DropdownMenuItem>
                              <Copy className="mr-2 h-4 w-4" />
                              Duplicate
                            </DropdownMenuItem> */}
                            {/* <DropdownMenuItem>
                              <Printer className="mr-2 h-4 w-4" />
                              Print Invoice
                            </DropdownMenuItem> */}
                            <DropdownMenuItem>
                              <Send className="mr-2 h-4 w-4" />
                              Send Email
                            </DropdownMenuItem>
                            <DropdownMenuSeparator />
                            <DropdownMenuLabel className="flex items-center gap-2">
                              <RefreshCw className="h-4 w-4" />
                              Change Status
                            </DropdownMenuLabel>
                            {status.map((s) => {
                              const StatusIcon = s.icon;
                              return (
                                <div key={s.id}>
                                  <DropdownMenuItem
                                    disabled={order.status === s.states}
                                    onClick={() =>
                                      handleClick(s.states, order.id)
                                    }
                                  >
                                    <StatusIcon className="mr-2 h-4 w-4" />
                                    {s.states.charAt(0).toUpperCase() +
                                      s.states.slice(1)}
                                  </DropdownMenuItem>
                                </div>
                              );
                            })}
                            <DropdownMenuSeparator />
                            <DropdownMenuItem className="text-red-600 dark:text-red-400">
                              <Trash2 className="mr-2 h-4 w-4" />
                              Delete Order
                            </DropdownMenuItem>
                          </DropdownMenuContent>
                        </DropdownMenu>
                      </div>
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </div>

        {orders.length === 0 && (
          <div className="text-center py-8">
            <div className="flex flex-col items-center gap-4">
              <div className="p-4 bg-gray-100 dark:bg-gray-800 rounded-full">
                <ShoppingCart className="h-12 w-12 text-gray-400" />
              </div>
              <div>
                <p className="text-gray-600 dark:text-gray-400 font-medium">
                  No orders found
                </p>
                <p className="text-sm text-gray-500 dark:text-gray-500">
                  Try adjusting your search or filter criteria
                </p>
              </div>
              <Button className="flex items-center gap-2">
                <Plus className="h-4 w-4" />
                Create New Order
              </Button>
            </div>
          </div>
        )}
      </CardContent>
    </Card>
  );
}
