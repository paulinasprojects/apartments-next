"use client";

import { signOut } from "next-auth/react"
import { Button } from "../ui/button"

export const SignOutButton = () => {
  return (
    <Button
      onClick={() => signOut({ callbackUrl: "/" })}
      className="bg-[#427b02]"
  >
    Log out
  </Button>
  )
}
