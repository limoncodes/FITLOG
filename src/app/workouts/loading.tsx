import React from "react";

const LoadingSkin = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-[#0C0D10]">
      
      {/* Loader */}
      <div className="relative flex items-center justify-center w-20 h-20">
        {/* Outer Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-[#C2F800]/20" />

        {/* Spinning Ring */}
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-[#C2F800] border-r-[#C2F800] animate-spin" />

        {/* Center */}
        <div className="w-10 h-10 rounded-full bg-[#C2F800]/10 flex items-center justify-center">
          <div className="w-3 h-3 rounded-full bg-[#C2F800] animate-pulse" />
        </div>
      </div>

      {/* Text */}
      <div className="mt-6 text-center">
        <h3 className="text-white font-Inter font-bold text-lg tracking-wide">
          Loading Library
        </h3>

        <p className="text-[#6B7280] text-sm mt-1">
          Preparing your workouts...
        </p>
      </div>

      {/* Loading dots */}
      <div className="flex items-center gap-1.5 mt-4">
        <span className="w-1.5 h-1.5 rounded-full bg-[#C2F800] animate-bounce" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#C2F800] animate-bounce [animation-delay:150ms]" />
        <span className="w-1.5 h-1.5 rounded-full bg-[#C2F800] animate-bounce [animation-delay:300ms]" />
      </div>
    </div>
  );
};

export default LoadingSkin;