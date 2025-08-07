"use client";
// import { DialogTrigger } from "@/components/ui/dialog";
import { startTransition, useActionState } from "react";
import {
  Plus,
  BarChart3,
  UsersRound,
  RefreshCw,
  Settings,
  MoreHorizontal,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Users } from "@prisma/client";
import { getInitials } from "@/utils/format";
import DeleteUser from "./DeletUser";
// import { RoleChangeForm } from "./ChangeRole";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconButton } from "@/components/form/Buttons";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
// import { useRouter } from "next/navigation";
import { ActionChangRole } from "@/utils/Type";
import { ActionRoleChange } from "@/utils/actions";
import { toast } from "sonner";
import { useRouter } from "next/navigation";

const roleColors = {
  admin:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  manager: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  custamar: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
};
const role = [
  {
    id: 1,
    value: "admin",
    color:
      "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  },
  {
    id: 2,
    value: "manager",
    color: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  },
  {
    id: 3,
    value: "custamar",
    color: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
  },
];

export default function UsersTable({ Users }: { Users: Users[] }) {
  const initialState: ActionChangRole = {
    success: false,
    message: "",
  };
  const [state, action] = useActionState(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (prevState: any, formData: FormData) => {
      const role = formData.get("role") as string;
      const userId = formData.get("userId") as string;
      return await ActionRoleChange(userId, role);
    },
    initialState
  );
  const router = useRouter();
  const handleClick = (role: string, userId: string) => {
    const formData = new FormData();
    formData.append("userId", userId);
    formData.append("role", role);
    startTransition(() => {
      action(formData);
    });
    router.refresh();
    toast(state.message);
  };
  console.log(state);

  return (
    <Card className="w-full">
      <CardHeader>
        <div className="flex items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <UsersRound className="h-6 w-6 text-black dark:text-white" />
            Users Management
            <Badge variant="secondary" className="ml-2 animate-pulse">
              <BarChart3 className="h-3 w-3 mr-1" />
              {Users.length} Users
            </Badge>
          </CardTitle>
          <div className="flex items-center gap-2">
            <Button size="sm" className="flex items-center gap-2  ">
              <Plus className="h-4 w-4" />
              <Link href="/dashbord/users/create" className="capitalize w-full">
                Create Users
              </Link>
            </Button>
          </div>
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead>User</TableHead>
              <TableHead>Role</TableHead>
              <TableHead>Department</TableHead>
              <TableHead>Join Date</TableHead>
              <TableHead>City</TableHead>
              <TableHead>Orders</TableHead>
              <TableHead className="w-12">Action</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {Users.length === 0 ? (
              <TableRow>
                <TableCell colSpan={7} className="text-center py-8">
                  <div className="flex flex-col items-center gap-2">
                    <p className="text-muted-foreground">No users found</p>
                  </div>
                </TableCell>
              </TableRow>
            ) : (
              Users.map((user) => (
                <TableRow key={user.id}>
                  <TableCell>
                    <div className="flex items-center gap-3">
                      <Avatar className="h-8 w-8">
                        <AvatarImage
                          src={user.image || "/placeholder.svg"}
                          alt={"cvrv"}
                        />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs">
                          {getInitials(user?.name + "")}
                        </AvatarFallback>
                      </Avatar>
                      <div>
                        <div className="font-medium">{user.name}</div>
                        <div className="text-sm text-muted-foreground">
                          {user.email}
                        </div>
                      </div>
                    </div>
                  </TableCell>
                  <TableCell>
                    <Badge
                      variant="secondary"
                      className={roleColors[user.role]}
                    >
                      {user.role}
                    </Badge>
                  </TableCell>
                  <TableCell>{user.bio || "-"}</TableCell>
                  <TableCell>{user.createdAt.toLocaleDateString()}</TableCell>
                  <TableCell>{user.city}</TableCell>
                  <TableCell>${user.}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-center gap-1">
                      <Link href={`/dashbord/users/${user.id}/edit`}>
                        <IconButton actionType="edit" />
                      </Link>
                      <DeleteUser userId={user.id} />{" "}
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
                          <DropdownMenuSeparator />
                          <DropdownMenuLabel className="flex items-center gap-2">
                            <RefreshCw className="h-4 w-4" />
                            Change Status
                          </DropdownMenuLabel>
                          {/* <OrderStatusDropdown
                              orderId={order.id}
                              sttus={order.status}
                            /> */}
                          <DropdownMenuSeparator />
                          {role.map((s) => {
                            return (
                              <div key={s.id}>
                                <DropdownMenuItem
                                  disabled={user.role === s.value}
                                  onClick={() => handleClick(s.value, user.id)}
                                >
                                  {/* <StatusIcon className="mr-2 h-4 w-4" /> */}
                                  {s.value.charAt(0).toUpperCase() +
                                    s.value.slice(1)}
                                </DropdownMenuItem>
                              </div>
                            );
                          })}
                          <DropdownMenuSeparator />
                        </DropdownMenuContent>
                      </DropdownMenu>
                      {/* <Dialog>
                        <DialogTrigger asChild>
                          <Button
                            size="icon"
                            variant="link"
                            className="p-2 cursor-pointer"
                          >
                            <Shield className="mr-2 h-4 w-4" />
                          </Button>
                        </DialogTrigger>
                        <DialogContent>
                          <DialogHeader>
                            <DialogTitle>Change User Role</DialogTitle>
                            <DialogDescription>
                              Update the role for {user.name}.
                            </DialogDescription>
                          </DialogHeader>
                          <RoleChangeForm user={user} onSuccess={closeDialog} />
                        </DialogContent>
                      </Dialog> */}
                    </div>
                  </TableCell>
                </TableRow>
              ))
            )}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  );
}
