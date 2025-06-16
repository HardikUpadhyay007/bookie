import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        quote: "Bookie has made discovering new books so easy! The recommendations are spot on and the community is so welcoming.",
        name: "Michael Craig",
        role: "Avid Reader",
        avatarUrl: "https://untitledui.com/images/avatars/rayhan-zua",
    },
    {
        id: 2,
        quote: "I love being able to track my reading progress and share reviews with friends. Bookie is my go-to book platform.",
        name: "Sophia Turner",
        role: "Book Club Organizer",
        avatarUrl: "https://untitledui.com/images/avatars/freya-browning",
    },
    {
        id: 3,
        quote: "The selection of books is fantastic and the interface is beautiful. Bookie has reignited my passion for reading.",
        name: "James Miller",
        role: "Literature Student",
        avatarUrl: "https://untitledui.com/images/avatars/franklin-mays",
    },
];

export default function TestimonialSection() {
    return (
        <section
            className="py-16 lg:py-32 text-white relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(to bottom, rgba(23,23,23,0.93), rgba(23,23,23,0.97)), url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D') center/cover no-repeat",
                backgroundBlendMode: "multiply",
            }}
        >
            <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-7xl">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-3xl/tight font-semibold tracking-tight sm:text-4xl/tight text-white">
                        What Book Lovers Say
                    </h2>
                    <p className="text-muted-foreground mt-4 text-base/7 sm:text-lg/8 text-neutral-300">
                        Hear from our readers and community members about their
                        Bookie experience.
                    </p>
                </div>
                <div className="mt-12 grid gap-8 lg:grid-cols-3">
                    {testimonials.map((testimonial) => (
                        <Card
                            key={testimonial.id}
                            className="flex flex-col bg-neutral-900/90 border-none shadow-lg"
                        >
                            <CardContent className="flex-1">
                                <div className="flex gap-2">
                                    {[...Array(5)].map((_, i) => (
                                        <Star
                                            key={i}
                                            className="size-4 fill-amber-400 text-amber-400"
                                        />
                                    ))}
                                </div>
                                <p className="text-neutral-300 mt-4 text-sm/6">
                                    {testimonial.quote}
                                </p>
                            </CardContent>
                            <CardFooter>
                                <div className="flex items-center gap-4">
                                    <Image
                                        className="size-10 rounded-full"
                                        src={testimonial.avatarUrl}
                                        alt={testimonial.name}
                                        width={40}
                                        height={40}
                                    />
                                    <div className="flex flex-col gap-0.5">
                                        <span className="text-sm font-medium text-white">
                                            {testimonial.name}
                                        </span>
                                        <span className="text-neutral-400 text-xs">
                                            {testimonial.role}
                                        </span>
                                    </div>
                                </div>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
