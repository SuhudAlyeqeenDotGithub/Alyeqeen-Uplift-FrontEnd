import React from "react";
import { Button } from "@/components/ui/button";

const ValuesPage = () => {
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
          <div className="flex flex-wrap p-5 gap-4 bg-lightGreen2 w-full h-[300px]">
            {}
          </div>
          {/* custom value div */}
          <div className="flex flex-col gap-3 justify-center">
            <h1 className="text-white font-bold">Custom Value</h1>{" "}
            <input className="bg-lightGreen2 p-2 border-b-2 border-green1 outline-none" />
            <Button variant="green">Add</Button>
          </div>
        </div>
        {/* value buttons div */}
        <div className="flex flex-wrap p-5 gap-4 w-full h-[300px]"></div>
        <div>
          <Button variant="orange">Save Values</Button>
        </div>
      </div>
    </div>
  );
};

export default ValuesPage;
