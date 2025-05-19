"use client";
import React from "react";
import Carousel from "../carousel";
import { Switch } from "@/components/ui/switch";
import { Button } from "../ui/button";
import { useState } from "react";

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

const ValueCard = ({ value, affirmations }: ValueCardProps) => {
  const switchTextComboStyle = "flex gap-3 justify-between";
  const [notificationInterval, setNotificationInterval] = useState("");
  const [intervalData, setIntervalData] = useState("");
  const [openNotificationDialog, setOpenNotificationDialog] = useState(false);

  const notitificationDialog = (
    <div className=" flex bg-themeText-5  rounded-md p-4 absolute inset-0 justify-center items-center">
      <div className="bg-white border border-themeText-10 rounded-md p-4 w-[80%] max-h-[80%] flex flex-col gap-5">
        <h1 className="text-[20px] font-bold text-themeText">Notification Interval</h1>
        <div>
          <select
            name="notificationInterval"
            value={notificationInterval}
            onChange={(e) => setNotificationInterval(e.target.value)}
            className="border-themeText-20 border rounded-md p-2 w-full"
          >
            <option value="Monthly">Monthly</option>
            <option value="Weekly">Weekly</option>
            <option value="Daily">Daily</option>
            <option value="Hourly">Hourly</option>
          </select>
        </div>
        <div>
          {/* if monthly, date, if weekly day, if daily time, if hourly interval */}
          <h1 className="font-semibold text-themeText-60">
            {notificationInterval === "Monthly"
              ? "Enter Date - Format: (dd) 15"
              : notificationInterval === "Weekly"
              ? "Enter Day - Format: (dddd) Tuesday"
              : notificationInterval === "Daily"
              ? "Enter Time - Format: (HH:mm) 15:30"
              : notificationInterval === "Hourly"
              ? "Enter interval - Format: (#) 2"
              : ""}
          </h1>
          <input
            type="text"
            name="intervalData"
            value={intervalData}
            onChange={(e) => setIntervalData(e.target.value)}
            className="bg-white w-full p-2 rounded-md border border-themeText-20"
          />
        </div>
        <div>
          <Button onClick={() => setOpenNotificationDialog(false)}>Save</Button>
        </div>
      </div>
    </div>
  );

  return (
    <div className="relative flex flex-col gap-10 w-[400px] h-[450px] bg-themeText-5 border border-themeText-10 rounded-xl shadow-md p-6 text-[15px] items-center justify-center">
      {openNotificationDialog && notitificationDialog}
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
        <div className="flex gap-5 justify-between items-center">
          <textarea className="outline-none border bg-white rounded-md w-full max-h-[100px] min-h-[100px] p-2" />
          <Button>Add</Button>
        </div>
      </div>
      <div className="flex flex-col gap-5">
        {/* notification and tone div */}
        <div className="grid grid-cols-2 gap-5 items-center">
          {/* buttons div */}
          <div className="flex flex-col gap-3">
            <Button onClick={() => setOpenNotificationDialog(true)}>Set Notification</Button>
            {/* <Button>Set Language/Tone</Button> */}
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
      </div>
      {/* themes div */}
    </div>
  );
};

export default ValueCard;
