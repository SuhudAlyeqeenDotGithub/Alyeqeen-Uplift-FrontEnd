import React from "react";
import { Button } from "./ui/button";

const LandingPageSection1 = () => {
  return (
    <div className="flex flex-col justify-center items-center gap-y-20 mt-20 ">
      <div>
        <h1 className="text-white text-[50px] font-bold">Welcome to Al-Yeqeen Uplift</h1>
        <h2 className="text-yellow1 text-[20px] font-bold">AI-Powered Affirmations for Your Personal Growth</h2>
      </div>

      <div className="text-white text-[40px] font-bold">Unlock Your Potential with Personalized Affirmations</div>
      <div>
        <Button variant="green">Get Started for Free</Button>
        <Button variant="orange">Download Now</Button>
      </div>
      <div className="text-white font-semibold">Explore Features & Benefits</div>
    </div>
  );
};

export default LandingPageSection1;
