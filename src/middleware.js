import { NextRequest, NextResponse } from "next/server";

export { default } from "next-auth/middleware";

//Define the route that you wish to protect
export const config = { matcher: ["/todo-list", "/todo-board"] };

export function middleware(request) {
  // Add a new header x-current-path which passes the path to downstream components
  const headers = new Headers(request.headers);
  headers.set("x-current-path", request.nextUrl.pathname);
  return NextResponse.next({ headers });
}
