"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { Button } from "@/components/ui/button";

interface Props {
  children: React.ReactNode;
}

const AuthLayout = ({ children }: Props) => {
  const pathname = usePathname();
  const isLoginPage = pathname === "/login";

  return (
    <main className="bg-neutral-100 min-h-screen">
      <div className="mx-auto max-w-screen-2xl p-4">
        <nav className="flex justify-between items-center">
          <Image
            src="/logo.png"
            alt="logo"
            width={152}
            height={56}
          />
          <Button className="bg-white text-black hover:bg-[#427b02] hover:text-white transition-colors duration-500"
            asChild
          >
            <Link href={isLoginPage ? "/register" : "/login"}>
              {isLoginPage ? "Register" : "Login"}
            </Link>
          </Button>
        </nav>
        <div className="flex flex-col items-center justify-center pt-4 md:pt-7">{children}</div>
      </div>
    </main>
  )
}

export default AuthLayout