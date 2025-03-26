import { NextRequest, NextResponse } from 'next/server';
import * as jwt from 'jsonwebtoken';
import { Role } from '@ecommerce/shared';

export function middleware(request: NextRequest) {
  const token = request.cookies.get('token')?.value;
  const { pathname } = request.nextUrl;

  if (!token) {
    if (pathname.startsWith('/admin')) {
      return NextResponse.redirect(new URL('/client', request.url));
    }
    return NextResponse.next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET || 'your_jwt_secret') as { userId: number; role: Role };
    const userRole = decoded.role;

    if (pathname.startsWith('/admin')) {
      if (userRole !== Role.ADMIN && userRole !== Role.EMPLOYEE) {
        return NextResponse.redirect(new URL('/client', request.url));
      }
    }

    if (pathname.startsWith('/client')) {
      if (userRole === Role.ADMIN || userRole === Role.EMPLOYEE) {
        return NextResponse.redirect(new URL('/admin', request.url));
      }
    }

    return NextResponse.next();
  } catch (error) {
    return NextResponse.redirect(new URL('/client', request.url));
  }
}

export const config = {
  matcher: ['/admin/:path*', '/client/:path*'],
};