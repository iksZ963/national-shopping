import { NextResponse } from "next/server";

export async function POST(req: Request) {
    return NextResponse.redirect(new URL('/fail', req.url), 303)
}
