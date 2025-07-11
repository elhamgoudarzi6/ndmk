"use client";

import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { ChevronLeft, ChevronRight } from "lucide-react";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";
const images = [
    { normal: "/assets/images/19.jpg", hover: "/assets/images/13.jpg" },
    { normal: "/assets/images/16.jpg", hover: "/assets/images/17.jpg" },
    { normal: "/assets/images/26.jpg", hover: "/assets/images/35.jpg" },
    { normal: "/assets/images/27.jpg", hover: "/assets/images/21.jpg" },
    { normal: "/assets/images/23.jpg", hover: "/assets/images/28.jpg" },
    { normal: "/assets/images/24.jpg", hover: "/assets/images/25.jpg" },
    { normal: "/assets/images/30.jpg", hover: "/assets/images/31.jpg" },
    { normal: "/assets/images/40.jpg", hover: "/assets/images/41.jpg" },
    { normal: "/assets/images/32.jpg", hover: "/assets/images/33.jpg" },
    { normal: "/assets/images/34.jpg", hover: "/assets/images/35.jpg" },
    { normal: "/assets/images/36.jpg", hover: "/assets/images/37.jpg" },
];

const Slider = () => {
    return (
        <div className="container mx-auto my-20 px-5 md:px-0 ">
            <h1 className="mb-15 text-center text-4xl md:text-5xl font-bold text-gray-300">
                NDMK AGENCY
            </h1>
            {/* اسلایدر */}
            <Swiper
                modules={[Navigation, Autoplay]}
                navigation={{
                    nextEl: ".swiper-button-next-custom",
                    prevEl: ".swiper-button-prev-custom",
                }}
                // autoplay={{ delay: 5000, disableOnInteraction: false }}
                spaceBetween={10}
                breakpoints={{
                    0: { slidesPerView: 2 },
                    640: { slidesPerView: 2 },
                    768: { slidesPerView: 3 },
                    1024: { slidesPerView: 4 },
                    1280: { slidesPerView: 4 },
                    1536: { slidesPerView: 5 },
                }}
                loop={true}
                className="w-full"
            >
                {images.map((img, index) => (
                    <SwiperSlide key={index}>
                        <div className="relative w-full h-90 group rounded-xl overflow-hidden">
                            <Image width={500} height={500}
                                src={img.normal}
                                alt={`Slide ${index + 1}`}
                                className="w-full h-full object-cover transition-opacity duration-700 ease-in-out group-hover:opacity-0"
                            />
                            <Image width={500} height={500}
                                src={img.hover}
                                alt={`Slide hover ${index + 1}`}
                                className="absolute inset-0 w-full h-full object-cover opacity-0 transition-opacity duration-700 ease-in-out group-hover:opacity-100"
                            />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>

            {/* دکمه‌های نویگیشن */}
            <div className="mt-6 flex items-center justify-between">
                <div className="flex-1 h-px bg-red-900 opacity-70"></div>
                <div className="flex items-center gap-2 px-4 py-2">
                    <button className="opacity-70 swiper-button-prev-custom p-2 bg-red-800 hover:bg-red-900 cursor-pointer rounded-full shadow-sm transition">
                        <ChevronLeft className="w-5 h-5 text-gray-300" />
                    </button>
                    <button className="opacity-70 swiper-button-next-custom p-2 bg-red-800 hover:bg-red-900 cursor-pointer rounded-full shadow-sm transition">
                        <ChevronRight className="w-5 h-5 text-gray-300" />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default Slider;
