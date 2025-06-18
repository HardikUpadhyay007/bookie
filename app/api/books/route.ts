import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function GET() {
    try {
        const books = await prisma.book.findMany();
        return NextResponse.json(books);
    } catch {
        return NextResponse.json(
            { error: "Database connection failed." },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        if (Array.isArray(body)) {
            await prisma.book.createMany({ data: body });
        } else {
            await prisma.book.create({ data: body });
        }
        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Failed to add book(s) or connect to database." },
            { status: 500 }
        );
    }
}
