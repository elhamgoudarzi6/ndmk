"use client";
import Image from "next/image";

const About = () => {
  return (
    <section className="container mx-auto mt-20 text-gray-300 px-5 md:px-0 ">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-7">
        <div className="md:col-span-4 flex items-center">
          <div className="space-y-7">
            <h2 className="text-3xl md:text-5xl font-bold ">
              App Design
            </h2>
            <p className="text-justify leading-relaxed">
Your online presence is an extension of your brand, embodying all the great things your business stands for. With decades of experience in the fashion and lifestyle industries, and an up-to-the-minute understanding of the contemporary digital landscape, we pride ourselves on our ability to interpret your ideas and communicate them through innovative brand portfolio apps and e-commerce app design.            </p>
          </div>
        </div>
        <div className="md:col-span-8">
          <Image src="/assets/images/app1.png" alt="app design" width={500} height={500} className="w-full h-auto object-cover rounded-2xl" />
        </div>
      </div>
    </section>
  );
};

export default About;

