// "use client";

// import { Button } from "@/components/ui/button";
// import {
//     Sheet,
//     SheetContent,
//     SheetTitle,
//     SheetTrigger,
// } from "@/components/ui/sheet";
// import { Menu, Search, Heart } from "lucide-react";
// import { useState } from "react";
// import Link from "next/link";
// import { useUser, SignInButton, UserButton } from "@clerk/nextjs";
// import { useRouter, usePathname } from "next/navigation";
// import AdminModal from "./AdminModal";

// const navItems = [
//     { title: "Home", href: "/" },
//     { title: "Community", href: "/community" },
//     { title: "Pricing", href: "/pricing" },
//     { title: "Contact", href: "/#contact" },
// ];

// export default function Navbar() {
//     const [search, setSearch] = useState("");
//     const [showAdminModal, setShowAdminModal] = useState(false);
//     const router = useRouter();
//     const pathname = usePathname();
//     const { isSignedIn } = useUser();

//     return (
//         <>
//             <nav className="fixed top-0 z-50 w-full text-white flex h-20 items-center gap-6 px-6 transition-all bg-transparent backdrop-blur-md">
//                 <div className="mx-auto flex w-full max-w-7xl items-center gap-6">
//                     {/* Logo and Name */}
//                     <Link
//                         href="/"
//                         className="inline-flex flex-1 items-center gap-2"
//                     >
//                         <svg
//                             width="28"
//                             height="28"
//                             viewBox="0 0 30 30"
//                             fill="none"
//                             xmlns="http://www.w3.org/2000/svg"
//                         >
//                             <rect
//                                 width="30"
//                                 height="30"
//                                 rx="15"
//                                 fill="#18181b"
//                             />
//                             {/* ...icon path */}
//                         </svg>
//                         <span className="text-2xl font-bold tracking-tight">
//                             Bookie
//                         </span>
//                     </Link>

//                     {/* Search */}
//                     <form
//                         className="hidden md:flex items-center bg-neutral-900/80 rounded-full px-4 py-2 mx-6 w-72 focus-within:ring-2 focus-within:ring-primary transition-all"
//                         onSubmit={(e) => {
//                             e.preventDefault();
//                             const path = `/browse?search=${encodeURIComponent(
//                                 search
//                             )}`;

//                             if (pathname === "/browse") {
//                                 router.replace(path);
//                             } else {
//                                 router.push(path);
//                             }

//                             setSearch("");
//                         }}
//                     >
//                         <Search className="text-white/60 mr-2" size={18} />
//                         <input
//                             type="text"
//                             placeholder="Search books..."
//                             className="bg-transparent outline-none border-none text-white placeholder:text-white/60 w-full"
//                             value={search}
//                             onChange={(e) => setSearch(e.target.value)}
//                         />
//                     </form>

//                     {/* Links */}
//                     <div className="hidden gap-2 lg:inline-flex">
//                         {navItems.map((i) => (
//                             <Button
//                                 key={i.title}
//                                 asChild
//                                 variant="ghost"
//                                 className="hover:bg-white/10 hover:text-white transition-colors"
//                             >
//                                 <Link href={i.href}>{i.title}</Link>
//                             </Button>
//                         ))}
//                     </div>

//                     {/* Right side buttons */}
//                     <div className="hidden flex-1 justify-end gap-2 lg:inline-flex">
//                         {!isSignedIn ? (
//                             <>
//                                 <SignInButton mode="modal">
//                                     <Button asChild variant="ghost">
//                                         <span>Log in</span>
//                                     </Button>
//                                 </SignInButton>
//                                 <SignInButton mode="modal">
//                                     <Button>
//                                         <span>Sign up</span>
//                                     </Button>
//                                 </SignInButton>
//                             </>
//                         ) : (
//                             <>
//                                 <Button
//                                     variant="ghost"
//                                     size="icon"
//                                     className="relative mx-2 p-2 rounded-full hover:bg-white/10 transition-colors"
//                                 >
//                                     <Heart className="text-white w-6 h-6" />
//                                 </Button>
//                                 <UserButton afterSignOutUrl="/" />
//                             </>
//                         )}
//                     </div>

