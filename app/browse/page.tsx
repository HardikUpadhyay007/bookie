"use client";
import { useState } from "react";
import { useSearchParams } from "next/navigation";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

const books = [
    {
        id: 1,
        title: "The Art of War",
        date: "June 1, 2025",
        excerpt:
            "A comprehensive guide to mastering React.js, from fundamentals to advanced component patterns.",
        imageUrl:
            "https://d28hgpri8am2if.cloudfront.net/book_images/onix/cvr9781626860605/the-art-of-war-9781626860605_hr.jpg",
        href: "#",
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
    },
    {
        id: 4,
        title: "Angels and Demons",
        date: "March 10, 2025",
        excerpt:
            "A hands-on guide to building production-ready apps with Next.js, SSR, and API routes.",
        imageUrl:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSn7ZiCC1pXj2nRwMHVM1fhMckGztdhGrUn7w&s",
        href: "#",
    },
    {
        id: 5,
        title: "To Kill a Mockingbird",
        date: "February 5, 2025",
        excerpt:
            "A timeless classic that explores human morality and the roots of prejudice.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81OdwZ9U6PL.jpg",
        href: "#",
    },
    {
        id: 6,
        title: "1984",
        date: "January 15, 2025",
        excerpt:
            "George Orwell's dystopian masterpiece, a chilling prophecy about the future.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71kxa1-0mfL.jpg",
        href: "#",
    },
    {
        id: 7,
        title: "Pride and Prejudice",
        date: "December 20, 2024",
        excerpt:
            "Jane Austen's romantic classic, a witty commentary on society and relationships.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81A-mvlo+QL.jpg",
        href: "#",
    },
    {
        id: 8,
        title: "The Great Gatsby",
        date: "November 10, 2024",
        excerpt:
            "F. Scott Fitzgerald's tale of wealth, love, and the American Dream.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81af+MCATTL.jpg",
        href: "#",
    },
    {
        id: 9,
        title: "Moby Dick",
        date: "October 1, 2024",
        excerpt:
            "Herman Melville's epic tale of obsession and revenge on the high seas.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81prV6wS5QL.jpg",
        href: "#",
    },
    {
        id: 10,
        title: "Brave New World",
        date: "September 15, 2024",
        excerpt:
            "Aldous Huxley's vision of a future society driven by technology and control.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81rttWlZgLL.jpg",
        href: "#",
    },
    {
        id: 11,
        title: "Little Women",
        date: "August 1, 2024",
        excerpt:
            "Louisa May Alcott's beloved story of four sisters growing up during the American Civil War.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81WojUxbbFL.jpg",
        href: "#",
    },
    {
        id: 12,
        title: "The Hobbit",
        date: "July 10, 2024",
        excerpt:
            "J.R.R. Tolkien's classic adventure of Bilbo Baggins and his journey to the Lonely Mountain.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/91b0C2YNSrL.jpg",
        href: "#",
    },
    {
        id: 13,
        title: "Crime and Punishment",
        date: "June 5, 2024",
        excerpt:
            "Fyodor Dostoevsky's psychological drama of guilt, redemption, and morality.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81dQwQlmAXL.jpg",
        href: "#",
    },
    {
        id: 14,
        title: "The Catcher in the Rye",
        date: "May 15, 2024",
        excerpt:
            "J.D. Salinger's coming-of-age novel about teenage alienation and rebellion.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/71Q1Iu4suSL.jpg",
        href: "#",
    },
    {
        id: 15,
        title: "The Lord of the Rings",
        date: "April 1, 2024",
        excerpt:
            "J.R.R. Tolkien's epic fantasy trilogy that changed the world of literature forever.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/91SZSW8qSsL.jpg",
        href: "#",
    },
    {
        id: 16,
        title: "Frankenstein",
        date: "March 10, 2024",
        excerpt:
            "Mary Shelley's gothic masterpiece about creation, ambition, and the dangers of playing God.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81r+LNw1uPL.jpg",
        href: "#",
    },
    {
        id: 17,
        title: "Dracula",
        date: "February 14, 2024",
        excerpt:
            "Bram Stoker's classic horror novel that introduced the world to Count Dracula.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81dQwQlmAXL._AC_UL600_SR600,600_.jpg",
        href: "#",
    },
    {
        id: 18,
        title: "The Odyssey",
        date: "January 5, 2024",
        excerpt:
            "Homer's ancient Greek epic poem chronicling Odysseus's adventurous return home.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81t2CVWEsUL.jpg",
        href: "#",
    },
    {
        id: 19,
        title: "Wuthering Heights",
        date: "December 1, 2023",
        excerpt:
            "Emily Brontë's only novel, a tale of passion and revenge on the Yorkshire moors.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81A-mvlo+QL._AC_UL600_SR600,600_.jpg",
        href: "#",
    },
    {
        id: 20,
        title: "Great Expectations",
        date: "November 10, 2023",
        excerpt:
            "Charles Dickens's story of the orphan Pip and his journey through life and society.",
        imageUrl:
            "https://images-na.ssl-images-amazon.com/images/I/81eA+K8QHPL.jpg",
        href: "#",
    },
];

function BookModal({
    book,
    open,
    onClose,
}: {
    book: (typeof books)[0] | null;
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
                                {/* If you have author info, show here */}
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

export default function BrowsePage() {
    const [page, setPage] = useState(1);
    const [selectedBook, setSelectedBook] = useState<null | (typeof books)[0]>(
        null
    );
    const searchParams = useSearchParams();
    const search = searchParams.get("search") || "";

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
                {search && filteredBooks.length === 0 ? (
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
                                    key={book.id}
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
