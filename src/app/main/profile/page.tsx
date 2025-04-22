import React from "react";
import { Button } from "@/components/ui/button";

const Profile = () => {
  const statDivStyle =
    "h-[250px] border bg-white rounded-lg p-8 gap-8 flex flex-col";
  const statNumStyle = "text-[40px] font-bold";
  const statNumHeadDivStyle = "flex flex-col gap-5 justify-center items-center";
  return (
    <div className="p-10 flex min-h-screen gap-5 ">
      {/* profile div */}
      <div className="h-full border bg-white rounded-lg p-6 min-w-[400px] flex flex-col gap-5 justify-between">
        {/* top div */}
        <div className="flex flex-col justify-center items-center gap-5">
          {/* avatar */}
          <div className="bg-[url(/water.jpg)] bg-cover bg-center rounded-full w-40 h-40 p-2">
            <div className="bg-black/40 rounded-full w-full h-full flex justify-center items-center text-[55px] font-extrabold text-white">
              SU
            </div>
          </div>
          {/* names and email */}
          <div className="flex flex-col justify-center items-center">
            <h1 className="font-bold text-[30px]">Suhud Ayodeji Yekini</h1>
            <h1 className="text-[20px]">alyekeeniy@gmail.com</h1>
          </div>
          {/*  edit button */}
          <div>
            <Button variant="orange">Edit</Button>
          </div>
        </div>
        {/* bottom div */}
        <div className="flex flex-col gap-5">
          <h1 className="font-bold text-[18px]">Authentication</h1>
          <div className="flex flex-col gap-2">
            <div className="flex flex-col gap-2">
              <span className="font-semibold">Log in Method</span>
              <span className="italic">OAuth / Third Party: Google</span>
            </div>
            <div className="flex flex-col gap-2">
              <span className="font-semibold">Traditional Authentication:</span>
              <span className="italic">True</span>
            </div>
          </div>
          {/* auth div */}

          <div className="bg-gray-100 border rounded-lg p-4 flex flex-col gap-6">
            {/* change password div */}

            <h1 className="font-bold text-[18px]">Change Password</h1>
            <div className="flex flex-col gap-3">
              <input
                className="bg-white p-2 rounded"
                placeholder="New Password"
              />
              <input
                className="bg-white p-2 rounded"
                placeholder="Confirm New Password"
              />
              <div>
                <Button>Save</Button>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* user stats div */}
      <div className="flex flex-col gap-5">
        <div className={statDivStyle}>
          <h1 className="font-bold text-[18px]">Values & Affirmations</h1>
          <div className="flex gap-5 justify-between">
            <div className={statNumHeadDivStyle}>
              <h1 className="font-semibold text-gray-700">No of Values</h1>
              <span className={statNumStyle}>80</span>
            </div>
            <div className={statNumHeadDivStyle}>
              <h1 className="font-semibold text-gray-700">
                No of AI Affirmations
              </h1>
              <span className={statNumStyle}>30</span>
            </div>
            <div className={statNumHeadDivStyle}>
              <h1 className="font-semibold text-gray-700">
                No of Custom Affirmations
              </h1>
              <span className={statNumStyle}>60</span>
            </div>
          </div>
        </div>

        <div className={statDivStyle}>
          <h1 className="font-bold text-[18px]">Notification</h1>
          <div className="flex gap-5 justify-between">
            <div className={statNumHeadDivStyle}>
              <h1 className="font-semibold text-gray-700">Sent Notification</h1>
              <span className={statNumStyle}>40</span>
            </div>
            <div className={statNumHeadDivStyle}>
              <h1 className="font-semibold text-gray-700">
                Set Notification - Affirmations
              </h1>
              <span className={statNumStyle}>21</span>
            </div>
            <div className={statNumHeadDivStyle}>
              <h1 className="font-semibold text-gray-700">
                Unset Notification - Affirmations
              </h1>
              <span className={statNumStyle}>19</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;