//                     {/* Mobile Menu */}
//                     <Sheet>
//                         <SheetTrigger asChild className="ml-auto lg:hidden">
//                             <Button variant="outline" size="icon">
//                                 <Menu />
//                             </Button>
//                         </SheetTrigger>
//                         <SheetContent className="flex w-[90%] max-w-sm flex-col px-6 py-6">
//                             <SheetTitle className="text-2xl font-bold">
//                                 Menu
//                             </SheetTitle>
//                             <div className="mt-6 flex flex-col gap-4">
//                                 {navItems.map((i) => (
//                                     <Link
//                                         key={i.title}
//                                         href={i.href}
//                                         className="text-lg font-semibold"
//                                     >
//                                         {i.title}
//                                     </Link>
//                                 ))}
//                             </div>
//                             <div className="mt-6 flex flex-col gap-4">
//                                 <SignInButton mode="modal">
//                                     <Button asChild variant="ghost">
//                                         <span>Log in</span>
//                                     </Button>
//                                 </SignInButton>
//                                 <SignInButton mode="modal">
//                                     <Button>
//                                         <span>Sign up</span>
//                                     </Button>
//                                 </SignInButton>
//                             </div>
//                         </SheetContent>
//                     </Sheet>

//                     {/* Admin Button */}
//                     <div className="flex items-center gap-4">
//                         <button
//                             className="px-4 py-2 rounded bg-primary text-white hover:bg-primary/80"
//                             onClick={() => setShowAdminModal(true)}
//                         >
//                             Admin
//                         </button>
//                     </div>
//                 </div>
//             </nav>

//             {/* Modal outside nav */}
//             {showAdminModal && (
//                 <AdminModal onClose={() => setShowAdminModal(false)} />
//             )}
//         </>
//     );
// }
"use client";

