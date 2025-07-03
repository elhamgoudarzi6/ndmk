"use client";
import Image from "next/image";

const images = [
  "/assets/images/7.jpg",
  "/assets/images/14.jpg",
  "/assets/images/15.jpg",
  "/assets/images/10.jpg",
  "/assets/images/11.jpg",
  "/assets/images/8.jpg",
];

const Gallery3D = () => {
  const step = 360 / images.length;

  return (
    <div className="container mx-auto relative h-160 my-10 flex items-center justify-center overflow-hidden">
      <div className="w-75 h-90 animate-spin3D absolute"
        style={{ transformStyle: "preserve-3d", transform: "perspective(1000px)" }}>
        {images.map((src, i) => (
          <Image key={i} src={src} alt={`img-${i}`} width={500} height={500}
            className="absolute w-full h-full object-cover rounded-xl cursor-pointer"
            style={{ transform: `rotateY(${step * i}deg) translateZ(310px)`, }}
          />
        ))}
      </div>
    </div>
  );
};

export default Gallery3D;
