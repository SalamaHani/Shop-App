import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import { links } from "@/utils/links";
import LoginBouttn from "./LoginBouttn";
import LogoutBoutton from "./LogoutBoutton";
import UserIcon from "./UserIcon";
import { getUserFromSession } from "@/lib/Auth";
import { cookies } from "next/headers";
async function LinksDropdown() {
  const user = await getUserFromSession(await cookies());
  if (user == null)
    return (
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button variant="outline" className="flex gap-4 max-w-[100px]">
            <LuAlignLeft className="w-6 h-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
          <DropdownMenuItem>
            <Link href="/auth/login" className="capitalize w-full">
              Log in
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/auth/register" className="capitalize w-full">
              Register
            </Link>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    );
  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button variant="outline" className="flex gap-4 max-w-[100px]">
          <LuAlignLeft className="w-6 h-6" />
          <UserIcon />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-40" align="start" sideOffset={10}>
        <DropdownMenuSeparator />
        {links.map((link) => {
          return (
            <DropdownMenuItem key={link.href}>
              <Link href={link.href} className="capitalize w-full">
                {link.label}
              </Link>
            </DropdownMenuItem>
          );
        })}
        <DropdownMenuSeparator />
        <LoginBouttn />
        <LogoutBoutton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
export default LinksDropdown;
