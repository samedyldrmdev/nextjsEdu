import { NextResponse } from "next/server";
import bcrypt from "bcrypt"
const { sql } = require('@vercel/postgres');
export async function GET(request:Request) {
    const users = await sql`SELECT * FROM users;`
    const transformer = users?.rows.map((user: any) => ({
        name: user?.name,
        email: user?.email
    }))
    return NextResponse.json(transformer, {status: 200})
}

export async function POST(request: Request){
    const res = await request.json()
    const hashedPassword = await bcrypt.hash(res.password, 10);
    const user = await sql`
    INSERT INTO users (id, name, email, password)
    VALUES (${res.id}, ${res.name}, ${res.email}, ${hashedPassword})
    ON CONFLICT (id) DO NOTHING;
  `;
    return NextResponse.json(user)
}