import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export default function middleware(req: NextRequest) {
  const accessToken = req.cookies.get("accessToken")?.value;
  const { pathname } = req.nextUrl;

  console.log("Middleware running...");
  console.log("Access Token:", accessToken);
  console.log("Path Name:", pathname);

  const isProtected = pathname.startsWith("/main");
  const isLoginPage = pathname === "/login";

  if (isProtected && !accessToken) {
    const url = req.nextUrl.clone();
    url.pathname = "/login";
    return NextResponse.redirect(url);
  }

  if (isLoginPage && accessToken) {
    const url = req.nextUrl.clone();
    url.pathname = "/main";
    return NextResponse.redirect(url);
  }

  return NextResponse.next();
}

export const config = {
  matcher: ["/main/:path*", "/main", "/login"]
};
