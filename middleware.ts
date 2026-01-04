// If you have an auth middleware (e.g. next-auth / custom), export it here.
// Example (commented):
// export { auth as middleware } from "@/auth";

import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: ["/((?!.*\\..*|_next).*)", "/", "/(api|trpc)(.*)"],
};

// Minimal pass-through middleware.
// Next.js requires this file to export a function named `middleware` (or default
// export) that will be executed for matched requests. Replace the body below
// with real auth/redirect logic as needed (Clerk, NextAuth, etc.).
export function middleware(request: NextRequest) {
  // Example: you can inspect request.nextUrl, cookies, headers, etc.
  // For now just continue to the next step in the chain.
  return NextResponse.next();
}

export default middleware;
