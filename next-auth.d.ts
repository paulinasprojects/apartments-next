/* eslint-disable @typescript-eslint/no-unused-vars */
import type { Session, User } from "next-auth";
import type { JWT } from "@auth/core/jwt";
import { UserRole } from "@prisma/client";

declare module "next-auth/jwt" {
  interface JWT {
    id: string;
    role: UserRole;
  }
}

declare module "next-auth" {
  interface Session {
    user: User & {
      id: string;
      role: UserRole;
    };
  }
}
