"use client";

import Image from "next/image";
import Link from "next/link";

const Hero = () => {
  return (
    <header className="relative w-full h-screen text-white overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/assets/images/2.jpg" // 🔄 تصویر لاکچری فشن بزار اینجا
          alt="Fashion Background"
          layout="fill"
          objectFit="cover"
          className="brightness-[.5]"
        />
      </div>

      {/* Overlay Content */}
      <div className="relative z-10 flex flex-col justify-center text-gray-300 items-start h-full px-8 md:px-20">
        <h1 className="text-4xl md:text-7xl font-extrabold tracking-tight leading-tight">
          NDMK<br /> AGENCY
        </h1>
        <p className="mt-6 max-w-xl text-xl md:text-2xl">
          Discover timeless fashion with our curated collections for bold and modern lifestyles.
        </p>

        <Link href="/service" prefetch={true} className="inline-flex items-center justify-center backdrop-blur-2xl bg-white/10 rounded-full pl-2 pr-10 py-1 mt-5">
            <Image width={200} height={200} src="/assets/images/p.jpg" alt="hippo" className="w-12 h-12 rounded-full mr-5" />
          <span className="text-base font-medium text-white">who are we ?</span>
        </Link>

      </div>
    </header>
  );
};

export default Hero;
