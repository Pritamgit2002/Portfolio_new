import React from "react";
import { Right } from "./Right";
import { Left } from "./Left";
import { Top } from "./Top";
import { Bottom } from "./Bottom";

const Hero = () => {
  return (
    <div className="grid grid-cols-2 gap-4 bg-transparent">
      <Top />
      <Bottom />
      <Left />
      <Right />
    </div>
  );
};

export default Hero;
