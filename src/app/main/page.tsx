"use client";

import { MdOutlineModeEdit } from "react-icons/md";
import { useRouter } from "next/navigation";

import Carousel from "@/components/carousel";
import ValueCard from "@/components/mainApp/valueCard";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { FaSearch } from "react-icons/fa";
import values from "@/utilities/valuesList";
import { properCase } from "@/utilities/shortFuntions";
import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store"; // Adjust the path if your store file is elsewhere

const Home = () => {
  const router = useRouter();
  const user = useSelector((state: RootState) => state.user);
  const { userName, userEmail } = user.user;
console.log(user);

  const name1 = userName?.split(" ")[0];
  const initial = name1?.split("")[0] + name1?.split("")[1].toUpperCase();


  const handleLogout = () => {
    localStorage.removeItem("user");
    router.push("/login");
  };

  const [recommendedValues, setRecommendedValues] = useState(values);

  const heroAffirmations = [
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

  const affirmations = [
    {
      value: "Kindness",
      affirmations: [
        "I choose to be kind, even when it's hard, because kindness creates peace.",
        "I speak and act with love, offering kindness freely to others and myself.",
        "Every day, I look for ways to brighten someone’s day with a kind word or gesture."
      ]
    },
    {
      value: "Compassion",
      affirmations: [
        "I show compassion by being gentle with others and understanding their pain.",
        "I care deeply about people and offer support without judgement.",
        "My heart is open to those who suffer, and I respond with warmth and care."
      ]
    },
    {
      value: "Empathy",
      affirmations: [
        "I listen to understand, not to respond, and I honour other people’s feelings.",
        "I put myself in others’ shoes, allowing their experiences to shape my understanding.",
        "Empathy guides my actions and helps me connect with others deeply."
      ]
    },
    {
      value: "Gratitude",
      affirmations: [
        "I am thankful for what I have, and I celebrate the small wins each day.",
        "Gratitude fills my heart and helps me see beauty in every moment.",
        "I focus on what is good in my life and express thanks freely and often."
      ]
    },
    {
      value: "Respect",
      affirmations: [
        "I treat everyone I meet with dignity and honour, including myself.",
        "I value differences and listen with an open heart and mind.",
        "Respect starts with how I speak, act, and show up in the world."
      ]
    },
    {
      value: "Integrity",
      affirmations: [
        "I do the right thing, even when it’s not the easy thing.",
        "I stand by my values and live honestly and truthfully.",
        "My actions reflect my inner truth, and I remain grounded in who I am."
      ]
    },
    {
      value: "Courage",
      affirmations: [
        "I face challenges with strength and take brave steps forward.",
        "Fear does not stop me; I move forward with courage and confidence.",
        "Each act of courage brings me closer to the life I want to live."
      ]
    },
    {
      value: "Perseverance",
      affirmations: [
        "I keep going, even when it gets tough, because I believe in my path.",
        "Setbacks do not stop me—they shape me into someone stronger.",
        "I am committed to my goals and I rise every time I fall."
      ]
    },
    {
      value: "Patience",
      affirmations: [
        "I allow things to unfold in their own time, trusting the process.",
        "I remain calm and present, even in moments of waiting or delay.",
        "With patience, I give space for growth, healing, and change to happen."
      ]
    }
  ];

  const [userValues, setUserValues] = useState<string[]>([]);
  const [customValue, setCustomValue] = useState<string>("");

  const addValue = (value: string) => {
    setUserValues((prevValues) => [...prevValues, value]);
    setRecommendedValues(recommendedValues.filter((recVal) => recVal !== value));
  };

  const addCustomValue = (value: string) => {
    const validValue = properCase(value);
    setUserValues((prevValues) => [...prevValues, validValue]);
    setCustomValue("");
    setRecommendedValues(recommendedValues.filter((recVal) => recVal !== validValue));
  };

  interface HandleKeyDownEvent extends React.KeyboardEvent<HTMLInputElement> {}
  const handleKeyDown = (e: HandleKeyDownEvent) => {
    if (e.key === "Enter") {
      addCustomValue(customValue);
    }
  };

  return (
    <div className="">
      {/* nav div */}
      <div className="bg-themeText-5 border-b border-themeText-10 items-center flex justify-between p-2 px-10">
        <div className="flex justify-center items-center ml-20">
          <div className="flex w-[500px] items-center bg-themeText-5 p-2 rounded-md border border-themeText-20">
            <input className="w-full outline-none border-none" placeholder="Quickly Find Affirmations - By Value" />
            <FaSearch className="text-themeText size-5" />
          </div>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <button
            className="hover:text-themeText-70 rounded-full p-1 font-semibold hover:cursor-pointer"
            title="Values"
            onClick={handleLogout}
          >
            Log out
          </button>

          <div className="bg-[url(/water.jpg)] bg-cover bg-center rounded-full w-12 h-12 p-2">
            <div className="bg-black/40 rounded-full w-full h-full flex justify-center items-center text-[15px] font-extrabold text-white">
              {initial}
            </div>
          </div>
        </div>
      </div>
      {/* main body div */}
      <div className="px-10 pt-5 pb-10 w-full flex flex-col gap-8">
        <div className="flex justify-between items-center gap-x-10">
          <div className="w-[80%] flex flex-col gap-5 ">
            <h1 className="text-[40px] font-bold text-themeText-80">Hi {name1}, It&rsquo;s time to uplift</h1>
            <Carousel styling="text-[40px] font-bold" texts={heroAffirmations} duration={3000} />
          </div>
          <div className="flex flex-col gap-5 justify-center items-center rounded-md p-4 w-[600px] h-[400px] bg-themeText-5 border border-themeText-10">
            <div className="flex justify-center items-center w-full">
              <h1 className="font-bold mb-2 w-full text-[18px]">Your Values</h1>
              <div className="flex justify-end w-full">
                <Link href="/main/values" className="hover:bg-themeText-10 rounded-full p-1" title="Values">
                  <MdOutlineModeEdit className="size-6" />
                </Link>
              </div>
            </div>

            <div className="h-[30%] w-full flex flex-wrap place-content-start gap-2 overflow-auto text-[14px]">
              {userValues.length > 0 ? (
                userValues.map((value) => (
                  <span key={value} className="">
                    {value}
                  </span>
                ))
              ) : (
                <span className="">Please enter a custom or recommended value</span>
              )}
            </div>
            <div className="h-[60%] w-full flex flex-col gap-3 items-center ">
              <div className="flex gap-5 items-center">
                <input
                  type="text"
                  placeholder="Custom value"
                  value={customValue}
                  name={customValue}
                  onChange={(e) => setCustomValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-white rounded-md p-2 mt-2"
                />
                <Button className="w-[20%]" onClick={() => addCustomValue(customValue)}>
                  Add
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 justify-center items-center mt-3 overflow-auto px-2">
                {recommendedValues.map((value) => (
                  <Button key={value} variant="ghost" className="rounded-full p-2" onClick={() => addValue(value)}>
                    {value}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="overflow-auto h-[700px]">
            <div className="flex flex-wrap justify-center gap-4">
              {affirmations.map(({ value, affirmations }) => (
                <ValueCard key={value} value={value} affirmations={affirmations} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
