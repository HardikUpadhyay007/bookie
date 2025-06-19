// import { NextResponse } from "next/server";
// import { PrismaClient } from "@prisma/client";

// const prisma = new PrismaClient();

// export async function GET() {
//     try {
//         const books = await prisma.book.findMany();
//         return NextResponse.json(books);
//     } catch {
//         return NextResponse.json(
//             { error: "Database connection failed." },
//             { status: 500 }
//         );
//     }
// }

// export async function POST(req: Request) {
//     try {
//         const body = await req.json();
//         const { adminEmail, adminPassword, books } = body;

//         // Admin Auth Check
//         if (
//             adminEmail !== process.env.ADMIN_EMAIL ||
//             adminPassword !== process.env.ADMIN_PASSWORD
//         ) {
//             return NextResponse.json(
//                 { error: "Unauthorized" },
//                 { status: 401 }
//             );
//         }

//         // Accept single or multiple books
//         if (Array.isArray(books)) {
//             await prisma.book.createMany({ data: books });
//         } else if (books) {
//             await prisma.book.create({ data: books });
//         } else {
//             return NextResponse.json(
//                 { error: "No book data provided." },
//                 { status: 400 }
//             );
//         }

//         return NextResponse.json({ success: true });
//     } catch {
//         return NextResponse.json(
//             { error: "Failed to add book(s) or connect to database." },
//             { status: 500 }
//         );
//     }
// }
import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// Hardcoded admin credentials (for demo only)
const ADMIN_EMAIL = "admin@example.com";
const ADMIN_PASSWORD = "pass";

export async function GET() {
    try {
        const books = await prisma.book.findMany();
        return NextResponse.json(books);
    } catch (e) {
        console.error(e);
        return NextResponse.json(
            { error: "Database connection failed." },
            { status: 500 }
        );
    }
}

export async function POST(req: Request) {
    try {
        const body = await req.json();
        const { adminEmail, adminPassword, books } = body;

        // Hardcoded admin check
        if (adminEmail !== ADMIN_EMAIL || adminPassword !== ADMIN_PASSWORD) {
            return NextResponse.json(
                { error: "Unauthorized" },
                { status: 401 }
            );
        }

        if (Array.isArray(books)) {
            await prisma.book.createMany({ data: books });
        } else if (books) {
            await prisma.book.create({ data: books });
        } else {
            return NextResponse.json(
                { error: "No book data provided." },
                { status: 400 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (e) {
        return NextResponse.json(
            { error: "Failed to add book(s) or connect to database." },
            { status: 500 }
        );
    }
}
