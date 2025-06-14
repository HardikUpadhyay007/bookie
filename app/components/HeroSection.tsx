// import Navbar from "./Navbar";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import Link from "next/link";

export default function HeroSection() {
    return (
        <header className="dark min-h-screen w-full relative flex flex-col">
            {/* Background image and overlay */}
            <div className="absolute inset-0 z-0">
                <img
                    className="h-full w-full object-cover object-center"
                    src="https://images.unsplash.com/photo-1738937541345-4407f6fec8e1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                    alt="Hero background"
                />
                <div className="absolute inset-0 bg-background/80"></div>
            </div>
            {/* <Navbar /> */}
            <div className="relative z-10 flex flex-1 items-center justify-center w-full">
                <div className="mx-auto w-full max-w-2xl px-6 lg:max-w-4xl">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-extrabold text-balance text-white drop-shadow-lg sm:text-6xl lg:text-7xl">
                            Discover, Read, and Share Your Next Favorite Book
                        </h1>
                        <p className="mx-auto mt-6 max-w-xl text-lg text-white/90 sm:text-xl drop-shadow">
                            Welcome to Bookie – your digital library and reading
                            community. Explore bestsellers, hidden gems, and
                            timeless classics. Connect with fellow readers,
                            track your progress, and find your next great read.
                        </p>
                        <div className="mx-auto mt-10 flex flex-col gap-4 sm:flex-row sm:justify-center">
                            <Link href="/browse">
                                <Button
                                    size="lg"
                                    className="px-8 py-5 text-lg font-semibold shadow-lg"
                                >
                                    Browse Books
                                </Button>
                            </Link>
                            <Button
                                size="lg"
                                variant={"link"}
                                className="text-lg text-white/90 hover:text-white"
                            >
                                Join the Community <ArrowRight />
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
}
