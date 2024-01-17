export { default } from "next-auth/middleware"

export const config = {
  matcher: ["/overview", "/users", "/mint", "/history", "/settings",
    "/users/:path*", "/settings/:path*"
    // '/((?!api|_next/static|_next/image|favicon.ico).*)',
  ],
}



// import { NextResponse, type NextRequest } from "next/server";

// const PUBLIC_FILE = /\.(.*)$/;

// export function middleware(req: NextRequest) {
//   const { pathname } = req.nextUrl;
//   console.log("Middleware", { pathname });

//   if (
//     pathname.startsWith("/_next") || // exclude Next.js internals
//     pathname.startsWith("/api") || //  exclude all API routes
//     pathname.startsWith("/static") || // exclude static files
//     PUBLIC_FILE.test(pathname) || // exclude all files in the public folder
//     pathname.startsWith("/") ||
//     pathname.startsWith("/password") ||
//     pathname.startsWith("/password/reset")
//   )
//     return NextResponse.next();

//   // do something else
//   return NextResponse.next();
// }