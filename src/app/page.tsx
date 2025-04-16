import Image from "next/image";
import LandingPageNav from "@/components/landingpagenav";
import LandingPageSection1 from "@/components/landingpagesection1";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[url(/boatinsea.jpg)] h-screen w-screen bg-cover bg-center ">
        <div className="bg-teal3/30 backdrop-brightness-70 p-10 h-full">
          <div className="flex justify-between items-center">
            <div className="w-2/3">
              <Image src="/alyeqeenLogo.png" alt="A boat in the sea" height={200} width={200} />
            </div>
            <LandingPageNav />
          </div>
          <LandingPageSection1 />
        </div>
      </div>


    </div>
  );
}
