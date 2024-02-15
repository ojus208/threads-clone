import { NextResponse } from 'next/server'
 

export function middleware(request) {
    const path = request.nextUrl.pathname
    if (path == '/login' || path == '/signup'){
      if (request.cookies.has("token")){
        return NextResponse.redirect(new URL('/', request.url)) 
      }

    }
    else{
      if (!request.cookies.has("token")){
        return NextResponse.redirect(new URL('/login', request.url))
      }
    }
  
}
 

export const config = {
  matcher: [
      '/',
      '/login',
      '/signup',
      '/search',  
      '/activity',  
      '/profile/:path*'
  ]

}