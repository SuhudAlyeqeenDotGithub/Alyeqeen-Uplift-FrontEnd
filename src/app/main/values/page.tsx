"use client";
import React from "react";
import { Button } from "@/components/ui/button";
import values from "@/utilities/valuesList";
import { useState } from "react";
import { properCase } from "@/utilities/shortFuntions";
import { IoIosClose } from "react-icons/io";

const ValuesPage = () => {
  const [recommendedValues, setRecommendedValues] = useState(values);
  const [userValues, setUserValues] = useState<string[]>([]);
  const [customValue, setCustomValue] = useState<string>("");

  const addValue = (value: string) => {
    setUserValues((prevValues) => [...prevValues, value]);
    setRecommendedValues(
      recommendedValues.filter((recVal) => recVal !== value)
    );
  };

  const removeValue = (value: string) => {
    setUserValues((prevValues) =>
      [...prevValues].filter((recVal) => recVal !== value)
    );
    setRecommendedValues((prevValues) =>
      [...prevValues, value].sort((a, b) => a.localeCompare(b))
    );
  };

  const addCustomValue = (value: string) => {
    const validValue = properCase(value);
    setUserValues((prevValues) => [...prevValues, validValue]);
    setCustomValue("");
    setRecommendedValues(
      recommendedValues.filter((recVal) => recVal !== validValue)
    );
  };

  interface HandleKeyDownEvent extends React.KeyboardEvent<HTMLInputElement> {}
  const handleKeyDown = (e: HandleKeyDownEvent) => {
    if (e.key === "Enter") {
      addCustomValue(customValue);
    }
  };
  return (
    <div className="bg-[url(/lake.jpg)] bg-cover bg-center min-h-screen w-full px-20 py-10">
      <div className="bg-black/30 min-h-screen pt-10 px-6 flex flex-col gap-6">
        {/* heading div */}
        <div className="flex flex-col gap-2">
          <h1 className="text-white font-extrabold text-[40px]">
            Let's Start From Your Values and Principles
          </h1>
          <h1 className="text-yellow1 font-bold text-[20px]">
            Please select from the recommended values or enter a custom one
          </h1>
        </div>
        {/* mid div */}
        <div className="flex gap-5">
          {/* values display div */}
          <div className="flex flex-wrap place-content-start p-5 gap-3 bg-lightGreen2 w-full h-[300px] overflow-auto">
            {userValues.length > 0 ? (
              userValues.map((value) => (
                <Button
                  variant="teal"
                  key={value}
                  className="p-2 border rounded-full flex gap-2"
                  onClick={() => removeValue(value)}
                >
                  {value}
                  <IoIosClose />
                </Button>
              ))
            ) : (
              <span className="">Please a custom or recommended value</span>
            )}
          </div>
          {/* custom value div */}
          <div className="flex flex-col gap-3 justify-center">
            <h1 className="text-white font-bold">Custom Value</h1>{" "}
            <input
              className="bg-lightGreen2 p-2 border-b-2 border-green1 outline-none"
              type="text"
              placeholder="Custom value"
              value={customValue}
              name={customValue}
              onChange={(e) => setCustomValue(e.target.value)}
              onKeyDown={handleKeyDown}
            />
            <Button variant="green">Add</Button>
          </div>
        </div>
        {/* value buttons div */}

        <div className="flex flex-wrap gap-3 justify-center items-center mt-3 min-h-[200px] max-h-[200px] overflow-auto">
          {recommendedValues.map((value) => (
            <Button
              key={value}
              variant="secondary"
              className="border-1 border-teal2 rounded-full p-2"
              onClick={() => addValue(value)}
            >
              {value}
            </Button>
          ))}
        </div>

        <div>
          <Button variant="orange">Save Values</Button>
        </div>
      </div>
    </div>
  );
};

export default ValuesPage;
