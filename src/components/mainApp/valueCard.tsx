import React from "react";
import Carousel from "../carousel";
import { Switch } from "@/components/ui/switch";
import { Button } from "../ui/button";

const valueAffirmations = [
  "I choose to be kind to others and to myself, knowing that even small acts can make a big difference.",
  "I listen with my heart and strive to understand how others feel, even when their experience is different from mine.",
  "I am thankful for what I have, and I find joy in the simple things around me each day.",
  "I stay true to my values, even when no one is watching, and I do what is right, not what is easy.",
  "I show care and concern for others, offering support without judgement.",
  "I face my fears with strength and take brave steps, even when the path is uncertain.",
  "I keep going, even when things get tough, because I believe in myself and in the journey ahead.",
  "I treat others with honour and dignity, just as I wish to be treated.",
  "I trust the process and allow things to unfold in their own time, with calm and understanding."
];

interface ValueCardProps {
  value: string;
  affirmations: string[];
}

const switchTextComboStyle = "flex gap-3 justify-between";

const ValueCard = ({ value, affirmations }: ValueCardProps) => {
  return (
    <div className=" flex flex-col gap-10 w-[400px] h-[500px] bg-white rounded-xl border shadow-md border-greenStroke1 p-6 text-[15px] items-center justify-center">
      <div className="flex flex-col gap-5">
        <h1 className="text-[20px] font-extrabold">{value}</h1>
        <div>
          <Carousel styling="font-bold" texts={affirmations} duration={4000} />
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {/* switches div */}
        <div className="flex gap-5 justify-between">
          <div className={switchTextComboStyle}>
            <span>Generate with AI</span>
            <Switch />
          </div>
          <div className={switchTextComboStyle}>
            <span>Store AI Affirmations</span>
            <Switch />
          </div>
        </div>
        {/* custom affirmation div */}
        <div className="flex gap-5 justify-between">
          <input className="outline-none border" />
          <Button>Add</Button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {/* notification and tone div */}
        <div className="grid grid-cols-2 gap-5 items-center">
          {/* buttons div */}
          <div className="flex flex-col gap-3">
            <Button>Set Notification</Button>
            <Button>Set Language/Tone</Button>
          </div>
          {/* switches */}
          <div className="flex flex-col gap-5">
            <div className={switchTextComboStyle}>
              <span>Notification</span>
              <Switch />
            </div>
            <div className={switchTextComboStyle}>
              <span>Read Affirmation</span>
              <Switch />
            </div>
          </div>
        </div>
      </div>{" "}
      {/* themes div */}
      <div>
        <Button>Themes</Button>
      </div>
    </div>
  );
};

export default ValueCard;
