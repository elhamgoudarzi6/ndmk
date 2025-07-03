"use client";

import Image from "next/image";

const images = [
    "/assets/images/10.jpg",
    "/assets/images/12.jpg",
    "/assets/images/11.jpg",
    "/assets/images/4.jpg",
    "/assets/images/13.jpg",
    "/assets/images/6.jpg",
    "/assets/images/7.jpg",
    "/assets/images/8.jpg",
    "/assets/images/14.jpg",
];

const Works = () => {
    return (
        <section className="w-full mx-auto mt-10 text-white">
            <div className="grid grid-cols-12 gap-4 md:p-10 p-5">
                <div className="col-span-12 md:col-span-7 text-6xl">WORKS</div>
                <p className="col-span-12 md:col-span-5 text-sm text-gray-300 text-justify leading-relaxed">
                    As a leading London based creative agency, we offer a wide range of services that include branded content, film and photography, production, branding, website design, e-commerce, and digital marketing, all targeted at the fashion and lifestyle sectors. The following is a portfolio of some of our most recent work.
                </p>
            </div>
            <div className="mx-auto mt-20 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
                {images.map((src, index) => (
                    <div key={index} className="overflow-hidden rounded-md shadow-md group cursor-pointer">
                        <Image
                            src={src}
                            alt={`Gallery Image ${index + 1}`}
                            width={400}
                            height={400}
                            className="w-full h-[400px] object-cover transition-transform duration-1000 group-hover:scale-105"
                        />
                    </div>
                ))}
            </div>
        </section>
    );
};

export default Works;
