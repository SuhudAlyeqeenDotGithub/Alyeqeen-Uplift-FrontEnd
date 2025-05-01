import Image from "next/image";
import LandingPageNav from "@/components/landingpagenav";
import LandingPageSection1 from "@/components/landingpagesection1";
import LanidngPageFeaturesSection from "@/components/landinpageFeatures";

export default function Home() {
  return (
    <div className="">
      <div className="bg-[url(/boatinsea.jpg)] bg-cover bg-center min-h-screen">
        {/* section 1 div */}
        <div className="bg-teal3/30 backdrop-brightness-70 md:p-10 p-5 min-h-screen flex flex-col">
          {/* header div */}
          <div className="flex flex-col md:flex-row gap-3 justify-between items-center w-full">
            {/* logo div */}
            <div className="md:w-2/3 w-30 h-10">
              <Image src="/alyeqeenLogo.png" alt="A boat in the sea" height={200} width={200} />
            </div>
            <LandingPageNav />
          </div>
          {/* main content */}
          <div className="flex flex-col justify-center items-center min-h-screen">
            <LandingPageSection1 />
          </div>
        </div>
      </div>
      <LanidngPageFeaturesSection />
    </div>
  );
}
