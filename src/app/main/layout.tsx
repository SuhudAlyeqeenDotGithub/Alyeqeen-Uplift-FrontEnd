"use client";

import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoHomeOutline, IoStarOutline } from "react-icons/io5";
import { MdOutlineColorLens, MdHelpOutline } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import React from "react";
import { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  const { user: userState, isLoading } = useSelector((state: RootState) => state.user);
  const { themes } = userState;
  const [fullNav, setFullNav] = useState(false);
  const linkStyle = "flex gap-x-3 items-center  hover:opacity-50";
  const iconStyle = "text-[30px]";
  const linkTextStyle = `${fullNav ? "block" : "hidden"}`;

  useEffect(() => {
    if (!themes) return;
    const { backgroundColor, textColor, buttonColor, buttonTextColor } = themes;
    const root = document.documentElement;
    root.style.setProperty("--OthemeBackground", backgroundColor);
    root.style.setProperty("--OthemeText", textColor);
    root.style.setProperty("--OthemeButtonText", buttonColor);
    root.style.setProperty("--OthemeButton", buttonTextColor);
  }, []);

  return (
    <div className="flex flex-row bg-themeBackground text-themeText">
      <div className={`p-3 border-r-1 border-themeText-10 font-semibold ${fullNav ? "" : ""}`}>
        <IoMdMenu
          className="hover:cursor-pointer text-[30px] mb-10 animate-pulse"
          onClick={() => {
            setFullNav(!fullNav);
          }}
        />
        <nav className="flex flex-col gap-5 ">
          <Link href="/main" className={linkStyle} title="Home">
            <IoHomeOutline className={iconStyle} />
            <div className={linkTextStyle}>Home</div>
          </Link>
          <Link href="/main/profile" className={linkStyle} title="Profile">
            <CgProfile className={iconStyle} />
            <div className={linkTextStyle}>Profile</div>
          </Link>
          <Link href="/main/values" className={linkStyle} title="Values">
            <IoStarOutline className={iconStyle} />
            <div className={linkTextStyle}>Values</div>
          </Link>
          <Link href="/main/affirmations" className={linkStyle} title="Affirmations">
            <GiConfirmed className={iconStyle} />
            <div className={linkTextStyle}>Affirmations</div>
          </Link>
          <Link href="/main/themes" className={linkStyle} title="Themes">
            <MdOutlineColorLens className={iconStyle} />
            <div className={linkTextStyle}>Themes </div>
          </Link>
          <Link href="/main/guide" className={linkStyle} title="Guide">
            <MdHelpOutline className={iconStyle} />
            <div className={linkTextStyle}>Guide </div>
          </Link>
        </nav>
      </div>

      {children}
    </div>
  );
};

export default Main;
