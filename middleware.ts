import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function middleware(request: NextRequest) {
  // Get the pathname of the request
  const path = request.nextUrl.pathname

  // Get the auth token from cookies
  const authToken = request.cookies.get('auth-token')?.value
  const isAuthPath = path === '/login'

  // Define protected routes
  const isProtectedRoute = path.includes('/dashboard')

  // If no auth token and trying to access protected routes
  if (!authToken && isProtectedRoute) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  // If authenticated and trying to access auth pages
  if (authToken && isAuthPath) {
    return NextResponse.redirect(new URL('/dashboard', request.url))
  }

  return NextResponse.next()
}

export const config = {
  matcher: ['/dashboard/:path*', '/login']
} 