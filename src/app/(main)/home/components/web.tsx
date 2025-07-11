"use client";
import Image from "next/image";
const images = [
  "/assets/images/web1.jpg",
  "/assets/images/web2.jpg",
  "/assets/images/web1.jpg",
];

const Portfolio = () => {
  return (
    <section className="container mx-auto my-20 text-gray-300 px-5 md:px-0">
      <h1 className="text-3xl md:text-4xl font-bold text-center uppercase mb-15">web design</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {images.map((img, index) => (
          <div key={index} className="group overflow-hidden rounded h-80 cursor-pointer">
            <Image
              width={500} height={500} src={img} alt={`portfolio-${index}`}
              className="w-full h-auto min-h-full object-cover transition-transform duration-[7000ms] ease-in-out group-hover:translate-y-[-75%]" />
          </div>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
