"use client";

import Link from "next/link";
import Image from "next/image";

const images = [
    "/assets/images/15.jpg",
    "/assets/images/12.jpg",
    "/assets/images/11.jpg",
];
// #1E293B
const Cat = () => {
    return (
        <section className="container mx-auto my-20 px-10 md:px-30  animate-fade-in-down text-gray-300">

            <h2 className="text-center text-3xl md:text-3xl uppercase mb-10">
                <span>Creative </span>
                <span className="relative px-2 z-10 before:content-[''] before:absolute before:inset-x-0 before:bottom-0 before:h-[50%] before:bg-[#a80000] before:-z-10">
                    content
                </span>
                <span> for fashion</span>
            </h2>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 justify-center">
                {images.map((image, index) => (
                    <div key={index} className="relative group overflow-hidden rounded-xl shadow-lg">
                        <Image width={500} height={500} src={image} alt={`fashion-${index}`} className="w-full h-80 object-cover transition-transform duration-700 group-hover:scale-103" />
                        <div className="absolute inset-0 bg-black/50 opacity-0 group-hover:opacity-100 transition duration-500 flex flex-col justify-center items-center text-white px-4">
                            <h3 className="text-center text-xl mb-2">Creative and for fashion</h3>
                            <Link href="/work" className="mt-2 border border-gray-300 px-5 py-1 rounded-full">see more</Link>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Cat;
