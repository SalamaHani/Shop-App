"use client";
import { DialogTrigger } from "@/components/ui/dialog";
import { useState } from "react";
import { Shield, Plus, BarChart3, UsersRound } from "lucide-react";
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
// import {
//   DropdownMenu,
//   DropdownMenuContent,
//   DropdownMenuItem,
//   DropdownMenuLabel,
//   DropdownMenuSeparator,
//   DropdownMenuTrigger,
// } from "@/components/ui/dropdown-menu";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Users } from "@prisma/client";
import { getInitials } from "@/utils/format";
import DeleteUser from "./DeletUser";
import { RoleChangeForm } from "./ChangeRole";

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { IconButton } from "@/components/form/Buttons";
import Link from "next/link";

const roleColors = {
  admin:
    "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-300",
  manager: "bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-300",
  user: "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-300",
};

// function CreateUserForm({ onSuccess }: { onSuccess: () => void }) {
//   const [state, formAction, isPending] = useActionState(async (prevState: any, formData: FormData) => {
//     const result = await createUser(formData)
//     if (result.success) {
//       onSuccess()
//     }
//     return result
//   }, null)

//   return (
//     <form action={formAction} className="space-y-4">
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <Label htmlFor="name">Name *</Label>
//           <Input id="name" name="name" required />
//         </div>
//         <div>
//           <Label htmlFor="email">Email *</Label>
//           <Input id="email" name="email" type="email" required />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <Label htmlFor="role">Role *</Label>
//           <Select name="role" required>
//             <SelectTrigger>
//               <SelectValue placeholder="Select role" />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="admin">Admin</SelectItem>
//               <SelectItem value="manager">Manager</SelectItem>
//               <SelectItem value="user">User</SelectItem>
//               <SelectItem value="guest">Guest</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div>
//           <Label htmlFor="department">Department</Label>
//           <Input id="department" name="department" />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <Label htmlFor="phone">Phone</Label>
//           <Input id="phone" name="phone" />
//         </div>
//         <div>
//           <Label htmlFor="location">Location</Label>
//           <Input id="location" name="location" />
//         </div>
//       </div>
//       {state?.message && (
//         <p className={`text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
//       )}
//       <Button type="submit" disabled={isPending} className="w-full">
//         {isPending ? "Creating..." : "Create User"}
//       </Button>
//     </form>
//   )
// }

// function EditUserForm({ user, onSuccess }: { user: User; onSuccess: () => void }) {
//   const [state, formAction, isPending] = useActionState(async (prevState: any, formData: FormData) => {
//     const result = await updateUser(user.id, formData)
//     if (result.success) {
//       onSuccess()
//     }
//     return result
//   }, null)

//   return (
//     <form action={formAction} className="space-y-4">
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <Label htmlFor="name">Name *</Label>
//           <Input id="name" name="name" defaultValue={user.name} required />
//         </div>
//         <div>
//           <Label htmlFor="email">Email *</Label>
//           <Input id="email" name="email" type="email" defaultValue={user.email} required />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <Label htmlFor="role">Role *</Label>
//           <Select name="role" defaultValue={user.role} required>
//             <SelectTrigger>
//               <SelectValue />
//             </SelectTrigger>
//             <SelectContent>
//               <SelectItem value="admin">Admin</SelectItem>
//               <SelectItem value="manager">Manager</SelectItem>
//               <SelectItem value="user">User</SelectItem>
//               <SelectItem value="guest">Guest</SelectItem>
//             </SelectContent>
//           </Select>
//         </div>
//         <div>
//           <Label htmlFor="department">Department</Label>
//           <Input id="department" name="department" defaultValue={user.department || ""} />
//         </div>
//       </div>
//       <div className="grid grid-cols-2 gap-4">
//         <div>
//           <Label htmlFor="phone">Phone</Label>
//           <Input id="phone" name="phone" defaultValue={user.phone || ""} />
//         </div>
//         <div>
//           <Label htmlFor="location">Location</Label>
//           <Input id="location" name="location" defaultValue={user.location || ""} />
//         </div>
//       </div>
//       {state?.message && (
//         <p className={`text-sm ${state.success ? "text-green-600" : "text-red-600"}`}>{state.message}</p>
//       )}
//       <Button type="submit" disabled={isPending} className="w-full">
//         {isPending ? "Updating..." : "Update User"}
//       </Button>
//     </form>
//   )
// }

export default function UsersTable({ Users }: { Users: Users[] }) {
  const [dialogOpen, setDialogOpen] = useState(false);
  console.log(dialogOpen);
  //   const filteredUsers = mockUsers.filter((user) => {
  //     const matchesSearch =
  //       user.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       user.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
  //       user.department?.toLowerCase().includes(searchTerm.toLowerCase())
  //     const matchesRole = roleFilter === "all" || user.role === roleFilter

  //     return matchesSearch && matchesRole
  //   })

  const closeDialog = () => {
    setDialogOpen(false);
  };

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
              <Link href="/dashbord/users/cerat" className="capitalize w-full">
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
              <TableHead>Orders</TableHead>
              <TableHead>Total Spent</TableHead>
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
                          alt={user.name}
                        />
                        <AvatarFallback className="bg-gradient-to-r from-blue-500 to-purple-600 text-white text-xs">
                          {getInitials(user.name)}
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
                  <TableCell>{user.phone}</TableCell>
                  <TableCell>${user.city}</TableCell>
                  <TableCell className="text-right">
                    <div className="flex items-center justify-center gap-1">
                      <Link href={`/dashbord/users/${user.id}/edit`}>
                        <IconButton actionType="edit" />
                      </Link>
                      <DeleteUser userId={user.id} />
                      <Dialog>
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
                      </Dialog>
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
