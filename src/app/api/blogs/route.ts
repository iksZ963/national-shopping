import { NextRequest, NextResponse } from "next/server"

const GET = async (req: Request, res: Response) => {
    return NextResponse.json({ msg: "Hello world" })
}