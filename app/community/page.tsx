export default function CommunityPage() {
    return (
        <section
            className="min-h-screen flex items-center justify-center bg-neutral-950 relative overflow-hidden"
            style={{
                background:
                    "linear-gradient(to bottom, rgba(23,23,23,0.96), rgba(23,23,23,0.98)), url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1500&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D') center/cover no-repeat",
                backgroundBlendMode: "multiply",
            }}
        >
            <div className="absolute inset-0 -z-10 bg-[url('https://images.unsplash.com/photo-1457369804613-52c61a468e7d?w=1500&auto=format&fit=crop&q=80&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8Ym9va3xlbnwwfHwwfHx8MA%3D%3D')] bg-cover bg-center opacity-60" />
            <div className="flex flex-col items-center justify-center px-4 sm:px-6 py-10 sm:py-16 rounded-2xl bg-neutral-900/80 shadow-2xl border border-neutral-800 w-full max-w-sm sm:max-w-md mx-auto">
                <span className="text-primary text-4xl sm:text-5xl mb-6 animate-bounce">
                    📚
                </span>
                <h1 className="text-2xl sm:text-4xl font-bold text-white mb-4 text-center leading-tight">
                    Community Features Coming Soon
                </h1>
                <p className="text-base sm:text-lg text-neutral-300 mb-8 text-center">
                    We&apos;re building a vibrant space for book lovers to
                    connect, share, and discuss. Stay tuned for updates!
                </p>
                <span className="inline-block rounded-full bg-primary/10 text-primary px-4 py-2 text-xs sm:text-sm font-semibold">
                    Launching Fall 2025
                </span>
            </div>
        </section>
    );
}
