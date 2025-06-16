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
        id: "starter",
        title: "Starter",
        description: "For hobby projects and personal websites",
        price: 12,
        features: [
            "Basic components",
            "Use in 1 project",
            "Access to community forum",
            "Detailed documentation",
            "Regular updates",
        ],
        href: "#",
    },
    {
        id: "pro",
        title: "Professional",
        description: "For freelancers and individual developers",
        price: 24,
        features: [
            "Everything in Starter plan",
            "All components + future updates",
            "Use in unlimited projects",
            "Email support",
            "Figma design files",
        ],
        href: "#",
    },
    {
        id: "enterprise",
        title: "Enterprise",
        description: "For growing teams and businesses",
        price: 99,
        features: [
            "Everything in Pro plan",
            "5 team seats included",
            "Team management dashboard",
            "Advanced analytics",
            "Priority email support",
        ],
        href: "#",
    },
];

export default function PricingSection() {
    return (
        <section className="py-16 lg:py-32">
            <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-7xl">
                <div className="mx-auto max-w-xl text-center">
                    <h2 className="text-3xl/tight font-semibold tracking-tight sm:text-4xl/tight">
                        Pricing for every stage
                    </h2>
                    <p className="text-muted-foreground mt-4 text-base/7 sm:text-lg/8">
                        Aliquet adipiscing lectus praesent cras sed quis lectus
                        egestas.
                    </p>
                </div>

                <div className="mx-auto mt-12 grid gap-8 lg:grid-cols-3">
                    {plans.map((plan: Plan) => (
                        <Card key={plan.id} className="sm:px-6 sm:!py-12">
                            <CardHeader>
                                <CardTitle className="text-lg">
                                    {plan.title}
                                </CardTitle>
                                <CardDescription>
                                    {plan.description}
                                </CardDescription>
                            </CardHeader>
                            <CardContent className="flex-1">
                                <div>
                                    <span className="text-4xl font-bold sm:text-5xl">
                                        ${plan.price}
                                    </span>
                                    <span className="text-muted-foreground ml-1">
                                        / month
                                    </span>
                                </div>
                                <ul className="mt-6 space-y-4 text-sm">
                                    {plan.features.map((feature, i) => (
                                        <li
                                            key={i}
                                            className="text-muted-foreground flex items-center"
                                        >
                                            <svg
                                                className="mr-4 h-4 w-4 text-green-700"
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
                                <Button size="lg" className="w-full" asChild>
                                    <a href={plan.href}>
                                        Purchase {plan.title}
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
