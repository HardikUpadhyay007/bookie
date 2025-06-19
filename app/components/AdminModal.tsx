"use client";

import { useState } from "react";

export default function AdminModal({ onClose }: { onClose: () => void }) {
    const [adminEmail, setAdminEmail] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [booksJson, setBooksJson] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        let books;
        try {
            books = JSON.parse(booksJson);
        } catch {
            setMessage("Invalid JSON for books.");
            return;
        }
        const res = await fetch("/api/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                adminEmail,
                adminPassword,
                books,
            }),
        });
        const data = await res.json();
        if (res.ok) {
            setMessage("Books added successfully!");
        } else {
            setMessage(data.error || "Failed to add books.");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80">
            <div className="bg-neutral-900 p-8 rounded-xl shadow-2xl w-full max-w-md relative flex flex-col">
                <button
                    className="absolute top-2 right-4 text-2xl text-white/60 hover:text-white"
                    onClick={onClose}
                    aria-label="Close"
                >
                    ×
                </button>
                <h2 className="text-xl font-bold mb-4 text-white text-center">
                    Admin Book Upload
                </h2>
                <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                    <input
                        type="email"
                        placeholder="Admin Email"
                        value={adminEmail}
                        onChange={(e) => setAdminEmail(e.target.value)}
                        className="p-2 rounded bg-neutral-800 text-white"
                        required
                    />
                    <input
                        type="password"
                        placeholder="Admin Password"
                        value={adminPassword}
                        onChange={(e) => setAdminPassword(e.target.value)}
                        className="p-2 rounded bg-neutral-800 text-white"
                        required
                    />
                    <textarea
                        placeholder="Paste books JSON array here"
                        value={booksJson}
                        onChange={(e) => setBooksJson(e.target.value)}
                        className="p-2 rounded bg-neutral-800 text-white h-32"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
                    >
                        Upload Books
                    </button>
                </form>
                {message && (
                    <div className="mt-4 text-center text-white">{message}</div>
                )}
            </div>
        </div>
    );
}
