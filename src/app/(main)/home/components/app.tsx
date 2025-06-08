"use client";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, EffectFade, EffectCube, EffectFlip, EffectCards } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/effect-fade";
import "swiper/css/effect-cube";
import "swiper/css/effect-flip";
import "swiper/css/effect-cards";

const items = [
  { img: "/assets/images/app1.png", gif: "/assets/images/app.gif", title: "Aplication Design", description: "Your online presence is an extension of your brand, embodying all the great things your business stands for. With decades of experience in the fashion and lifestyle industries, and an up-to-the-minute understanding of the contemporary digital landscape, we pride ourselves on our ability to interpret your ideas and communicate them through innovative brand portfolio websites and e-commerce web design." },
  { img: "/assets/images/app1.png", gif: "/assets/images/app.gif", title: "pothos application", description: "NDMK agency is a London-based creative studio that brings brands to life through innovative digital experiences. We specialize in crafting websites, e-commerce platforms, branding, and visual content for the fashion, lifestyle, and beauty industries." },
  { img: "/assets/images/app1.png", gif: "/assets/images/app.gif", title: "doukme application", description: "NDMK agency is a London-based creative studio that brings brands to life through innovative digital experiences. We specialize in crafting websites, e-commerce platforms, branding, and visual content for the fashion, lifestyle, and beauty industries." },
];


const About = () => {
  return (
    <section className="container mx-auto mt-20 text-gray-300 px-5 md:px-0 ">
      <Swiper
        modules={[Autoplay, EffectFade, EffectCube, EffectFlip, EffectCards]}
        // effect="flip"
        // grabCursor={true}
        // autoplay={{
        //   delay: 3000,
        //   disableOnInteraction: false,
        // }}
        speed={1000}
        loop={true}
      >
        {items.map((item, index) => (
          <SwiperSlide key={index}>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-3">
              <div className="md:col-span-4 flex items-center">
                <div className="space-y-2">
                  <h2 className="text-3xl md:text-4xl font-bold ">
                    {item.title}
                  </h2>
                  <p className="text-justify leading-relaxed mt-5">
                    {item.description}
                  </p>
                </div>
              </div>
              <div className="md:col-span-8">
                <Image src={item.img} alt={`product-${index}`} width={500} height={500} className="w-full h-auto object-cover rounded-2xl" />
              </div>

            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </section>
  );
};

export default About;

