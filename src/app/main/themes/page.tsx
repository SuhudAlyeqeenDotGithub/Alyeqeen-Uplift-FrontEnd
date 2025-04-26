"use client";

import { useTheme } from "@/utilities/ThemeContext";
import { useState } from "react";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";

const ThemePage = () => {
  const { theme, setCustomTheme } = useTheme();
  const { background, text, buttonText, button } = theme;
  const recommendedColors = ["#FFD54F", "#000000", "#FFFFFF", "#3BBF41", "#157EAB", "#187A81", "#FF7043", "#E7FAE8"];
  const [customColor, setCustomColor] = useState("");
  const [isValidColor, setIsValidColor] = useState(false);
  const [componentToChange, setComponentToChange] = useState("Background");

  const [themeObject, setThemeObject] = useState({
    Background: background,
    Text: text,
    ButtonBack: button,
    ButtonText: buttonText
  });
  const { Background, Text, ButtonBack, ButtonText } = themeObject;

  useEffect(() => {
    const hexRegex = /^#?([0-9A-Fa-f]{3}|[0-9A-Fa-f]{6})$/;
    setIsValidColor(hexRegex.test(customColor));
  }, [customColor]);

  const applyTheme = () => {
    const root = document.documentElement;
    root.style.setProperty("--OthemeBackground", Background);
    root.style.setProperty("--OthemeText", Text);
    root.style.setProperty("--OthemeButtonText", ButtonText);
    root.style.setProperty("--OthemeButton", ButtonBack);
  };
  return (
    <div className="flex flex-col min-h-screen p-10 gap-10">
      {/* top div */}
      <div className="flex flex-col gap-3 mb-20">
        <h1 className="text-[30px] font-bold">
          One cool thing is receiving affirmations, and another is theming them with the environment.
        </h1>
        <h1 className="text-[20px] font-semibold">
          Feel free to select a beautiful theme for background, text, button and button text - This will reflect on all
          main pages
        </h1>
      </div>
      {/* mid div */}
      <div className="flex justify-between items-center gap-5 ml-20">
        {/* component selection div */}
        <div className="flex gap-5 font-semibold text-themeText-90">
          <button
            className={`hover:cursor-pointer rounded-full p-2 hover:text-black ${
              componentToChange === "Background" ? "text-themeText-90 bg-themeText-10" : ""
            }`}
            onClick={() => setComponentToChange("Background")}
          >
            Background
          </button>
          <button
            className={`hover:cursor-pointer rounded-full p-2 hover:text-black ${
              componentToChange === "Text" ? "text-themeText-90 bg-themeText-10" : ""
            }`}
            onClick={() => setComponentToChange("Text")}
          >
            Text
          </button>
          <button
            className={`hover:cursor-pointer rounded-full p-2 hover:text-black ${
              componentToChange === "ButtonBack" ? "text-themeText-90 bg-themeText-10" : ""
            }`}
            onClick={() => setComponentToChange("ButtonBack")}
          >
            Button
          </button>
          <button
            className={`hover:cursor-pointer rounded-full p-2 hover:text-black ${
              componentToChange === "ButtonText" ? "text-themeText-90 bg-themeText-10" : ""
            }`}
            onClick={() => setComponentToChange("ButtonText")}
          >
            Button Text
          </button>
        </div>

        {/* selection details div */}
        <div className="rounded-md p-5 justify-center items-center flex flex-col gap-5 my-5 bg-themeText-10 text-themeText-80">
          <div className="flex justify-between items-center gap-5">
            <div className="flex flex-col gap-2 justify-center items-center font-semibold">
              <h1 className="whitespace-nowrap">Current Background Theme</h1>
              <div className="w-8 h-8 rounded-md border shadow-lg" style={{ backgroundColor: Background }}></div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center font-semibold">
              <h1 className="whitespace-nowrap">Current Text Theme</h1>
              <div className="w-8 h-8 rounded-md border shadow-lg" style={{ backgroundColor: Text }}></div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center font-semibold">
              <h1 className="whitespace-nowrap">Current Button Theme</h1>
              <div className="w-8 h-8 rounded-md border shadow-lg" style={{ backgroundColor: ButtonBack }}></div>
            </div>
            <div className="flex flex-col gap-2 justify-center items-center font-semibold">
              <h1 className="whitespace-nowrap">Current Button Text Theme</h1>
              <div className="w-8 h-8 rounded-md border shadow-lg" style={{ backgroundColor: ButtonText }}></div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex items-center gap-20">
        {/* custom color div */}
        <div className="flex mx-20">
          <div className="flex gap-5">
            <div>
              <input
                className=" w-[300px] mb-1 outline-none bg-white p-2 rounded-md border border-greenStroke1"
                name={customColor}
                value={customColor}
                placeholder="Custom Color Format: #736D6D"
                onChange={(e) => setCustomColor(e.target.value)}
              />
              <div className="text-[13px] text-gray-600">{!isValidColor && "Invalid Color"}</div>
            </div>

            <div className="w-8 h-8 rounded-full border shadow-lg" style={{ backgroundColor: customColor }}></div>
            <Button
              onClick={() => {
                setThemeObject({ ...themeObject, [componentToChange]: customColor });
              }}
            >
              Add
            </Button>
          </div>
        </div>
        <div className="flex justify-center w-full">
          <Button onClick={applyTheme}>Apply Theme</Button>
        </div>
      </div>
      {/* theme list div */}
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {recommendedColors.map((color) => (
          <div
            className="w-[200px] h-[200px] rounded-md justify-center items-center flex border border-gray-200 shadow-md hover:cursor-pointer"
            style={{ backgroundColor: color }}
            key={color}
            onClick={() => {
              setThemeObject({ ...themeObject, [componentToChange]: color });
            }}
          >
            <Button>Select</Button>
          </div>
        ))}
      </div>
      <div className="flex justify-center">
        <Button onClick={applyTheme}>Apply Theme</Button>
      </div>
    </div>
  );
};

export default ThemePage;
