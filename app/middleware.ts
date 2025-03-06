import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Get the token from the cookies
  const isGuest = request.cookies.get('isGuest')?.value
  const isAuthPath = path === '/login'

  // If the user is not authenticated and trying to access protected routes
  if (!isGuest && path.includes('/dashboard')) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // If the user is authenticated and trying to access auth pages
  if (isGuest && isAuthPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login']
} 