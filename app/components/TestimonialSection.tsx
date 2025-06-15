import Image from "next/image";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Star } from "lucide-react";

const testimonials = [
    {
        id: 1,
        quote: "This UI kit has completely transformed the way I build interfaces. Everything is fast, accessible, and beautifully designed.",
        name: "Michael Craig",
        role: "Frontend Developer",
        avatarUrl: "https://untitledui.com/images/avatars/rayhan-zua",
    },
    {
        id: 2,
        quote: "We were able to ship our MVP 3x faster thanks to the built-in components and documentation. Highly recommended!",
        name: "Sophia Turner",
        role: "Product Designer",
        avatarUrl: "https://untitledui.com/images/avatars/freya-browning",
    },
    {
        id: 3,
        quote: "From day one, the developer experience has been smooth. Great patterns, excellent performance, and top-notch support.",
        name: "James Miller",
        role: "Software Engineer",
        avatarUrl: "https://untitledui.com/images/avatars/franklin-mays",
    },
];

export default function TestimonialSection() {
    return (
        <section
            className="py-16 lg:py-32 text-white relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(to bottom, rgba(23,23,23,0.93), rgba(23,23,23,0.97)), url('https://images.unsplash.com/photo-1536965764833-5971e0abed7c?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D') center/cover no-repeat",
                backgroundBlendMode: "multiply",
            }}
        >
            <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-7xl">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-3xl/tight font-semibold tracking-tight sm:text-4xl/tight text-white">
                        What Users Say
                    </h2>
                    <p className="text-muted-foreground mt-4 text-base/7 sm:text-lg/8 text-neutral-300">
                        Aliquet adipiscing lectus praesent cras sed quis lectus
                        egestas.
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
