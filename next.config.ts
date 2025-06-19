import type { NextConfig } from "next";

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: "https",
                hostname: "images.unsplash.com",
            },
            {
                protocol: "https",
                hostname: "archive.org",
            },
            {
                protocol: "https",
                hostname: "res.cloudinary.com",
            },
            {
                protocol: "https",
                hostname: "d28hgpri8am2if.cloudfront.net",
            },
            {
                protocol: "https",
                hostname: "images-na.ssl-images-amazon.com",
            },
            {
                protocol: "https",
                hostname: "compressed.photo.goodreads.com",
            },
            {
                protocol: "https",
                hostname: "untitledui.com",
            },
        ],
    },
};

export default nextConfig;
