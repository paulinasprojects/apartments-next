import Link from "next/link"
import Image from "next/image"
import getCurrentUser from "@/actions/get-current-user"
import { MenuIcon } from "lucide-react";
import { SignOutButton } from "./sign-out-button";
export const Navbar = async () => {
  const currentUser = await getCurrentUser();

  return (
    <nav className="flex items-center justify-between md:px-7 max-sm:px-3 py-2 border-b shadown-sm">
      <p className="flex items-center gap-4 text-[.875rem]">
        <MenuIcon className="cursor-pointer size-5"/>
        Menu
      </p>
        <Image
          src="/logo.png"
          alt="logo"
          width={152}
          height={39}
        />
      <div className="">
        {currentUser ? (
          currentUser.role === "RENTER" ? (
            <div className="flex items-center gap-4">
              <p>Properties</p>
              <SignOutButton />
            </div>
          ) : currentUser.role === "MANAGER" ? (
            <div className="flex items-center gap-4">
              <Link href="/manage" className="text-[.875rem] hover:text-[#284a01]">Manage Properties</Link>
              <SignOutButton />
            </div>
          ) : null
        ) : (
          <div className="flex items-center gap-4">
            <Link href="/register" className="text-[.875rem] hover:text-[#284a01]">Sign up</Link>
            <p>/</p>
            <Link href="/login" className="text-[.875rem] hover:text-[#284a01]">Sign in</Link>
          </div>
        )}
      </div>
    </nav>
  )
}
