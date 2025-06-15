import React from "react";
import HeroSection from "./components/HeroSection";
import FooterSection from "./components/FooterSection";
import LatestBooks from "./components/LatestBooks";
import TestimonialSection from "./components/TestimonialSection";
import QuoteSlider from "./components/QuoteSlider";
import Band from "./components/Band";

const page = () => {
    return (
        <div>
            <HeroSection></HeroSection>
            <LatestBooks></LatestBooks>
            <QuoteSlider></QuoteSlider>
            <Band></Band>
            <TestimonialSection></TestimonialSection>
            <FooterSection></FooterSection>
        </div>
    );
};

export default page;