import { Button } from "@/components/ui/button";
import {
    Sheet,
    SheetContent,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Menu, Search, Heart, X } from "lucide-react";
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
    const [showMobileSearch, setShowMobileSearch] = useState(false);
    const [openSheet, setOpenSheet] = useState(false);
    const router = useRouter();
    const pathname = usePathname();
    const { isSignedIn } = useUser();

    const handleSearch = (e: React.FormEvent) => {
        e.preventDefault();
        const path = `/browse?search=${encodeURIComponent(search)}`;

        if (pathname === "/browse") {
            router.replace(path);
        } else {
            router.push(path);
        }

        setSearch("");
    };

    return (
        <>
            <nav className="fixed top-0 z-50 w-full bg-transparent backdrop-blur-md px-4 py-3 text-white">
                {/* Mobile Top Bar */}
                <div className="flex items-center justify-between lg:hidden">
                    <Link href="/" className="text-xl font-bold tracking-tight">
                        Bookie
                    </Link>
                    <div className="flex items-center gap-3">
                        <Button
                            variant="ghost"
                            size="icon"
                            onClick={() => setShowMobileSearch((prev) => !prev)}
                        >
                            <Search className="hover:text-black" />
                        </Button>
                        {isSignedIn && <UserButton afterSignOutUrl="/" />}
                        {!isSignedIn && (
                            <SignInButton mode="modal">
                                <Button asChild variant="ghost">
                                    <span>Log in</span>
                                </Button>
                            </SignInButton>
                        )}
                        <Sheet open={openSheet} onOpenChange={setOpenSheet}>
                            <SheetTrigger asChild className="ml-auto lg:hidden">
                                <Button
                                    variant="outline"
                                    size="icon"
                                    className="rounded-full bg-neutral-900/80 border-none shadow-md hover:bg-primary/20 focus:ring-2 focus:ring-primary transition-all duration-200"
                                    aria-label="Open menu"
                                >
                                    <Menu className="w-7 h-7 text-white" />
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
                                            onClick={() => setOpenSheet(false)}
                                        >
                                            {i.title}
                                        </Link>
                                    ))}
                                </div>
                                <div className="mt-6">
                                    <Button
                                        className="w-full"
                                        onClick={() => {
                                            setShowAdminModal(true);
                                            setOpenSheet(false);
                                        }}
                                    >
                                        Admin
                                    </Button>
                                </div>
                            </SheetContent>
                        </Sheet>
                    </div>
                </div>

                {/* Mobile Search Overlay */}
                {showMobileSearch && (
                    <div className="mt-3 flex md:hidden items-center bg-neutral-900/80 rounded-full px-4 py-2 w-full focus-within:ring-2 focus-within:ring-primary transition-all">
                        <form
                            className="flex w-full items-center"
                            onSubmit={handleSearch}
                        >
                            <Search className="text-white/60 mr-2" size={18} />
                            <input
                                type="text"
                                placeholder="Search books..."
                                className="bg-transparent outline-none border-none text-white placeholder:text-white/60 w-full"
                                value={search}
                                onChange={(e) => setSearch(e.target.value)}
                            />
                            <X
                                className="ml-2 cursor-pointer"
                                onClick={() => setShowMobileSearch(false)}
                            />
                        </form>
                    </div>
                )}

                {/* Desktop Navbar */}
                <div className="hidden lg:flex max-w-7xl mx-auto items-center justify-between gap-4">
                    <Link
                        href="/"
                        className="flex items-center gap-2 text-2xl font-bold"
                    >
                        Bookie
                    </Link>

                    <form
                        className="flex items-center bg-neutral-900/80 rounded-full px-4 py-2 w-72 focus-within:ring-2 focus-within:ring-primary transition-all"
                        onSubmit={handleSearch}
                    >
                        <Search
                            className="text-white/60 mr-2 hover:text-black"
                            size={18}
                        />
                        <input
                            type="text"
                            placeholder="Search books..."
                            className="bg-transparent outline-none border-none text-white placeholder:text-white/60 w-full"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        />
                    </form>

                    <div className="hidden gap-2 lg:inline-flex">
                        {navItems.map((i) => (
                            <Button
                                key={i.title}
                                asChild
                                variant="ghost"
                                className="relative overflow-hidden rounded-lg px-4 py-2 font-medium transition-all duration-200
                before:absolute before:inset-0 before:bg-primary/20 before:opacity-0 hover:before:opacity-100
                before:transition-opacity before:duration-200"
                            >
                                <Link href={i.href} className="relative z-10">
                                    {i.title}
                                </Link>
                            </Button>
                        ))}
                    </div>

                    <div className="flex gap-4 items-center">
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
                                    className="relative p-2 rounded-full hover:bg-white/10"
                                >
                                    <Heart className="text-white w-6 h-6 hover:text-black" />
                                </Button>
                                <UserButton afterSignOutUrl="/" />
                            </>
                        )}
                        <button
                            className="relative overflow-hidden rounded-lg px-4 py-2 font-medium bg-primary text-white transition-all duration-200
        before:absolute before:inset-0 before:bg-white/20 before:opacity-0 hover:before:opacity-100
        before:transition-opacity before:duration-200"
                            onClick={() => setShowAdminModal(true)}
                        >
                            <span className="relative z-10">Admin</span>
                        </button>
                    </div>
                </div>
            </nav>

            {showAdminModal && (
                <div className="fixed inset-0 bg-black/50 z-50 flex justify-center items-center">
                    <div className="bg-white p-4 rounded shadow-lg max-w-md w-full relative">
                        <button
                            className="absolute top-2 right-2 text-black"
                            onClick={() => setShowAdminModal(false)}
                        >
                            <X />
                        </button>
                        <AdminModal onClose={() => setShowAdminModal(false)} />
                    </div>
                </div>
            )}
        </>
    );
}
