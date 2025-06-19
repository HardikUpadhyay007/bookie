"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Search, Heart } from "lucide-react";
import { useState } from "react";
import Link from "next/link";
import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
import { useRouter, usePathname } from "next/navigation";
import AdminModal from "./AdminModal";

const navItems = [
    { title: "Home", href: "/" },
    { title: "Community", href: "/community" },
    { title: "Pricing", href: "/pricing" },
    { title: "Contact", href: "/#contact" },
];

export default function Navbar() {
    const [search, setSearch] = useState("");
    const [showAdminModal, setShowAdminModal] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const { isSignedIn } = useUser();

    return (
        <>
            <nav className="fixed top-0 z-50 w-full text-white flex h-20 items-center gap-6 px-6 transition-all bg-transparent backdrop-blur-md">
                <div className="mx-auto flex w-full max-w-7xl items-center gap-6">
                    {/* Logo and Name */}
                    <Link
                        href="/"
                        className="inline-flex flex-1 items-center gap-2"
                    >
                        {/* Your SVG Logo */}
                        <svg
                            width="28"
                            height="28"
                            viewBox="0 0 30 30"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <rect
                                width="30"
                                height="30"
                                rx="15"
                                fill="#18181b"
                            />
                            {/* ...icon path */}
                        </svg>
                        <span className="text-2xl font-bold tracking-tight">
                            Bookie
                        </span>
                    </Link>

                    {/* Search */}
                    <form
                        className="hidden md:flex items-center bg-neutral-900/80 rounded-full px-4 py-2 mx-6 w-72 focus-within:ring-2 focus-within:ring-primary transition-all"
                        onSubmit={(e) => {
                            e.preventDefault();
                            const path = `/browse?search=${encodeURIComponent(
                                search
                            )}`;
                            pathname === "/browse"
                                ? router.replace(path)
                                : router.push(path);
                            setSearch("");
                        }}
                    >
                        <Search className="text-white/60 mr-2" size={18} />
                        <input
                            type="text"
                            placeholder="Search books..."
                            className="bg-transparent outline-none border-none text-white placeholder:text-white/60 w-full"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>

                    {/* Links */}
                    <div className="hidden gap-2 lg:inline-flex">
                        {navItems.map((i) => (
                            <Button
                                key={i.title}
                                asChild
                                variant="ghost"
                                className="hover:bg-white/10 hover:text-white transition-colors"
                            >
                                <Link href={i.href}>{i.title}</Link>
                            </Button>
                        ))}
                    </div>

                    {/* Right side buttons */}
                    <div className="hidden flex-1 justify-end gap-2 lg:inline-flex">
                        {!isSignedIn ? (
                            <>
                                <SignInButton mode="modal">
                                    <Button asChild variant="ghost">
                                        <span>Log in</span>
                                    </Button>
                                </SignInButton>
                                <SignInButton mode="modal">
                                    <Button>
                                        <span>Sign up</span>
                                    </Button>
                                </SignInButton>
                            </>
                        ) : (
                            <>
                                <Button
                                    variant="ghost"
                                    size="icon"
                                    className="relative mx-2 p-2 rounded-full hover:bg-white/10 transition-colors"
                                >
                                    <Heart className="text-white w-6 h-6" />
                                </Button>
                                <UserButton afterSignOutUrl="/" />
                            </>
                        )}
                    </div>

                    {/* Mobile Menu */}
                    <Sheet>
                        <SheetTrigger asChild className="ml-auto lg:hidden">
                            <Button variant="outline" size="icon">
                                <Menu />
                            </Button>
                        </SheetTrigger>
                        <SheetContent className="flex w-[90%] max-w-sm flex-col px-6 py-6">
                            <SheetTitle className="text-2xl font-bold">
                                Menu
                            </SheetTitle>
                            <div className="mt-6 flex flex-col gap-4">
                                {navItems.map((i) => (
                                    <Link
                                        key={i.title}
                                        href={i.href}
                                        className="text-lg font-semibold"
                                    >
                                        {i.title}
                                    </Link>
                                ))}
                            </div>
                            <div className="mt-6 flex flex-col gap-4">
                                <SignInButton mode="modal">
                                    <Button asChild variant="ghost">
                                        <span>Log in</span>
                                    </Button>
                                </SignInButton>
                                <SignInButton mode="modal">
                                    <Button>
                                        <span>Sign up</span>
                                    </Button>
                                </SignInButton>
                            </div>
                        </SheetContent>
                    </Sheet>

                    {/* Admin Button */}
                    <div className="flex items-center gap-4">
                        <button
                            className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/80"
                            onClick={() => setShowAdminModal(true)} // ✅ This calls the function
                        >
                            Admin
                        </button>
                    </div>
                </div>
            </nav>

            {/* ✅ Modal outside nav */}
            {showAdminModal && (
                <AdminModal onClose={() => setShowAdminModal(false)} />
            )}
        </>
    );
}
