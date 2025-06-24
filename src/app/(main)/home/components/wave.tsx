"use client";

const Wave = () => {
  return (
    <div className="container mx-auto flex justify-center mt-20">
      <svg viewBox="0 0 100 40" className="w-[300px] h-[100px]">
        <defs>
          <pattern id="wave" x="0" y="0" width="100%" height="100%" patternUnits="userSpaceOnUse">
            <path d="M-40 20 Q-30 18 -20 20 T0 20 T20 20 T40 20 T60 20 T80 20 T100 20 T120 20 V40 H-40z"
              fill="#a80000" className="animate-waveMove" />
          </pattern>
        </defs>
        <text textAnchor="middle" x="50" y="30" fontSize="40" className="fill-white opacity-10">
          NDMK
        </text>
        <text textAnchor="middle" x="50" y="30" fontSize="40" fill="url(#wave)" className="opacity-100">
          NDMK
        </text>
      </svg>
    </div>
  );
};

export default Wave;
