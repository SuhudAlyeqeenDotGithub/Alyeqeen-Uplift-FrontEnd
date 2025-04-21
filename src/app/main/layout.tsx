"use client";
import Link from "next/link";
import { IoMdMenu } from "react-icons/io";
import { IoHomeOutline, IoStarOutline } from "react-icons/io5";
import { MdOutlineColorLens, MdHelpOutline } from "react-icons/md";
import { GiConfirmed } from "react-icons/gi";
import { CgProfile } from "react-icons/cg";
import React from "react";
import { useState } from "react";

interface MainProps {
  children: React.ReactNode;
}

const Main: React.FC<MainProps> = ({ children }) => {
  const [fullNav, setFullNav] = useState(false);
  const linkStyle = "flex gap-x-3 items-center  hover:opacity-50";
  const iconStyle = "text-[30px]";
  const linkTextStyle = `${fullNav ? "block" : "hidden"}`;

  return (
    <div className="bg-lightGreen2 flex flex-row">
      <div className={`p-3 border-r-1 border-gray-300 h-screen font-semibold ${fullNav ? "min-w-[18%]" : ""}`}>
        <IoMdMenu
          className="hover:cursor-pointer text-[30px] mb-10 hover:opacity-50"
          onClick={() => {
            setFullNav(!fullNav);
          }}
        />
        <nav className="flex flex-col gap-5 ">
          <Link href="/main" className={linkStyle}>
            <IoHomeOutline className={iconStyle} /> <div className={linkTextStyle}>Home</div>
          </Link>
          <Link href="/main/profile" className={linkStyle}>
            <CgProfile className={iconStyle} /> <div className={linkTextStyle}>Profile</div>
          </Link>
          <Link href="/main/values" className={linkStyle}>
            <IoStarOutline className={iconStyle} />
            <div className={linkTextStyle}>Values</div>
          </Link>
          <Link href="/main/affirmations" className={linkStyle}>
            <GiConfirmed className={iconStyle} /> <div className={linkTextStyle}>Affirmations</div>
          </Link>
          <Link href="/main/themes" className={linkStyle}>
            <MdOutlineColorLens className={iconStyle} /> <div className={linkTextStyle}>Themes </div>
          </Link>
          <Link href="/main/guide" className={linkStyle}>
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
