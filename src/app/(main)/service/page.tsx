"use client";
import { ChevronDown, ChevronUp } from "lucide-react";
import React, { useState } from "react";
import { TbChevronDown, TbChevronUp } from "react-icons/tb";

const faqs1 = [
  { question: ' FASHION CAMPAIGN PHOTOGRAPHY ', reply: 'Whether your brand requires clean e-commerce model shots, seasonal lookbooks, or a large-scale branded campaign, NDMK AGENCY is equipped to deliver outstanding visual content. From conceptualizing creative direction to handling the logistics— securing studios, models, styling teams, and photographers—we oversee every detail to ensure a smooth production process. The result? High-quality, visually compelling imagery that authentically represents your brand across both digital and print platforms.' },
  { question: 'FASHION FILM', reply: 'For brands looking to make an impact online, video or short film is one of the key types of content to focus on. We have built a strong reputation as a London fashion film agency which provides videography services and fashion film content to the likes of De Beers, Off-White, Marni, Tiffany & Co and Nordstrom, with an emphasis on creating contemporary, commercial, editorial, luxury and social media video content. ' },
  { question: ' Content Creation ', reply: 'Our fashion content creation service encompasses a wide range of high-quality services tailored for brand engagement and audience growth. We specialise in captivating photography, and fashion film, which can be distributed across social media, blogs, video channels, and brand e-commerce sites. Our team includes seasoned fashion professionals, writers, photographers, and digital designers, all dedicated to elevating your brands presence, educating your audience, and driving sales' },

];
const faqs2 = [
  { question: 'E-COMMERCE WEBSITES', reply: 'We design and build intelligent e-commerce and branded websites for fashion, lifestyle and luxury clients. Our dedicated Shopify developers specialise in everything from cost-effective sites to completely bespoke builds, with a creative, commercial approach to everything we do. Whether youre looking to improve or refresh your current Shopify store, or replatform from Magento, or WooCommerce we have a solution to fit your budget' },
  { question: 'FASHION WEBSITE DESIGN', reply: 'Your online presence is an extension of your brand, embodying all the great things your business stands for. With decades of experience in the fashion and lifestyle industries, and an up-to-the-minute understanding of the contemporary digital landscape, we pride ourselves on our ability to interpret your ideas and communicate them through innovative brand portfolio websites and e-commerce web design.' },
  { question: ' SHOPIFY EXPERTS ', reply: 'As London based Shopify developers we live and breathe Shopify. As an e-commerce platform it offers an enormous amount of flexibility for small startups and larger enterprises alike, while providing robust, up-to-date infrastructure to build your digital business on. Being a certified Shopify Experts agency means we know the system inside out and our team of developers and creatives know exactly how to pull its levers for a big impact and maximum ROI. Read more about how to find a Shopify website builder here.' },

];
const faqs3 = [
  { question: 'BRAND IDENTITY', reply: 'Fashion branding is more than just a logo; its the heart and soul of your business and a reflection of your core values. Whether youre an emerging artisanal startup or a high-street staple, our creative team is adept at capturing your unique narrative. We excel in crafting and executing brand guidelines, accommodating your specific needs for updates, refreshes, or logo redesigns. Our goal is to merge your vision with our creativity, resulting in a compelling, distinctive, and authentic brand image that resonates with your audience.' },
  { question: 'BRAND STRATEGY', reply: 'A creative brand strategy within the fashion sector is the lifeblood that drives brand distinction and customer engagement in an ever-evolving digital landscape. In an industry where aesthetics, identity, and self-expression are paramount, fashion businesses must consistently resonate with their audiences through innovative and compelling narratives. E-commerce platforms, being the primary touchpoint for many consumers, should not only be transactional but experiential, seamlessly integrating storytelling with intuitive design.Advertising efforts, in turn, must captivate while aligning with the brands ethos and consumer aspirations. The power of social media in fashion cannot be overstated; its a real-time runway where brands can showcase their vision, interact with their audience, and adapt to feedback instantaneously.Further, by harnessing the power of customer segmentation, brands can offer tailored experiences, ensuring messages resonate on a deeply personal level. Without a meticulously crafted creative brand strategy, fashion brands risk getting lost in the digital noise, underscoring its pivotal role in the industrys digital strategy.' },
  { question: 'CREATIVE DIRECTION', reply: 'Fashion creative direction is a critical service that serves as the guiding force behind the aesthetic and conceptual vision of a brand, campaign, or project. Experts in this domain take a holistic approach, overseeing various creative aspects such as photography, videography, set design, styling, and even digital experiences like e-commerce and website development. The role extends beyond mere visual coordination to encompass a deep understanding of the brands ethos, target audience, and market positioning. By crafting a cohesive narrative and visual language, creative directors elevate a fashion brands identity, driving consumer engagement and elevating its status within the marketplace. In essence, fashion creative direction unifies and amplifies a brands voice, enabling it to break through the noise in an increasingly crowded fashion landscape.' },
];
const faqs4 = [
  { question: 'CONTENT MARKETING', reply: 'Crafting a fashion content marketing strategy, whether for a startup or luxury house, involves understanding your audience to create resonant, personalised content. It begins with leveraging film and photography to generate compelling visual content that not only resonates with your audience but also emphasises your brands unique aspects. These high-impact visuals form the cornerstone of your content strategy, feeding into various distribution channels such as social media, email marketing, print advertising, and more. ' },
  { question: 'SOCIAL MEDIA STRATEGY', reply: 'We offer a comprehensive social media strategy service for the fashion sector. Our tailored approach encompasses a detailed audit, platform-specific tactics, and engaging content planning to resonate with your target audience. Our service also includes creative visual content, a social strategy document, paid promotion strategies, and crucial metrics to measure success. With an emphasis on flexibility and adaptability, our strategy ensures your brand remains ahead of evolving trends and audience behaviours, while driving a consistent brand image across all platforms.' },
  { question: 'DIGITAL ADVERTISING & PPC', reply: 'We specialise in digital marketing for the fashion brands, offering tailored strategies that drive sales and brand awareness. Our performance marketing expertise spans e-commerce, international reach, social media engagement, and data-driven campaigns. ur commitment is to ensure your fashion brand shines brightly in the competitive digital landscape, connecting authentically with a global audience, staying ahead of trends and importantly driving sales while staying on brand.' },
];


