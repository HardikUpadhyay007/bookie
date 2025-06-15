"use client";
import { useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

const posts = [
    {
        id: 1,
        title: "The Art of War",
        date: "June 1, 2025",
        excerpt:
            "A comprehensive guide to mastering React.js, from fundamentals to advanced component patterns.",
        imageUrl:
            "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781626860605/the-art-of-war-9781626860605_hr.jpg",
        href: "#",
        author: "Sun Tzu",
        downloadUrl: "#",
    },
    {
        id: 2,
        title: "The Alchemist",
        date: "May 20, 2025",
        excerpt:
            "Build beautiful, responsive UIs with Tailwind CSS. Includes real-world projects and tips.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1654371463i/18144590.jpg",
        href: "#",
        author: "Paulo Coelho",
        downloadUrl: "#",
    },
    {
        id: 3,
        title: "The Da Vinci Code",
        date: "April 15, 2025",
        excerpt:
            "Unlock the power of TypeScript with advanced typing, generics, and practical patterns.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/S/compressed.photo.goodreads.com/books/1597798677i/55019161.jpg",
        href: "#",
        author: "Dan Brown",
        downloadUrl: "#",
    },
    {
        id: 4,
        title: "Angels and Demons",
        date: "March 10, 2025",
        excerpt:
            "A hands-on guide to building production-ready apps with Next.js, SSR, and API routes.",
        imageUrl:
            "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9780593653960/angels-and-demons-9780593653960_hr.jpg",
        href: "#",
        author: "Dan Brown",
        downloadUrl: "#",
    },
];

function BookModal({
    book,
    open,
    onClose,
}: {
    book: (typeof posts)[0] | null;
    open: boolean;
    onClose: () => void;
}) {
    if (!open || !book) return null;
    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/70 backdrop-blur-sm">
            <div className="relative bg-neutral-900 rounded-2xl shadow-2xl max-w-lg w-full mx-4 p-6 text-white">
                <button
                    onClick={onClose}
                    className="absolute top-4 right-4 text-white/60 hover:text-white text-2xl font-bold"
                    aria-label="Close"
                >
                    ×
                </button>
                <div className="flex flex-col sm:flex-row gap-6">
                    <Image
                        src={book.imageUrl}
                        alt={book.title}
                        width={160}
                        height={224}
                        className="w-40 h-56 object-cover rounded-xl border-2 border-neutral-800 shadow-md mx-auto sm:mx-0"
                    />
                    <div className="flex-1 flex flex-col justify-between">
                        <div>
                            <h2 className="text-2xl font-bold mb-2">
                                {book.title}
                            </h2>
                            <div className="text-sm text-white/60 mb-2">
                                by{" "}
                                <span className="font-semibold">
                                    {book.author || "Unknown Author"}
                                </span>
                            </div>
                            <p className="text-white/80 mb-4">{book.excerpt}</p>
                        </div>
                        <div className="flex flex-col gap-2 mt-4">
                            <a
                                href={book.downloadUrl || "#"}
                                download
                                className="inline-flex items-center justify-center gap-2 rounded-full bg-white/10 hover:bg-white/20 text-white px-5 py-2 text-sm font-semibold shadow transition-colors border border-white/20 backdrop-blur"
                            >
                                <Download className="size-4" />
                                Download Book
                            </a>
                            <span className="text-xs text-white/40">
                                Published: {book.date}
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default function LatestBooks() {
    const [selectedBook, setSelectedBook] = useState<null | (typeof posts)[0]>(
        null
    );

    return (
        <section className="w-full py-12 lg:py-20 bg-neutral-950 text-white flex items-center">
            <div className="mx-auto w-full max-w-7xl px-6">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between">
                    <div className="mx-auto max-w-xl text-center sm:text-left">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">
                            Latest Books
                        </h2>
                        <p className="mt-3 text-lg text-white/70">
                            Discover our newest arrivals and top picks for every
                            reader.
                        </p>
                    </div>
                    <a
                        href="/browse"
                        className="mt-6 sm:mt-0 inline-flex items-center gap-2 rounded-full bg-white/10 backdrop-blur-md px-6 py-2 text-sm font-semibold text-white shadow hover:bg-white/20 transition-colors border border-white/20"
                    >
                        Browse More Books <ArrowRight className="size-4" />
                    </a>
                </div>
                <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                    {posts.map((post) => (
                        <div
                            key={post.id}
                            className="flex flex-col items-center bg-neutral-900 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
                            onClick={() => setSelectedBook(post)}
                        >
                            <div className="w-full flex justify-center">
                                <Image
                                    src={post.imageUrl}
                                    alt={post.title}
                                    width={160}
                                    height={224}
                                    className="aspect-[3/4] w-40 rounded-xl object-cover object-center border-2 border-neutral-800 shadow-md group-hover:scale-105 transition-transform"
                                />
                            </div>
                            <div className="mt-6 flex-1 w-full text-center">
                                <div className="text-xs font-medium text-white/50">
                                    {post.date}
                                </div>
                                <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">
                                    {post.title}
                                </h3>
                                <p className="mt-2 line-clamp-2 text-sm text-white/70">
                                    {post.excerpt}
                                </p>
                            </div>
                            <button
                                className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-white hover:text-white transition-colors"
                                onClick={(e) => {
                                    e.stopPropagation();
                                    setSelectedBook(post);
                                }}
                            >
                                View Details <ArrowRight className="size-4" />
                            </button>
                        </div>
                    ))}
                </div>
            </div>
            <BookModal
                book={selectedBook}
                open={!!selectedBook}
                onClose={() => setSelectedBook(null)}
            />
        </section>
    );
}
