import { getServerAuthSession } from "@/server/auth";
import { Menu } from "lucide-react";
import Link from "next/link";
import { Logo } from "./Logo";
import { UserAccountNav } from "./UserAccountNav";
import { Button } from "./ui/button";

export const Navbar = async () => {
  const session = await getServerAuthSession();

  return (
    <nav className="mt-16 flex items-center justify-center ">
      <div className="fixed top-0 mb-2 h-[60px] w-[100vw] border-b-[1px] border-solid border-b-gray-500 bg-white">
        <div className="flex w-[100vw] max-w-[2000px] items-center justify-between px-8 py-2">
          <div className="hidden md:flex">
            <Logo />
          </div>
          <div className="md:hidden">
            <Menu size={30} className="cursor-pointer" />
          </div>
          <div>
            {session ? (
              <UserAccountNav session={session} />
            ) : (
              <Button variant={"default"} size={"sm"} asChild>
                <Link href={"/sign-in"}>login</Link>
              </Button>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};
