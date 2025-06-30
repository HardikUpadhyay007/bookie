"use client";
import { useState } from "react";
import { ArrowRight, Download } from "lucide-react";
import Image from "next/image";

const posts = [
    {
        id: 1,
        title: "A Tale of Two Cities",
        date: "1859",
        excerpt:
            "Set during the French Revolution, it explores themes of sacrifice, justice, and resurrection.",
        imageUrl:
            "https://res.cloudinary.com/dtfymz8ko/image/upload/v1750136990/9780451530578_cfw4pk.jpg",
        author: "Charles Dickens",
        downloadUrl:
            "https://bookie-inky.vercel.app/pdfs/a-tale-of-two-cities.pdf",
    },
    {
        id: 2,
        title: "A Christmas Carol",
        date: "19 December 1843",
        excerpt:
            "Published in 1843, this classic has been adapted many times for film, theater, radio, and more. Ebenezer Scrooge is confronted by three spirits at Christmas, who urge him to change his miserly ways.",
        imageUrl:
            "https://res.cloudinary.com/dtfymz8ko/image/upload/v1751256465/63fe527dae944cddd900a2a1_ACC_20-_20Show_20Graphic.opt_kdl2ag.webp",
        href: "#",
        author: "Charles Dickens",
        downloadUrl:
            "https://bookie-inky.vercel.app/pdfs/a-christmas-carol.pdf",
    },
    {
        id: 3,
        title: "Crime and Punishment",
        date: "1867",
        excerpt:
            "Rodion Raskolnikov, an ex-student who plans to murder a pawnbroker to test his theory of personality. Having accomplished the deed, Raskolnikov struggles with mental anguish while trying to both avoid the consequences and hide his guilt from his friends and family. Dostoevsky’s original idea for the novel centered on the Marmeladov family and the impact of alcoholism in Russia, but inspired by a double murder in France he decided to rework it around the new character of Raskolnikov.",
        imageUrl:
            "https://res.cloudinary.com/dtfymz8ko/image/upload/v1751258695/Crimeandpunishmentcover_larqd5.png",
        href: "#",
        author: "Fyodor Dostoevsky",
        downloadUrl:
            "https://bookie-inky.vercel.app/pdfs/crime-and-punishment.pdf",
    },
    {
        id: 4,
        title: "Arsène Lupin Versus Herlock Sholmes",
        date: "1908",
        excerpt:
            "Arsène Lupin takes on his most fearsome opponent yet in this second collection of his larcenous adventures. More a loving homage than a straight copy, Herlock Sholmes (changed just enough to avoid fallout from a copyright claim by Conan Doyle) and his companion Wilson are summoned to France initially to throw light on the case of the Blonde Lady. Having encountered Arsène Lupin before, Sholmes is only too happy to get a chance of revenge. This collection of two stories were originally serialised in the magazine Je Sais Tout from 1906 to 1907, and were translated into English in 1910.",
        imageUrl:
            "https://res.cloudinary.com/dtfymz8ko/image/upload/v1751258187/Ars_C3_A8ne_Lupin_contre_Herlock_Sholm_C3_A8s_zoqbnv.jpg",
        href: "#",
        author: "Maurice Leblanc",
        downloadUrl: "https://bookie-inky.vercel.app/pdfs/lupin.pdf",
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
                        onError={(e) => {
                            (e.target as HTMLImageElement).src =
                                "/fallback.jpg";
                        }}
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
                                    onError={(e) => {
                                        (e.target as HTMLImageElement).src =
                                            "/fallback.jpg";
                                    }}
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
