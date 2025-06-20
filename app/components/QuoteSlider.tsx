"use client";

import { useState, useEffect } from "react";
import Image from "next/image";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";

const quotes = [
    {
        text: "Bookie makes it so easy to find and buy my next favorite read. The checkout process is smooth and the recommendations are always on point.",
        name: "Darla Craig",
        role: "Verified Buyer",
        avatar: "https://res.cloudinary.com/dtfymz8ko/image/upload/w_120,q_90/v1750393367/premium_photo-1677368597077-009727e906db_bh5rwe.jpg",
    },
    {
        text: "The best online bookstore I have ever used. Fast delivery, great prices, and a huge selection of books for every taste.",
        name: "Michael Lee",
        role: "Book Collector",
        avatar: "https://res.cloudinary.com/dtfymz8ko/image/upload/v1750395264/photo-1724435811349-32d27f4d5806_mjgklc.jpg",
    },
    {
        text: "I love the community reviews and the ability to track my reading. Bookie is my go-to place for all things books!",
        name: "Sarah Johnson",
        role: "Book Club Member",
        avatar: "https://res.cloudinary.com/dtfymz8ko/image/upload/v1750395687/photo-1663893364107-a6ecd06cf615_iuxuo1.jpg",
    },
];

export default function QuoteSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % quotes.length);
        }, 6000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section
            className="py-16 lg:py-32 relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(to bottom, rgba(23,23,23,0.96), rgba(23,23,23,0.98)), url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1500&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D') center/cover no-repeat",
                backgroundBlendMode: "multiply",
            }}
        >
            <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1500&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center opacity-60" />
            <div className="mx-auto w-full max-w-2xl px-4 sm:px-6 lg:max-w-4xl">
                <Card className="relative overflow-hidden bg-neutral-900/90 border-none shadow-xl transition-all duration-700">
                    <CardContent>
                        <div className="flex flex-col sm:flex-row items-center gap-8 p-6 lg:p-12">
                            {/* Bigger Avatar on the left */}
                            <div className="flex-shrink-0 flex flex-col items-center">
                                <Image
                                    src={quotes[current].avatar}
                                    alt={quotes[current].name}
                                    width={160}
                                    height={160}
                                    className="rounded-full object-cover object-center shadow-lg"
                                    quality={90}
                                    priority
                                />
                            </div>
                            {/* Comment and info on the right */}
                            <div className="flex-1 flex flex-col justify-center">
                                <div className="flex gap-1 mb-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="size-4 fill-amber-400 text-amber-400 sm:size-5"
                                        />
                                    ))}
                                </div>
                                <p className="text-white text-lg font-semibold sm:text-xl md:text-2xl lg:text-2xl/snug mb-6">
                                    {quotes[current].text}
                                </p>
                                <div className="flex flex-col gap-0.5">
                                    <span className="text-sm font-semibold text-white">
                                        {quotes[current].name}
                                    </span>
                                    <span className="text-muted-foreground text-xs">
                                        {quotes[current].role}
                                    </span>
                                </div>
                                {/* Dots navigation */}
                                <div className="flex justify-center gap-2 mt-8">
                                    {quotes.map((_, idx) => (
                                        <button
                                            key={idx}
                                            className={`h-2 w-6 rounded-full transition-all duration-300 ${
                                                idx === current
                                                    ? "bg-white"
                                                    : "bg-white/20"
                                            }`}
                                            onClick={() => setCurrent(idx)}
                                            aria-label={`Go to slide ${
                                                idx + 1
                                            }`}
                                        />
                                    ))}
                                </div>
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
