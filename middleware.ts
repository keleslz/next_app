import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
// import { getIronSession } from "iron-session/edge";
// import { cookieData } from "./libs/type/session-helper";
// import { Routes } from "./libs/type/route";
// import { isUser } from "./libs/type/type-guards";

export async function middleware(req: NextRequest) {
  const res = NextResponse.next();
  // const session = await getIronSession(req, res, cookieData);
  // const unauthenticatedRoutes = [Routes.signin, Routes.signup]
  // const { user } = session;

  // if (!isUser(user) && !unauthenticatedRoutes.map(r => req.url.endsWith(r)).includes(true)) {
  //   session.destroy()
  //   return NextResponse.redirect(new URL(Routes.signin, req.url))
  // }

  // if (user && unauthenticatedRoutes.map(r => req.url.endsWith(r)).includes(true)) {
  //   return NextResponse.redirect(new URL(Routes.home, req.url))
  // } else if (!user && !unauthenticatedRoutes.map(r => req.url.endsWith(r)).includes(true)) {
  //   return NextResponse.redirect(new URL(Routes.signin, req.url))
  // }

  return res
};

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - favicon.ico (favicon file)
     */
    '/((?!api|_next/static|favicon.ico).*)',
  ],
};