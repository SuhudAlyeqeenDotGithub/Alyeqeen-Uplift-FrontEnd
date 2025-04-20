import React from "react";
import Image from "next/image";
import { Button } from "./ui/button";

const LanidngPageFeaturesSection = () => {
  return (
    <div className="bg-lightGreen2 min-h-screen flex flex-col px-10 py-20 text-teal4">
      <div className="flex flex-col md:flex-row justify-between items-center">
        <div className="text-[18px] w-[50%] flex flex-col gap-8">
          <h1 className="font-extrabold text-[40px]">Benefits</h1>
          <div className="flex flex-col gap-5 font-regular">
            <p>
              <b>Personalized Affirmations & Motivation:</b> Tailor affirmations based on your values, goals, and
              preferences, with options for custom tones and AI-generated content, boosting mental health and focus.
            </p>
            <p>
              <b>Customizable Reminders & Intervals:</b> Set personalized reminder frequencies (hourly, daily, or
              weekly) to keep motivation consistent and aligned with your goals.
            </p>
            <p>
              <b>Privacy & Data Security:</b> Protect your personal data with encrypted storage, privacy modes, and the
              option to delete or export your data anytime.
            </p>
            <p>
              <b>Habit Tracking & Goal Integration:</b> Link affirmations to specific goals, track progress with
              streaks, and build a consistent habit of positive thinking.
            </p>
            <p>
              <b>Social Sharing & Cross-Platform Support:</b> Share affirmations with friends or on social media and
              sync your data seamlessly across mutiple devices.
            </p>
          </div>
        </div>
        <div className="w-[40%]">
          <Image src="/lake.jpg" alt="A boat in the sea" height={200} width={700} />
        </div>
      </div>
      <div className="flex flex-col md:flex-row md:gap-5 gap-3 w-full justify-center items-center mt-30">
        <Button variant="teal" className="md:p-6 md:text-[16px]">
          Desktop
        </Button>
        <Button variant="orange" className="md:p-6 md:text-[16px]">
          Mobile App
        </Button>
      </div>
    </div>
  );
};

export default LanidngPageFeaturesSection;
