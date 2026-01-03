import { NextResponse } from 'next/server'
import type { NextRequest } from 'next/server'

export function proxy(request: NextRequest) {
    const path = request.nextUrl.pathname

    // Define public paths that don't require authentication
    const isPublicPath = path === '/login' || path === '/register'

    // Get the token from the cookies
    const token = request.cookies.get('auth_token')?.value || ''

    // Logic:
    // 1. If user is trying to access a protected route (not public) and isn't logged in -> Redirect to Login
    if (!isPublicPath && !token) {
        return NextResponse.redirect(new URL('/login', request.url))
    }

    // 2. If user is already logged in and tries to access login/register OR root -> Redirect to Dashboard
    if ((path === '/login' || path === '/register' || path === '/') && token) {
        return NextResponse.redirect(new URL('/dashboard', request.url))
    }
}

// Ensure proxy doesn't run on static files or API routes unless needed
export const config = {
    matcher: [
        /*
         * Match all request paths except for the ones starting with:
         * - api (API routes)
         * - _next/static (static files)
         * - _next/image (image optimization files)
         * - favicon.ico (favicon file)
         */
        '/((?!api|_next/static|_next/image|favicon.ico).*)',
    ],
}
