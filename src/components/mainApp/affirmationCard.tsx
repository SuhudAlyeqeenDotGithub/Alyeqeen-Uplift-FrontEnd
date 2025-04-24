"use client";
import { Button } from "@/components/ui/button";
import { FiDownload } from "react-icons/fi";
import { MdContentCopy, MdShare } from "react-icons/md";

interface AffirmationCardProps {
  value: string;
  affirmation: string;
}
const AffirmationCard = ({ value, affirmation }: AffirmationCardProps) => {
  const iconStyle = "size-5 hover:text-gray-500";
  return (
    <div className="flex flex-col gap-8 text-teal2 bg-white rounded-xl p-6 w-[400px] h-[250px] shadow-md border border-gray-200">
      {/* top div */}
      <div className="flex gap-5 justify-between items-center">
        <h1 className="font-bold text-[18px]">{value}</h1>{" "}
        <Button variant="teal1">Tone</Button>
      </div>
      {/* affirmation div */}
      <div>{affirmation}</div>
      <div className="flex gap-5 justify-between items-center">
        <Button variant="teal1">Change Theme</Button>
        <div className="flex gap-3">
          <FiDownload className={iconStyle} />
          <MdContentCopy className={iconStyle} />
          <MdShare className={iconStyle} />
        </div>
      </div>
    </div>
  );
};

export default AffirmationCard;
