"use client";

import Hero from "@/components/Hero/Hero";
import React, { ReactNode } from "react";

// interface PixelBackgroundProps {
//     children: ReactNode;
//   }

const Home = ({}) => {
  const { innerWidth, innerHeight } = window;
  const blockSize = innerWidth * 0.05;
  const getBlocks = () => {
    const amountOfBlocks = Math.ceil(innerHeight / blockSize);
    return [...Array(amountOfBlocks)].map((_, i) => {
      return (
        // eslint-disable-next-line react/jsx-key
        <div className="h-[5vw] w-[100%] hover:border-2 border-green-500 bg-slate-200 hover:bg-slate-600 duration-500 ease-out"></div>
      );
    });
  };

  return (
    <div className="flex items-center justify-center h-[100vh] overflow-hidden top-0 relative">
      {[...Array(20)].map((_, i) => {
        return (
          // eslint-disable-next-line react/jsx-key
          <div className="w-[5vw] h-[100%]">{getBlocks()}</div>
        );
      })}
      <div className="absolute">
        <Hero />
      </div>
    </div>
  );
};

export default Home;
