import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';
import { verifyToken } from '@/lib/auth';

export async function middleware(request: NextRequest) {
  const { pathname } = request.nextUrl;
  
  console.log('🔐 Middleware:', pathname);

  // Protect /admin routes (except login page)
  if (pathname.startsWith('/admin') && !pathname.startsWith('/admin/login')) {
    const token = request.cookies.get('session')?.value; // ← ZMIENIONE z 'admin-token'
    console.log('🍪 Cookie session:', token ? 'EXISTS' : 'MISSING');
    
    if (!token) {
      console.log('❌ No token, redirecting to login');
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }

    const user = await verifyToken(token);
    console.log('👤 User verified:', user ? 'YES' : 'NO');
    
    if (!user) {
      console.log('❌ Invalid token, redirecting to login');
      return NextResponse.redirect(new URL('/admin/login', request.url));
    }
    
    console.log('✅ Access granted to', pathname);
  }

  // Redirect from /admin/login if already logged in
  if (pathname === '/admin/login') {
    const token = request.cookies.get('session')?.value; // ← ZMIENIONE z 'admin-token'
    
    if (token) {
      const user = await verifyToken(token);
      if (user) {
        console.log('✅ Already logged in, redirecting to /admin');
        return NextResponse.redirect(new URL('/admin', request.url));
      }
    }
  }

  return NextResponse.next();
}

export const config = {
  matcher: ['/admin/:path*'],
};