import { Button } from "@/components/ui/button";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
} from "@/components/ui/select";
import { updateUserRole } from "@/utils/actions";
import { Users } from "@prisma/client";
import { SelectValue } from "@radix-ui/react-select";
import { useActionState } from "react";

export function RoleChangeForm({
  user,
  onSuccess,
}: {
  user: Users;
  onSuccess: () => void;
}) {
  const [state, formAction, isPending] = useActionState(
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    async (prevState: any, formData: FormData) => {
      const newRole = formData.get("role") as string;
      const result = await updateUserRole(user.id , newRole);
      if (result.success) {
        onSuccess();
      }
      return result;
    },
    null
  );

  return (
    <form action={formAction} className="space-y-4">
      <div>
        <Label htmlFor="role">New Role</Label>
        <Select name="role" defaultValue={user.role}>
          <SelectTrigger>
            <SelectValue />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="admin">Admin</SelectItem>
            <SelectItem value="manager">Manager</SelectItem>
            <SelectItem value="custamar">Custamar</SelectItem>
          </SelectContent>
        </Select>
      </div>
      {state?.message && (
        <p
          className={`text-sm ${
            state.success ? "text-green-600" : "text-red-600"
          }`}
        >
          {state.message}
        </p>
      )}
      <Button type="submit" disabled={isPending} className="w-full">
        {isPending ? "Updating..." : "Update Role"}
      </Button>
    </form>
  );
}
