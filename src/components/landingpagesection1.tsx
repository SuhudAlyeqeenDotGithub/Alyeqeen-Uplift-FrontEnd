"use client";
import React from "react";
import { Button } from "./ui/button";
import Carousel from "./carousel";

const LandingPageSection1 = () => {
  const texts = [
    "Start Your Day Right with Custom Affirmations",
    "Fuel Your Success with AI-Generated Inspiration",
    "Achieve More with Reminders That Inspire"
  ];

  return (
    <div className="flex flex-col justify-center items-center gap-y-15 mt-10 xl:mt-20">
      <div className="flex flex-col justify-center items-center gap-y-3 w-full">
        <h1 className="text-white md:text-[50px] text-[35px] font-extrabold text-center">
          Welcome to Al-Yeqeen Uplift
        </h1>
        <h2 className="text-yellow1 md:text-[25px] text-[20px] font-bold text-center">
          AI-Powered Affirmations for Your Personal Growth
        </h2>
      </div>

      <div className="text-white md:text-[50px] text-[30px] font-thin text-center">
        <Carousel texts={texts} duration={2000} styling="text-white md:text-[50px] text-[30px] font-thin text-center transition duration-500 ease-in-out" />
      </div>
      <div className="flex flex-col md:flex-row md:gap-5 gap-3">
        <Button variant="green" className="md:p-6 md:text-[16px]">
          Get Started for Free
        </Button>
        <Button variant="orange" className="md:p-6 md:text-[16px]">
          Download Now
        </Button>
      </div>
      <div className="text-white font-semibold hover:cursor-pointer hover:underline">Explore Features & Benefits</div>
    </div>
  );
};

export default LandingPageSection1;
