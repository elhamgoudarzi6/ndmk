"use client";

import React, { useEffect, useMemo, useState } from "react";
import Image from "next/image";

const images = [
    "/assets/images/11.jpg",
    "/assets/images/12.jpg",
    "/assets/images/13.jpg",
    "/assets/images/14.jpg",
    "/assets/images/15.jpg",
    "/assets/images/16.jpg",
    "/assets/images/17.jpg",
    "/assets/images/18.jpg",
    "/assets/images/19.jpg",
    "/assets/images/20.jpg",
    "/assets/images/21.jpg",
    "/assets/images/22.jpg",
    "/assets/images/23.jpg",
    "/assets/images/24.jpg",
    "/assets/images/25.jpg",
    "/assets/images/26.jpg",
    "/assets/images/27.jpg",
    "/assets/images/28.jpg",
    "/assets/images/29.jpg",
    "/assets/images/29.jpg",
    "/assets/images/30.jpg",
    "/assets/images/31.jpg",
    "/assets/images/32.jpg",
    "/assets/images/33.jpg",
    "/assets/images/34.jpg",
    "/assets/images/35.jpg",
    "/assets/images/36.jpg",
    "/assets/images/37.jpg",
    "/assets/images/38.jpg",
    "/assets/images/39.jpg",
    "/assets/images/40.jpg",
];

const shuffleArray = (array: string[]) => {
    const shuffled = [...array];
    for (let i = shuffled.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
    }
    return shuffled;
};

const GridGallery = () => {
 const [isMobile, setIsMobile] = useState(false);
  const [hasMounted, setHasMounted] = useState(false);

  useEffect(() => {
    setHasMounted(true);

    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener("resize", checkMobile);
    return () => window.removeEventListener("resize", checkMobile);
  }, []);

  const columns = useMemo(() => {
    const count = isMobile ? 2 : 4;
    return Array.from({ length: count }, () => shuffleArray(images));
  }, [isMobile]);

  if (!hasMounted) return null; // ✅ جلوگیری از Hydration error


    return (
        <section className="container mx-auto h-[80vh] overflow-hidden py-10 px-4">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-full">
                {columns.map((columnImages, colIndex) => (
                    <div key={colIndex} className="relative h-full overflow-hidden">
                        <div
                            className={`flex flex-col gap-4  ${colIndex % 2 === 0 ? "scroll-up" : "scroll-down"
                                }`}
                        >
                            {[...columnImages, ...columnImages].map((src, i) => (
                                <Image
                                    width={500}
                                    height={500}
                                    key={`${colIndex}-${i}`}
                                    src={src}
                                    alt={`image-${colIndex}-${i}`}
                                    className="w-full h-60 md:h-72 object-cover rounded-lg"
                                />
                            ))}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
};

export default GridGallery;
