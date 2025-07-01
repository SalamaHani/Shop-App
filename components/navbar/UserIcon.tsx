import { getUserFromSession } from "@/lib/auth";
import { cookies } from "next/headers";
import { LuUserRound } from "react-icons/lu";

async function UserIcon() {
  const user = await getUserFromSession(await cookies());

  if (user !== null)
    return (
      <LuUserRound className="w-6 h-6 bg-primary rounded-full dark:text-black text-white" />
    );
  return null;
}
export default UserIcon;