const FashionAgency = () => {
  const [openIndex1, setOpenIndex1] = useState<number | null>(null);
  const [openIndex2, setOpenIndex2] = useState<number | null>(null);
  const [openIndex3, setOpenIndex3] = useState<number | null>(null);
  const [openIndex4, setOpenIndex4] = useState<number | null>(null);

  const toggleFAQ1 = (index: number) => {
    setOpenIndex1(openIndex1 === index ? null : index);
  };
  const toggleFAQ2 = (index: number) => {
    setOpenIndex2(openIndex2 === index ? null : index);
  };

  const toggleFAQ3 = (index: number) => {
    setOpenIndex3(openIndex3 === index ? null : index);
  };

  const toggleFAQ4 = (index: number) => {
    setOpenIndex4(openIndex4 === index ? null : index);
  };
  return (
    <section className="w-full mx-auto text-white my-10">
      <div className="grid grid-cols-12 gap-4 md:p-10 p-5">
        <div className="col-span-12 md:col-span-7 text-4xl md:text-6xl">SERVICES</div>
        <p className="col-span-12 md:col-span-5 text-sm text-gray-300 text-justify leading-relaxed">
          NDMK agency is a London-based creative studio that brings brands to life through innovative digital
          experiences. We specialize in crafting websites, e-commerce platforms, branding, and visual content for the
          fashion, lifestyle, and beauty industries. From emerging start-ups to globally recognized luxury brands, we
          create tailored solutions that elevate our clients in the digital space.
        </p>
      </div>


      <div className="flex justify-center mb-5">
        <video className="w-full shadow-2xl" autoPlay muted loop playsInline>
          <source src="/assets/images/video.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="grid grid-cols-12 gap-4 md:p-10 p-5">
        <div className="col-span-12 md:col-span-6 text-4xl md:text-6xl">CREATIVE CONTENT FOR FASHION</div>
        <div className="col-span-12 md:col-span-6 text-sm text-gray-300 md:px-5">
          <p className="text-justify leading-relaxed">
            Even if we do say so ourselves, NDMK AGENCY is one of London’s leading fashion creative agencies, seamlessly
            merging bold strategies with cutting-edge digital solutions. Whether we’re launching an emerging brand or
            elevating an established luxury label, our goal is to make an impact in the fashion and digital space.
            What sets us apart? A strong foundation in brand strategy and retail expertise. But we’re more than just another
            creative agency—we’re a tight-knit team dedicated to crafting distinct, memorable brand identities that stand out.
            Our innovative approach and unique creative vision have positioned us as a top agency in the industry.
            London is a global hub for creativity, attracting brands from all over the world—and for good reason. The city’s
            cultural richness, historical depth, and ever-evolving artistic landscape make it a breeding ground for
            innovation. At NDMK AGENCY, we draw inspiration from this dynamic environment, using it to fuel our creativity and
            push the boundaries of fashion, lifestyle, and beauty branding.
          </p>
          <div className=" mt-5">
            {faqs1.map((item, index) => (
              <div key={index} className=" border-b border-gray-800 overflow-hidden transition-all duration-300">
                <button onClick={() => toggleFAQ1(index)} className="w-full flex justify-between items-center  py-4 text-left">
                  <span className="text-sm md:text-base font-medium">
                    {item.question}
                  </span>
                  {openIndex1 === index ? (<TbChevronUp size={20} className="text-red-800" />) : (<TbChevronDown size={20} className="text-red-800" />)}
                </button>
                {openIndex1 === index && (
                  <div className="px-3 py-5 text-sm text-gray-400 leading-relaxed text-justify">
                    {item.reply}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>


      </div>
      <div className="flex justify-center mb-5">
        <video className="w-full shadow-2xl" autoPlay muted loop playsInline>
          <source src="/assets/images/4.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="grid grid-cols-12 gap-4 md:p-10 p-5">
        <div className="col-span-12 md:col-span-6 text-4xl md:text-6xl">WE BUILD FASHION WEBSITES</div>
        <div className="col-span-12 md:col-span-6 text-sm text-gray-300 md:px-5">
          <p className="text-justify leading-relaxed">
            NDMK Studio’s expert web design team have over a decade of experience supporting start ups and international
            brands from the luxury fashion, beauty and lifestyle sectors to design, develop and optimise of fashion websites,
            fashion portfolio sites and fashion e-commerce stores.
            We produce beautiful fashion and lifestyle websites that increase revenue and conversions, and boost visibility
            for brands and businesses across the world. As Shopify experts our web design solutions are crafted with
            precision, attention to detail, and a deep appreciation for the unique needs of fashion brands.
          </p>
          <div className=" mt-5">
            {faqs2.map((item, index) => (
              <div key={index} className=" border-b border-gray-800 overflow-hidden transition-all duration-300">
                <button onClick={() => toggleFAQ2(index)} className="w-full flex justify-between items-center  py-4 text-left">
                  <span className="text-sm md:text-base font-medium">
                    {item.question}
                  </span>
                  {openIndex2 === index ? (<TbChevronUp size={20} className="text-red-800" />) : (<TbChevronDown size={20} className="text-red-800" />)}
                </button>
                {openIndex2 === index && (
                  <div className="px-3 py-5 text-sm text-gray-400 leading-relaxed text-justify">
                    {item.reply}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="flex justify-center mb-5">
        <video className="w-full shadow-2xl" autoPlay muted loop playsInline>
          <source src="/assets/images/2.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="grid grid-cols-12 gap-4 md:p-10 p-5">
        <div className="col-span-12 md:col-span-6 text-4xl md:text-6xl">Crafting Brand Identity & Creative Direction in Fashion Storytelling</div>
        <div className="col-span-12 md:col-span-6 text-sm text-gray-300 md:px-5">
          <p className="text-justify leading-relaxed">
            Creating an exceptional fashion brand identity is more than just aesthetics; it&rsquo;s about sculpting an identity
            that truly reflects the core of your fashion brand. We work closely with you to understand your brand&rsquo;s values,
            vision, and target audience. Leveraging this knowledge, we meticulously design all visual and emotional aspects of
            your brand identity. This includes everything from logo design to colour schemes and typography, creating a unique
            visual language that sets you apart. Beyond the visuals, we also formulate a robust fashion brand strategy
            tailored to your specific market positioning and objectives. With our expertise, your fashion branding will not
            just be unique but also deeply resonant with your intended audience, ensuring increased revenue and brand
            visibility.

            Our Creative Direction offers a comprehensive and deeply thoughtful approach to fashion storytelling. We start by
            setting the overarching vision for your fashion brand&rsquo;s content, ensuring it aligns perfectly with your brand
            identity. By creating a strong story and look, creative direction makes a fashion brand more appealing. In short,
            fashion creative direction helps a brand get noticed and be more successful.
          </p>
          <div className=" mt-5">
            {faqs3.map((item, index) => (
              <div key={index} className=" border-b border-gray-800 overflow-hidden transition-all duration-300">
                <button onClick={() => toggleFAQ3(index)} className="w-full flex justify-between items-center  py-4 text-left">
                  <span className="text-sm md:text-base font-medium">
                    {item.question}
                  </span>
                  {openIndex3 === index ? (<TbChevronUp size={20} className="text-red-800" />) : (<TbChevronDown size={20} className="text-red-800" />)}
                </button>
                {openIndex3 === index && (
                  <div className="px-3 py-5 text-sm text-gray-400 leading-relaxed text-justify">
                    {item.reply}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="flex justify-center mb-5">
        <video className="w-full shadow-2xl" autoPlay muted loop playsInline>
          <source src="/assets/images/6.mp4" type="video/mp4" />
        </video>
      </div>

      <div className="grid grid-cols-12 gap-4 md:p-10 p-5">
        <div className="col-span-12 md:col-span-6 text-4xl md:text-6xl">360 PRODUCTION FOR FASHION SHOOTS</div>
        <div className="col-span-12 md:col-span-6 text-sm text-gray-300 md:px-5">
          <p className="text-justify leading-relaxed">
            A successful content shoot starts with an iconic idea, brought to life through careful and dedicated production.
            Our experienced 360 production team provide the expertise to orchestrate specialist creatives and let their skill
            shine through, whatever the project. From photographers to choreographers, stylists to set designers, craft
            services and delivery drivers, a fashion shoot can have hundreds of moving parts which all need to be coordinated
            efficiently to ensure the perfect, and seemingly effortless, outcome.
          </p>
          <div className=" mt-5">
            {faqs4.map((item, index) => (
              <div key={index} className=" border-b border-gray-800 overflow-hidden transition-all duration-300">
                <button onClick={() => toggleFAQ4(index)} className="w-full flex justify-between items-center  py-4 text-left">
                  <span className="text-sm md:text-base font-medium">
                    {item.question}
                  </span>
                  {openIndex4 === index ? (<TbChevronUp size={20} className="text-red-800" />) : (<TbChevronDown size={20} className="text-red-800" />)}
                </button>
                {openIndex4 === index && (
                  <div className="px-3 py-5 text-sm text-gray-400 leading-relaxed text-justify">
                    {item.reply}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </div>


      <div className="w-full overflow-hidden text-gray-300">
        <div className="flex gap-[20%] justify-between items-center text-[7rem] font-bold animate-marquee whitespace-nowrap mt-[10%]">
          <span>TAKE THE CALL</span>
          <span>MAKE THE MOVE</span>
        </div>
      </div>
    </section>
  );
};


export default FashionAgency;
