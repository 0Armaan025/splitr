import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";


export function middleware(req: NextRequest) {
    // const localStorageToken = localStorage.getItem("token");
    const token = req.cookies.get("token")?.value;


    const {pathname} = req.nextUrl;

    if(pathname.startsWith("/sign-in") || pathname.startsWith("/sign-up")){
        if(token ) {
            
            return NextResponse.redirect(new URL("/dashboard", req.url));
        }
        return NextResponse.next();
    }

    if(pathname.startsWith("/dashboard") || pathname.startsWith('/profile') || pathname.startsWith("/projects")) {
        if(!token ) {
            return NextResponse.redirect(new URL("/sign-in", req.url));
        }
    }

    return NextResponse.next();
}