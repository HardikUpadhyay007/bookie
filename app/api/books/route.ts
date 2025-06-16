import { NextResponse } from "next/server";
import { MongoClient } from "mongodb";

const uri = process.env.MONGODB_URI!;
const options = {};

let client: MongoClient;
let clientPromise: Promise<MongoClient>;

declare global {
    // eslint-disable-next-line no-var
    var _mongoClientPromise: Promise<MongoClient> | undefined;
    var _dbConnected: boolean | undefined;
}

if (!process.env.MONGODB_URI) {
    throw new Error("Please add your Mongo URI to .env.local");
}

if (process.env.NODE_ENV === "development") {
    // In development, use a global variable so that the value
    // is preserved across module reloads caused by HMR (Hot Module Replacement).
    if (!global._mongoClientPromise) {
        client = new MongoClient(uri, options);
        global._mongoClientPromise = client.connect();
    }
    clientPromise = global._mongoClientPromise;
} else {
    // In production, it's best to not use a global variable.
    client = new MongoClient(uri, options);
    clientPromise = client.connect();
}

async function connectToDatabase() {
    const client = await clientPromise;
    // Check if the client is connected
    if (!client || !client.topology || !client.topology.isConnected()) {
        throw new Error("Failed to connect to MongoDB database.");
    }
    // Log only once per process
    if (!(global as any)._dbConnected) {
        console.log("✅ Connected to MongoDB database");
        global._dbConnected = true;
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
    } catch (e) {
        return NextResponse.json(
            { error: "Failed to add book(s) or connect to database." },
            { status: 500 }
        );
    }
}

// You can also add PUT, DELETE for admin functionality
