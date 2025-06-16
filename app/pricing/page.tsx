import { Button } from "@/components/ui/button";
import {
    Card,
    CardContent,
    CardDescription,
    CardFooter,
    CardHeader,
    CardTitle,
} from "@/components/ui/card";

interface Plan {
    id: string;
    title: string;
    description: string;
    price: number;
    features: string[];
    href: string;
}

const plans: Plan[] = [
    {
        id: "reader",
        title: "Reader",
        description:
            "Perfect for casual readers who want access to our growing library.",
        price: 0,
        features: [
            "Browse and search thousands of books",
            "Read community reviews",
            "Personal bookshelf",
            "Basic recommendations",
            "Access on all devices",
        ],
        href: "#",
    },
    {
        id: "plus",
        title: "Bookie Plus",
        description:
            "For passionate readers who want more features and exclusive content.",
        price: 9,
        features: [
            "Everything in Reader",
            "Unlimited reading history",
            "Early access to new releases",
            "Advanced recommendations",
            "Priority support",
        ],
        href: "#",
    },
    {
        id: "club",
        title: "Book Club",
        description:
            "Best for book clubs and groups who want to read and discuss together.",
        price: 19,
        features: [
            "Everything in Plus",
            "Create and manage book clubs",
            "Group reading progress",
            "Private club discussions",
            "Monthly club picks",
        ],
        href: "#",
    },
];

export default function PricingSection() {
    return (
        <section
            className="min-h-screen py-16 lg:py-32 relative overflow-hidden flex items-center"
            style={{
                background:
                    "linear-gradient(to bottom, rgba(23,23,23,0.93), rgba(23,23,23,0.97)), url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1500&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D') center/cover no-repeat",
                backgroundBlendMode: "multiply",
            }}
        >
            <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1500&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center opacity-60" />
            <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-7xl">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl text-white">
                        Flexible Pricing for Every Book Lover
                    </h2>
                    <p className="mt-4 text-base sm:text-lg text-neutral-200">
                        Whether you’re a casual reader or a club organizer,
                        Bookie has a plan for you. Start for free or unlock more
                        with Bookie Plus and Book Club.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid gap-8 lg:grid-cols-3">
                    {plans.map((plan: Plan) => (
                        <Card
                            key={plan.id}
                            className={`sm:px-6 sm:!py-12 bg-neutral-900/90 border-none shadow-xl text-white flex flex-col ${
                                plan.id === "plus"
                                    ? "ring-2 ring-primary scale-105 z-10"
                                    : ""
                            }`}
                        >
                            <CardHeader>
                                <CardTitle className="text-xl font-semibold">
                                    {plan.title}
                                </CardTitle>
                                <CardDescription className="text-neutral-300">
                                    {plan.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1 flex flex-col items-center">
                                <div className="mb-4">
                                    <span className="text-4xl font-bold sm:text-5xl">
                                        {plan.price === 0
                                            ? "Free"
                                            : `$${plan.price}`}
                                    </span>
                                    {plan.price !== 0 && (
                                        <span className="text-muted-foreground ml-1">
                                            / month
                                        </span>
                                    )}
                                </div>
                                <ul className="mt-2 space-y-4 text-sm w-full">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="text-neutral-300 flex items-center"
                                        >
                                            <svg
                                                className="mr-3 h-4 w-4 text-green-400 flex-shrink-0"
                                                fill="none"
                                                viewBox="0 0 24 24"
                                                stroke="currentColor"
                                            >
                                                <path
                                                    strokeLinecap="round"
                                                    strokeLinejoin="round"
                                                    strokeWidth={2}
                                                    d="M5 13l4 4L19 7"
                                                />
                                            </svg>
                                            <span>{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </CardContent>
                            <CardFooter>
                                <Button
                                    size="lg"
                                    className={`w-full ${
                                        plan.id === "plus"
                                            ? "bg-primary text-white hover:bg-primary/90"
                                            : "bg-white/10 text-white hover:bg-white/20"
                                    }`}
                                    asChild
                                >
                                    <a href={plan.href}>
                                        {plan.price === 0
                                            ? "Get Started"
                                            : `Choose ${plan.title}`}
                                    </a>
                                </Button>
                            </CardFooter>
                        </Card>
                    ))}
                </div>
            </div>
        </section>
    );
}
