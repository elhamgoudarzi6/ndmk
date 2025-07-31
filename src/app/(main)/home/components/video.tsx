"use client";

import React, { useState } from "react";

const VideoSlider = () => {
  const items = [
    {
      id: "card1",
      previewImageUrl: "/assets/images/10.jpg",
      videoUrl: "/assets/images/2.mp4",
    },
    {
      id: "card2",
      previewImageUrl: "/assets/images/11.jpg",
      videoUrl: "/assets/images/3.mp4",
    },
    {
      id: "card3",
      previewImageUrl: "/assets/images/12.jpg",
      videoUrl: "/assets/images/4.mp4",
    },
    {
      id: "card4",
      previewImageUrl: "/assets/images/13.jpg",
      videoUrl: "/assets/images/5.mp4",
    },
    {
      id: "card5",
      previewImageUrl: "/assets/images/14.jpg",
      videoUrl: "/assets/images/5.mp4",
    },
  ];

  const [selectedCardId, setSelectedCardId] = useState(items[0].id);

  return (
    <div className="container mx-auto my-20">
      {/* Title Section */}
      <div className="animate-fade-in-left duration-[2000ms] delay-[100ms] text-gray-300 flex flex-col items-start justify-start space-y-2 px-4 mt-10">
        <h3 className="text-2xl md:text-3xl">OUR SERVICES</h3>
        <h3 className="text-2xl md:text-3xl">SUPPORT FASHION</h3>
        <h3 className="text-2xl md:text-3xl">BRANDS WITH EVERYTHING</h3>
        <h3 className="text-2xl md:text-3xl">DIGITALLY CREATIVE</h3>
      </div>

      {/* Slider Section */}
      <div className="mt-20 flex items-center justify-center">
        <div className="flex flex-nowrap justify-center w-full overflow-hidden no-scrollbar">
          {items.map((item) => (
            <div key={item.id}>
              {/* Hidden radio */}
              <input type="radio" name="slide" id={item.id} value={item.id}
                checked={selectedCardId === item.id} onChange={() => setSelectedCardId(item.id)} className="hidden" />
              {/* Label Card */}
              <label htmlFor={item.id} className={`relative bg-cover bg-center cursor-pointer rounded-[40px] overflow-hidden flex items-end mx-1 md:mx-2 transition-all duration-700 ease-[cubic-bezier(.28,-0.03,0,.99)] 
              ${selectedCardId === item.id ? "w-[280px] md:w-[700px]" : "w-[20px] md:w-[85px]"} h-[380px] md:h-[600px]`}
                style={{ backgroundImage: selectedCardId === item.id ? "none" : `url(${item.previewImageUrl})` }}>
                {item.videoUrl && selectedCardId === item.id && (
                  <video autoPlay muted loop controls className="absolute top-0 left-0 w-full h-full object-cover">
                    <source src={item.videoUrl} type="video/mp4" />
                  </video>
                )}
              </label>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default VideoSlider;
