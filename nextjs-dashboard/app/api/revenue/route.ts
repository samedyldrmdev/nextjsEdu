import { NextResponse } from "next/server";

const { sql } = require('@vercel/postgres');
export async function GET(request:Request) {
    const revanue = await sql`SELECT * FROM revenue;`
    return NextResponse.json(revanue, {status: 200})
}