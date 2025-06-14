import React from "react";
import ScrollBaseAnimation from "../../components/ui/TextMarque";

function Band() {
    return (
        <>
            <div className="h-[400px] grid place-content-center bg-neutral-950">
                <ScrollBaseAnimation
                    delay={500}
                    baseVelocity={-3}
                    clasname="font-bold tracking-[-0.07em] leading-[90%] text-white"
                >
                    Welcome to our Book Store
                </ScrollBaseAnimation>
                <ScrollBaseAnimation
                    delay={500}
                    baseVelocity={3}
                    clasname="font-bold tracking-[-0.07em] leading-[90%] text-white pb-6"
                >
                    Discover a world of knowledge and imagination
                </ScrollBaseAnimation>
            </div>
        </>
    );
}

export default Band;
