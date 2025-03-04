import { NextResponse, type NextRequest } from "next/server"

async function GET(request: NextRequest){
    return NextResponse.json({
        status: 200,
        message: "Welcome to the API"
    })
}

export { GET }