import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const pathName = req.nextUrl.pathname;

  // Define protected routes and their redirect destinations
  const protectedRoutes: { [key: string]: string } = {
    "/main": "/login",
    "/main/values": "/login",
    "/main/themes": "/login",
    "/main/profile": "/login",
    "/main/affirmations": "/login",
  };

  const redirectUrl = protectedRoutes[pathName];

  if (redirectUrl && !accessToken) {
    const url = req.nextUrl.clone();
    url.pathname = redirectUrl;
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}
