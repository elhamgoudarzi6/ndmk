"use client";

import React from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";

const images = [
    "/assets/images/16.jpg",
    "/assets/images/18.jpg",
    "/assets/images/10.jpg",
    "/assets/images/12.jpg",
];
const images2 = [
    "/assets/images/6.jpg",
    "/assets/images/28.jpg",
    "/assets/images/14.jpg",
    "/assets/images/4.jpg",

];
const Fashion = () => {
    return (
        <div className="container mt-40 mb-24 mx-auto grid gap-3 grid-cols-1 lg:grid-cols-3 md:grid-rows-2">
            {/* عکس بالا چپ */}
            <div className="flex items-center justify-center">
                <Image width={500} height={500}
                    src="/assets/images/bg.png"
                    alt="Image 1"
                    className="hidden md:block w-50 h-50 object-contain"
                />
            </div>

            {/* بخش وسطی با متن و تصویر */}
            <div className="flex flex-col justify-center items-center md:row-span-2 px-5 md:px-0">
                <h2 className="text-xl md:text-3xl text-gray-300 mb-10 md:px-5">
                    <span>Everything Prettier With </span>
                    <span className="relative z-10 px-2 inline-block before:absolute before:inset-x-0 before:bottom-0 before:h-[50%] before:bg-red-800 before:-z-10">
                        NDMK
                    </span>
                    <span> Agency</span>
                </h2>
                <div className="flex items-center justify-center w-full md:px-5">
                    <Image width={500} height={500}
                        src="/assets/images/gg.jpg"
                        alt="Center Image"
                        className="w-full h-auto md:h-120 object-cover rounded-xl"
                    />
                </div>
            </div>

            {/* عکس بالا راست */}
            <div className="flex items-center justify-center px-5 md:px-0">
                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    loop={true}
                    className="w-full h-full"
                >
                    {images.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Image width={500} height={500}
                                src={img}
                                alt={`slide-${index}`}
                                className="w-full h-80 object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>

            {/* عکس پایین چپ */}
            <div className="flex items-center justify-center  px-5 md:px-0">
                {/* <video className="w-full shadow-2xl rounded-lg" autoPlay muted loop playsInline>
                    <source src="/assets/images/2.mp4" type="video/mp4" />
                </video> */}

                <Swiper
                    modules={[Autoplay, EffectFade]}
                    effect="fade"
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    speed={2000}
                    loop={true}
                    className="w-full h-full"
                >
                    {images2.map((img, index) => (
                        <SwiperSlide key={index}>
                            <Image width={500} height={500}
                                src={img}
                                alt={`slide-${index}`}
                                className="w-full h-80 object-cover rounded-xl"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>

            </div>

            {/* عکس پایین راست */}
            <div className="flex items-center justify-center">
                <Image width={500} height={500}
                    src="/assets/images/bg2.jpg"
                    alt="Image 4"
                    className="hidden md:block w-50 h-50 object-contain"
                />
            </div>
        </div>
    );
};

export default Fashion;
