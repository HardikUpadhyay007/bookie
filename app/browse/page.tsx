"use client";
export const dynamic = "force-dynamic";

import { useState, useEffect, Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

// Remove the hardcoded books array

type Book = {
    id: string | number;
    title: string;
    date: string;
    excerpt: string;
    imageUrl: string;
    href?: string;
    author?: string;
    downloadUrl?: string;
};

function BookModal({
    book,
    open,
    onClose,
}: {
    book: Book | null;
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
                    X
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

const BOOKS_PER_PAGE = 10;

function BrowseContent() {
    const [books, setBooks] = useState<Book[]>([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [selectedBook, setSelectedBook] = useState<null | Book>(null);
    const searchParams = useSearchParams();
    const search = searchParams.get("search") || "";

    useEffect(() => {
        setLoading(true);
        fetch("/api/books")
            .then((res) => res.json())
            .then((data) => {
                setBooks(data);
                setLoading(false);
            })
            .catch(() => setLoading(false));
    }, []);

    // Filter books by search
    const filteredBooks = books.filter(
        (book) =>
            book.title.toLowerCase().includes(search.toLowerCase()) ||
            (book.excerpt &&
                book.excerpt.toLowerCase().includes(search.toLowerCase()))
    );

    const totalPages = Math.ceil(filteredBooks.length / BOOKS_PER_PAGE);
    const startIdx = (page - 1) * BOOKS_PER_PAGE;
    const endIdx = startIdx + BOOKS_PER_PAGE;
    const booksToShow = filteredBooks.slice(startIdx, endIdx);

    return (
        <section className="w-full py-12 lg:py-20 bg-neutral-950 text-white min-h-screen">
            <div className="mx-auto w-full max-w-7xl px-6">
                <h1 className="text-3xl font-bold tracking-tight sm:text-4xl mb-8 text-center">
                    Browse Books
                </h1>
                {loading ? (
                    <div className="flex justify-center items-center py-32">
                        <span className="text-lg text-neutral-400 animate-pulse">
                            Loading books...
                        </span>
                    </div>
                ) : search && filteredBooks.length === 0 ? (
                    <div className="flex flex-col items-center justify-center py-32">
                        <div className="rounded-2xl bg-neutral-900/80 px-8 py-12 shadow-lg border border-neutral-800 flex flex-col items-center">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                className="mb-4 h-12 w-12 text-neutral-500"
                                fill="none"
                                viewBox="0 0 24 24"
                                stroke="currentColor"
                                strokeWidth={1.5}
                            >
                                <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M12 8v4m0 4h.01M21 12c0 4.97-4.03 9-9 9s-9-4.03-9-9 4.03-9 9-9 9 4.03 9 9z"
                                />
                            </svg>
                            <div className="text-2xl font-semibold text-white mb-2">
                                Book not found
                            </div>
                            <div className="text-base text-neutral-400">
                                We couldn&apos;t find any books matching your
                                search.
                            </div>
                        </div>
                    </div>
                ) : (
                    <>
                        <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
                            {booksToShow.map((book) => (
                                <div
                                    key={book._id ?? book.id}
                                    className="flex flex-col items-center bg-neutral-900 rounded-2xl p-4 shadow-lg hover:shadow-2xl transition-shadow group cursor-pointer"
                                    onClick={() => setSelectedBook(book)}
                                >
                                    <div className="w-full flex justify-center">
                                        <Image
                                            src={book.imageUrl}
                                            alt={book.title}
                                            width={160}
                                            height={224}
                                            className="aspect-[3/4] w-40 rounded-xl object-cover object-center border-2 border-neutral-800 shadow-md group-hover:scale-105 transition-transform"
                                        />
                                    </div>
                                    <div className="mt-6 flex-1 w-full text-center">
                                        <div className="text-xs font-medium text-white/50">
                                            {book.date}
                                        </div>
                                        <h3 className="mt-2 text-lg font-semibold tracking-tight text-white">
                                            {book.title}
                                        </h3>
                                        <p className="mt-2 line-clamp-2 text-sm text-white/70">
                                            {book.excerpt}
                                        </p>
                                    </div>
                                    <button
                                        className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-neutral-300 hover:text-white transition-colors"
                                        onClick={(e) => {
                                            e.stopPropagation();
                                            setSelectedBook(book);
                                        }}
                                    >
                                        View Details{" "}
                                        <ArrowRight className="size-4" />
                                    </button>
                                </div>
                            ))}
                        </div>
                        {/* Pagination Controls */}
                        {filteredBooks.length > 0 && (
                            <div className="flex justify-center items-center gap-2 mt-10">
                                <button
                                    onClick={() =>
                                        setPage((p) => Math.max(1, p - 1))
                                    }
                                    disabled={page === 1}
                                    className="px-4 py-2 rounded bg-neutral-800 text-white disabled:opacity-50"
                                >
                                    Previous
                                </button>
                                <span className="mx-2 text-white/80">
                                    Page {page} of {totalPages}
                                </span>
                                <button
                                    onClick={() =>
                                        setPage((p) =>
                                            Math.min(totalPages, p + 1)
                                        )
                                    }
                                    disabled={page === totalPages}
                                    className="px-4 py-2 rounded bg-neutral-800 text-white disabled:opacity-50"
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>
            <BookModal
                book={selectedBook}
                open={!!selectedBook}
                onClose={() => setSelectedBook(null)}
            />
        </section>
    );
}

export default function BrowsePage() {
    return (
        <Suspense>
            <BrowseContent />
        </Suspense>
    );
}
