import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
  DropdownMenuSeparator,
  DropdownMenuSubTrigger,
  DropdownMenuSub,
  DropdownMenuPortal,
  DropdownMenuSubContent,
} from "@/components/ui/dropdown-menu";
import { LuAlignLeft } from "react-icons/lu";
import Link from "next/link";
import { Button } from "../ui/button";
import { DashbordLink, links } from "@/utils/links";
import UserIcon from "./UserIcon";
import { getUserFromSession } from "@/lib/auth";
import { cookies } from "next/headers";
import LoginBouttn from "./LoginBouttn";
import LogoutBoutton from "./LogoutBoutton";
export async function LinksDropdown() {
  const user = await getUserFromSession(await cookies());
  const roles = user?.role;
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
            <Link href="/login" className="capitalize w-full">
              Log in
            </Link>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <Link href="/register" className="capitalize w-full">
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
        {links.map((link) => {
          if (link.label === "dashbord" && roles == "custamar") return null;
          return (
            <div key={link.href}>
              {link.label === "dashbord" ? (
                <DropdownMenuSub>
                  <DropdownMenuSubTrigger key={link.href}>
                    <Link href={link.href} className="capitalize w-full">
                      {link.label}
                    </Link>
                  </DropdownMenuSubTrigger>
                  <DropdownMenuPortal>
                    <DropdownMenuSubContent>
                      {DashbordLink.map((item) => {
                        return (
                          <DropdownMenuItem key={item.href}>
                            <Link
                              href={item.href}
                              className="capitalize w-full"
                            >
                              {item.label}
                            </Link>
                          </DropdownMenuItem>
                        );
                      })}
                    </DropdownMenuSubContent>
                  </DropdownMenuPortal>
                </DropdownMenuSub>
              ) : (
                <DropdownMenuItem key={link.href}>
                  <Link href={link.href} className="capitalize w-full">
                    {link.label}
                  </Link>
                </DropdownMenuItem>
              )}
            </div>
          );
        })}
        <DropdownMenuSeparator />
        <LoginBouttn />
        <LogoutBoutton />
      </DropdownMenuContent>
    </DropdownMenu>
  );
}
