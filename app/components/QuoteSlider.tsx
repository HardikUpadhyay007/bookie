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
        avatar: "https://images.unsplash.com/flagged/photo-1578001357456-13f18a857b57?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        text: "The best online bookstore I have ever used. Fast delivery, great prices, and a huge selection of books for every taste.",
        name: "Michael Lee",
        role: "Book Collector",
        avatar: "https://images.unsplash.com/flagged/photo-1578001357456-13f18a857b57?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
        text: "I love the community reviews and the ability to track my reading. Bookie is my go-to place for all things books!",
        name: "Sara Kim",
        role: "Book Club Member",
        avatar: "https://images.unsplash.com/flagged/photo-1578001357456-13f18a857b57?q=80&w=2487&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
];

export default function QuoteSlider() {
    const [current, setCurrent] = useState(0);

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrent((prev) => (prev + 1) % quotes.length);
        }, 5000);
        return () => clearInterval(interval);
    }, []);

    return (
        <section className="py-16 lg:py-32 bg-neutral-950">
            <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-7xl">
                <Card className="relative overflow-hidden bg-neutral-900/90 border-none shadow-xl transition-all duration-700">
                    <CardContent>
                        <div className="ml-auto sm:p-6 lg:w-8/12 lg:p-12">
                            <div className="flex gap-2">
                                {[...Array(5)].map((_, i) => (
                                    <Star
                                        key={i}
                                        className="size-4 fill-amber-400 text-amber-400 sm:size-5"
                                    />
                                ))}
                            </div>
                            <p className="mt-4 text-white text-lg font-semibold sm:text-xl md:text-2xl lg:mt-6 lg:text-3xl/snug">
                                {quotes[current].text}
                            </p>
                            <div className="mt-8 flex items-center text-white gap-4">
                                <Image
                                    src={quotes[current].avatar}
                                    className="size-10 rounded-full object-cover object-center lg:absolute lg:inset-y-0 lg:left-0 lg:h-full lg:w-4/12 lg:rounded-none"
                                    alt={quotes[current].name}
                                    width={40}
                                    height={40}
                                />
                                <div className="flex flex-col gap-0.5 lg:gap-1.5">
                                    <span className="text-sm font-semibold lg:text-base">
                                        {quotes[current].name}
                                    </span>
                                    <span className="text-muted-foreground text-xs">
                                        {quotes[current].role}
                                    </span>
                                </div>
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
                                        aria-label={`Go to slide ${idx + 1}`}
                                    />
                                ))}
                            </div>
                        </div>
                    </CardContent>
                </Card>
            </div>
        </section>
    );
}
