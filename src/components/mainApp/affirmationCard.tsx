"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { MdContentCopy } from "react-icons/md";
import { FiTrash2 } from "react-icons/fi";

interface AffirmationCardProps {
  value: string;
  affirmation: string;
}
const AffirmationCard = ({ value, affirmation }: AffirmationCardProps) => {
  const iconStyle = "size-5 hover:text-gray-500";
  return (
    <div className="flex flex-col gap-8 text-themeText bg-themeText-5 rounded-xl p-6 w-[400px] h-[250px] shadow-md border border-themeText-20">
      {/* top div */}
      <div className="flex gap-5 justify-between items-center">
        <h1 className="font-bold text-[18px]">{value}</h1> <Button>Tone</Button>
      </div>
      {/* affirmation div */}
      <div>{affirmation}</div>
      <div className="flex gap-5 justify-between items-center">
        <Button>Change Theme</Button>
        <div className="flex gap-3">
          <FiDownload className={iconStyle} />
          <MdContentCopy className={iconStyle} />
          <FiTrash2 className={iconStyle} />
        </div>
      </div>
    </div>
  );
};

export default AffirmationCard;
