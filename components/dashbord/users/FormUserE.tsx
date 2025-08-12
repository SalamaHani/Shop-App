"use client";
import { SubmitButton } from "@/components/form/Buttons";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { ActionUpdaetUser } from "@/utils/actions";
import { ActionCearetUser } from "@/utils/Type";
import { Users } from "@prisma/client";
import { redirect } from "next/navigation";
import { useActionState } from "react";
const initialState: ActionCearetUser = {
  success: false,
  message: "",
};
function FormUserE({ user }: { user: Users }) {
  const [state, action] = useActionState(ActionUpdaetUser, initialState);
  if (state.success) redirect("/dashbord/users");
  return (
    <form action={action} className="space-y-6 mt-10">
      {state?.message && (
        <div
          className={`p-3 rounded-md text-sm ${
            state.success
              ? "bg-green-50 text-green-700 border border-green-200"
              : "bg-red-50 text-red-700 border border-red-200"
          }`}
        >
          {state.message}
        </div>
      )}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Input readOnly name="id" hidden value={user.id} />
          <Label htmlFor="name">
            Name <span className="text-red-500">*</span>
          </Label>
          <Input
            id="name"
            name="name"
            placeholder="Enter full name"
            defaultValue={user.name ?? ""}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="email">
            Email <span className="text-red-500">*</span>
          </Label>
          <Input
            id="email"
            name="email"
            type="email"
            placeholder="Enter email address"
            defaultValue={user.email}
          />
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="space-y-2">
          <Label htmlFor="phone">Phone</Label>
          <Input
            id="phone"
            name="phone"
            type="tel"
            placeholder="+1 (555) 123-4567"
            defaultValue={user?.phone + ""}
          />
        </div>
        <div className="space-y-2">
          <Label htmlFor="city">City</Label>
          <Input
            id="city"
            name="city"
            placeholder="Enter city"
            defaultValue={user.city ?? ""}
          />
        </div>
      </div>

      <div className="space-y-2">
        <Label htmlFor="bio">Bio</Label>
        <Textarea
          id="bio"
          name="bio"
          placeholder="Tell us about yourself..."
          rows={3}
          className="resize-none"
          defaultValue={user.bio ?? ""}
        />
      </div>

      <div className="space-y-2">
        <Label htmlFor="role">
          Role <span className="text-red-500">*</span>
        </Label>
        <Select name="role" required>
          <SelectTrigger>
            <SelectValue
              defaultValue={user?.role ?? ""}
              placeholder="Select a role"
            />
          </SelectTrigger>
          <SelectContent defaultValue={user?.role ?? ""}>
            <SelectItem value="admin">
              <div className="flex flex-col">
                <span className="font-medium">Admin</span>
                <span className="text-xs text-muted-foreground">
                  Full system access
                </span>
              </div>
            </SelectItem>
            <SelectItem value="manager">
              <div className="flex flex-col">
                <span className="font-medium">Manager</span>
                <span className="text-xs text-muted-foreground">
                  Team management access
                </span>
              </div>
            </SelectItem>
            <SelectItem value="custamar">
              <div className="flex flex-col">
                <span className="font-medium">Custmur</span>
                <span className="text-xs text-muted-foreground">
                  Standard Custmur access
                </span>
              </div>
            </SelectItem>
          </SelectContent>
        </Select>
      </div>
      <div className=" flex justify-end">
        <SubmitButton text="Edit User" />
      </div>
    </form>
  );
}

export default FormUserE;
