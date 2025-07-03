"use client";
import { useEffect, useState, useMemo } from "react";
import Image from "next/image";

const Gallery = () => {
  const images = useMemo(() => [
    { url: "/assets/images/8.jpg" },
    { url: "/assets/images/9.jpg" },
    { url: "/assets/images/11.jpg" },
    { url: "/assets/images/15.jpg" },
    { url: "/assets/images/12.jpg" },
    { url: "/assets/images/13.jpg" },
  ], []);

  const [url, setUrl] = useState(images[0].url);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [images.length]);

  useEffect(() => {
    setUrl(images[index].url);
  }, [index, images]);

  const onChange = (url: string, index: number) => {
    setUrl(url);
    setIndex(index);
  };

  return (
    <section className="container mx-auto px-5 md:px-0 my-30">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-6">

        {/* متن سمت چپ */}
        <div className="col-span-12 xl:col-span-4 text-gray-300">
          <h2 className="text-3xl md:text-4xl font-bold ">
            CREATIVE CONTENT FOR FASHION
          </h2>
          <p className="text-justify leading-relaxed mt-5">
            NDMK agency is a London-based creative studio that brings brands to life through innovative digital experiences. We specialize in crafting websites, e-commerce platforms, branding, and visual content for the fashion, lifestyle, and beauty industries. From emerging start-ups to globally recognized luxury brands, we create tailored solutions that elevate our clients in the digital space.
          </p>
        </div>

        {/* عکس اصلی + عکس‌های کوچک */}
        <div className="col-span-12 md:col-span-8 flex md:flex-row gap-2 md:gap-5 justify-center items-center">

          {/* تصویر اصلی */}
          <div className="relative w-3/4 md:w-[580px] h-full md:h-[85vh]">
            <Image
              src={url}
              alt="main"
              fill
              sizes="(max-width: 768px) 100vw, 550px"
              className="rounded-xl object-cover transition-all duration-700 animate-fade-show"
            />
          </div>

          {/* تصاویر کوچک - تقسیم ارتفاع بدون اسکرول */}
          <div
            className="flex flex-col w-20 md:w-28 h-[85vh] gap-[1px]">
            {images.map((item, i) => (
              <div key={i} className="flex-grow" style={{ height: `${100 / images.length}%` }}>
                <Image
                  src={item.url}
                  alt={`thumb-${i}`}
                  width={500}
                  height={500}
                  onClick={() => onChange(item.url, i)}
                  className={`w-full h-full object-cover rounded-md cursor-pointer border-2
                    ${url === item.url ? "border-red-800" : "border-transparent"}
                    hover:scale-105 transition duration-300`}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Gallery;
