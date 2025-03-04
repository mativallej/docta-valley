// import { NextResponse } from 'next/server';
// import { NextRequestWithAuth, withAuth } from 'next-auth/middleware';

// export default withAuth(
//   function middleware(request: NextRequestWithAuth) {
//     // If the token is present, proceed to the requested route
//     if (request.nextauth.token) {
//       return NextResponse.next();
//     }

//     // If no token, redirect to sign-in page
//     const signinUrl = new URL('/signin', request.url);
//     signinUrl.searchParams.set('callbackUrl', request.url);
//     return NextResponse.redirect(signinUrl);
//   },
//   {
//     callbacks: {
//       authorized: ({ token }) => {
//         // Ensure token is truthy to authorize the request
//         return !!token;
//       },
//     },
//   },
// );

// export const config = {
//   matcher: ['/app/:path*'], // Apply the middleware to these paths
// };
import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'

export async function middleware(request: NextRequest) {
  return await updateSession(request)
}

export const config = {
  matcher: [
    '/app/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)'
  ],

  // matcher: [
  //   /*
  //    * Match all request paths except for the ones starting with:
  //    * - _next/static (static files)
  //    * - _next/image (image optimization files)
  //    * - favicon.ico (favicon file)
  //    * Feel free to modify this pattern to include more paths.
  //    */
  //   '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  // ],
}