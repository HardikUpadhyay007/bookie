"use client";

import { useState } from "react";

export default function AdminModal({ onClose }: { onClose: () => void }) {
    const [adminEmail, setAdminEmail] = useState("");
    const [adminPassword, setAdminPassword] = useState("");
    const [title, setTitle] = useState("");
    const [author, setAuthor] = useState("");
    const [date, setDate] = useState("");
    const [excerpt, setExcerpt] = useState("");
    const [imageUrl, setImageUrl] = useState("");
    const [downloadUrl, setDownloadUrl] = useState("");
    const [message, setMessage] = useState("");

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        const book = {
            title,
            author,
            date,
            excerpt,
            imageUrl,
            downloadUrl,
        };

        const res = await fetch("/api/books", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
                adminEmail,
                adminPassword,
                books: book, // Single book object
            }),
        });

        const data = await res.json();
        if (res.ok) {
            setMessage("Book added successfully!");
            // Clear form
            setTitle("");
            setAuthor("");
            setDate("");
            setExcerpt("");
            setImageUrl("");
            setDownloadUrl("");
        } else {
            setMessage(data.error || "Failed to add book.");
        }
    };

    return (
        <div className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80">
            <div className="bg-neutral-900 p-8 rounded-xl shadow-2xl w-full max-w-lg relative flex flex-col max-h-[90vh] overflow-y-auto">
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
                    <input
                        type="text"
                        placeholder="Book Title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        className="p-2 rounded bg-neutral-800 text-white"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Author Name"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        className="p-2 rounded bg-neutral-800 text-white"
                        required
                    />
                    <input
                        type="text"
                        placeholder="Publication Year"
                        value={date}
                        onChange={(e) => setDate(e.target.value)}
                        className="p-2 rounded bg-neutral-800 text-white"
                        required
                    />
                    <textarea
                        placeholder="Book Excerpt/Description"
                        value={excerpt}
                        onChange={(e) => setExcerpt(e.target.value)}
                        className="p-2 rounded bg-neutral-800 text-white h-24"
                        required
                    />
                    <input
                        type="url"
                        placeholder="Image URL"
                        value={imageUrl}
                        onChange={(e) => setImageUrl(e.target.value)}
                        className="p-2 rounded bg-neutral-800 text-white"
                        required
                    />
                    <input
                        type="url"
                        placeholder="Download URL"
                        value={downloadUrl}
                        onChange={(e) => setDownloadUrl(e.target.value)}
                        className="p-2 rounded bg-neutral-800 text-white"
                        required
                    />
                    <button
                        type="submit"
                        className="bg-primary text-white px-4 py-2 rounded hover:bg-primary/80"
                    >
                        Add Book
                    </button>
                </form>
                {message && (
                    <div className="mt-4 text-center text-white">{message}</div>
                )}
            </div>
        </div>
    );
}
