"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, FreeMode } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import Image from "next/image";

const Partner = () => {
    const logos = [
        "/assets/images/p1.png",
        "/assets/images/p2.png",
        // "/assets/images/p3.png",
        "/assets/images/p4.png",
        "/assets/images/p5.png",
        "/assets/images/p6.png",
        "/assets/images/p7.png",
        "/assets/images/p8.png",
        "/assets/images/p9.png",
        "/assets/images/p10.png",
        "/assets/images/p11.png",
        "/assets/images/p12.png",
        "/assets/images/p13.png",
    ];

    return (
        <section className="container mx-auto mt-20 px-10 md:px-0 text-center">
            <Swiper
                spaceBetween={20}
                loop={true}
                speed={5000}
                freeMode={true}
                autoplay={{
                    delay: 0,
                    disableOnInteraction: false,
                }}
                modules={[Autoplay, FreeMode]}
                breakpoints={{
                    320: { slidesPerView: 2 },
                    640: { slidesPerView: 3 },
                    768: { slidesPerView: 4 },
                    1024: { slidesPerView: 5 },
                    1280: { slidesPerView: 6 },
                }}
            >
                {logos.map((item, index) => (
                    <SwiperSlide key={index} className="p-1">
                        <div className="flex items-center justify-center cursor-pointer">
                            <Image width={500} height={500} src={item} alt={`Partner ${index + 1}`}
                                className="max-h-40 object-contain grayscale" />
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
        </section>
    );
};

export default Partner;
