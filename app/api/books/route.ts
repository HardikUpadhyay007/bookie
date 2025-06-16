import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

// Extend globalThis to include our custom properties for TypeScript
declare global {
    interface GlobalThis {
        _mongoClientPromise?: Promise<MongoClient>;
        _dbConnected?: boolean;
    }
}

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
    // Use globalThis for custom properties
    if (!globalThis._mongoClientPromise) {
        client = new MongoClient(uri, options);
        globalThis._mongoClientPromise = client.connect();
    }
    clientPromise = globalThis._mongoClientPromise!;
} else {
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

async function connectToDatabase() {
    const client = await clientPromise;
    // Log only once per process
    if (!globalThis._dbConnected) {
        console.log("✅ Connected to MongoDB database");
        globalThis._dbConnected = true;
    }
    return client.db(); // use default DB
}

export async function GET() {
    try {
        const db = await connectToDatabase();
        const books = await db.collection("books").find({}).toArray();
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
        const db = await connectToDatabase();
        const body = await req.json();
        const collection = db.collection("books");

        if (Array.isArray(body)) {
            await collection.insertMany(body);
        } else {
            await collection.insertOne(body);
        }

        return NextResponse.json({ success: true });
    } catch {
        return NextResponse.json(
            { error: "Failed to add book(s) or connect to database." },
            { status: 500 }
        );
    }
}

// You can also add PUT, DELETE for admin functionality
