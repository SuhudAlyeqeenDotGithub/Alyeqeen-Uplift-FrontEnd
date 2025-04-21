"use client";
import { Button } from "@/components/ui/button";
import { useState } from "react";

const Home = () => {
  const [recommendedValues, setRecommendedValues] = useState([
    "Kindness",
    "Compassion",
    "Empathy",
    "Gratitude",
    "Respect",
    "Integrity",
    "Courage",
    "Perseverance",
    "Patience"
  ]);

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

  const properCase = (value: string): string => {
    const firstLetter = value.charAt(0).toUpperCase();
    const restOfString = value.slice(1).toLowerCase();
    return firstLetter + restOfString.trim();
  };

  return (
    <div className="p-10 w-full">
      <div className="flex justify-between gap-x-10">
        <div className="w-[80%] flex flex-col gap-5 ">
          <h1 className="text-[40px] font-bold text-gray-600">Hi Suhud, It&rsquo;s time to uplift</h1>
          <p className="text-[40px] font-bold">
            I choose kindness today. My words, actions, and thoughts reflect compassion and understanding. Every small
            act of kindness makes a difference.
          </p>
        </div>
        <div className="flex flex-col gap-5 justify-center items-center bg-tealGray1 rounded-md p-4 w-[600px] h-[400px]">
          <h1 className="font-bold h-[50px]">Your Values</h1>
          <div className="h-[150px] w-full flex flex-wrap gap-2 overflow-auto text-[14px]">
            {userValues.length > 0 ? (
              userValues.map((value) => (
                <span key={value} className="">
                  {value}
                </span>
              ))
            ) : (
              <span className="">Please a custom or recommended value</span>
            )}
          </div>
          <div className="h-[500px] w-full flex flex-col gap-5 items-center ">
            <Button variant="teal" className="w-[30%]">
              Edit Values
            </Button>
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
              <Button variant="teal" className="w-[20%]" onClick={() => addCustomValue(customValue)}>
                Add
              </Button>
            </div>

            <div className="flex flex-wrap gap-3">
              {recommendedValues.map((value) => (
                <Button
                  key={value}
                  variant="ghost"
                  className="border-1 border-teal2 rounded-full p-2"
                  onClick={() => addValue(value)}
                >
                  {value}
                </Button>
              ))}
            </div>
          </div>
        </div>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
