"use client";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const ThemePage = () => {
  const recommendedColors = ["#FFD54F", "#000000", "#FFFFFF", "#3BBF41", "#157EAB", "#187A81", "#FF7043", "#E7FAE8"];
  const [customColor, setCustomColor] = useState("");
  const [isValidColor, setIsValidColor] = useState(false);
  useEffect(() => {
    const hexRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    setIsValidColor(hexRegex.test(customColor));
  }, [customColor]);
  return (
    <div className="flex flex-col min-h-screen p-10 gap-10">
      {/* top div */}
      <div className="flex flex-col gap-3 mb-20">
        <h1 className="text-[30px] font-bold">
          One cool thing is receiving affirmations, and another is theming them with the environment.
        </h1>
        <h1 className="text-[20px] font-semibold">
          Feel free to select a beautiful theme - This will reflect on all main pages
        </h1>
      </div>
      {/* mid div */}
      <div className="flex justify-between items-center gap-5 mx-40">
        {/* component selection div */}
        <div className="flex gap-5 font-semibold text-gray-500">
          <button>Background</button>
          <button>Text</button>
          <button>Button</button>
        </div>
        {/* custom color div */}
        <div className="flex ">
          <div className="flex gap-5">
            <div>
              <input
                className=" w-[300px] mb-1 outline-none bg-white p-2 rounded-md border border-greenStroke1"
                name={customColor}
                value={customColor}
                placeholder="Custom Color Format: #736D6D"
                onChange={(e) => setCustomColor(e.target.value)}
              />
              <div className="text-[13px]">{!isValidColor && "Invalid Color"}</div>
            </div>

            <div
              className="w-8 h-8 rounded-full border shadow-lg"
              style={{ backgroundColor: customColor || "#E7FAE8" }}
            ></div>
            <Button>Apply</Button>
          </div>
        </div>
      </div>

      {/* affirmations div */}
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {recommendedColors.map((color) => (
          <div
            className="w-[200px] h-[200px] rounded-md flex justify-center items-center border border-gray-200 shadow-md"
            style={{ backgroundColor: color }}
            key={color}
            onClick={() => {}}
          >
            <Button>Apply</Button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ThemePage;
