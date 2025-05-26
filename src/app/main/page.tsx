"use client";

import { MdOutlineModeEdit } from "react-icons/md";
import { useRouter } from "next/navigation";

import Carousel from "@/components/carousel";
import ValueCard from "@/components/mainApp/valueCard";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import values from "@/utilities/valuesList";
import { properCase } from "@/utilities/shortFuntions";
import Link from "next/link";
import { useSelector } from "react-redux";
import type { RootState } from "@/redux/store"; // Adjust the path if your store file is elsewhere
import axios from "axios";
import { useAppDispatch } from "@/redux/hooks";
import { getUserProfile } from "@/redux/features/user/userThunk";
import { resetUser } from "@/redux/features/user/userSlice";
import { resetValues_Affirmations } from "@/redux/features/values_affirmations/values_AffSlice";
import { createValues_Affirmations } from "@/redux/features/values_affirmations/values_AffThunk";

const Home = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  interface UserValue {
    userId: string;
    valueName: string;
  }
  const [userValues, setUserValues] = useState<UserValue[]>([]);
  const [customValue, setCustomValue] = useState<string>("");
  const { user: userState, isLoading } = useSelector((state: RootState) => state.user);
  const { values_Affirmations, isLoading: valuesIsLoading } = useSelector(
    (state: RootState) => state.values_Affirmations
  );

  const [recommendedValues, setRecommendedValues] = useState<string[]>([]);
  const { userId, userName, userEmail } = userState;
  const [valuesError, setValuesError] = useState("");

  useEffect(() => {
    const fetchUserProfile = async () => {
      if (!userName || !userEmail) {
        await dispatch(getUserProfile());
      }
    };
    fetchUserProfile();
  }, []);

  useEffect(() => {
    const extractedValues = values_Affirmations.map(({ valueName }) => valueName);
    const sanitizedRecommendedValues = values.filter((value) => !extractedValues.includes(value));
    setRecommendedValues(sanitizedRecommendedValues);
  }, []);

  const name1 = userName?.split(" ")[0];
  const initial = name1?.[0]?.toUpperCase() + name1?.[1]?.toUpperCase();
  const affirmationList = values_Affirmations
    .map(({ affirmations }) => affirmations.map(({ affirmation }) => affirmation))
    .flat();

  const addValue = (value: string) => {
    setUserValues((prevValues) => [...prevValues, { userId, valueName: value }]);
    setRecommendedValues(recommendedValues.filter((recVal) => recVal !== value));
  };

  const addCustomValue = (value: string) => {
    const validValue = properCase(value);
    setUserValues((prevValues) => [...prevValues, { userId, valueName: validValue }]);
    setCustomValue("");
    setRecommendedValues(recommendedValues.filter((recVal) => recVal !== validValue));
  };

  interface HandleKeyDownEvent extends React.KeyboardEvent<HTMLInputElement> {}
  const handleKeyDown = (e: HandleKeyDownEvent) => {
    if (e.key === "Enter") {
      addCustomValue(customValue);
    }
  };

  const handleLogout = async () => {
    const response = await axios.get("http://localhost:5000/api/users/logout", {
      withCredentials: true
    });
    if (response?.data?.message === "Logged out successfully") {
      dispatch(resetUser());
      dispatch(resetValues_Affirmations());
      router.push("/");
    } else {
      return;
    }
  };

  const handleCreateValue = async () => {
    if (userValues.length < 1) return;
    setValuesError("");
    try {
      const response = await dispatch(createValues_Affirmations(userValues)).unwrap();

      setUserValues([]);
    } catch (err: any) {
      setValuesError(err.response?.data?.message || err.message || "Error Generating Affirmations");
    }
  };

  const body = (
    <div>
      <div className="bg-themeText-5 border-b border-themeText-10 items-center flex justify-between p-2 px-10">
        <div className="flex justify-center items-center ml-20">
          <div className="flex w-[500px] items-center border border-themeText-30 p-2 rounded-md bg-themeText-5">
            <input
              className="w-full outline-none border-none placeholder-themeText-60"
              placeholder="Quickly Find Affirmations - By Value"
            />
            <FaSearch className="text-themeText size-5" />
          </div>
        </div>
        <div className="flex gap-8 items-center justify-center">
          <button
            className="hover:bg-themeText-20 rounded-md text-themeText p-2 font-semibold hover:cursor-pointer"
            title="Values"
            onClick={handleLogout}
          >
            Log out
          </button>

          <div className="bg-[url(/water.jpg)] bg-cover bg-center rounded-full w-12 h-12 p-2">
            <div className="bg-black/40 rounded-full w-full h-full flex justify-center items-center text-[15px] font-extrabold text-white">
              {initial}
            </div>
          </div>
        </div>
      </div>

      {/* main body div */}
      <div className="px-10 pt-5 pb-10 w-full flex flex-col gap-8">
        <div className="flex justify-between items-center gap-x-10">
          <div className="w-[80%] flex flex-col gap-5 ">
            <h1 className="text-[40px] font-bold text-themeText-50">Hi {name1}, It&rsquo;s time to uplift</h1>
            {affirmationList.length > 0 ? (
              <Carousel styling="text-[40px] font-bold" texts={affirmationList} duration={3000} />
            ) : (
              <p className="text-[40px]">You have no affirmations for any values yet.</p>
            )}
          </div>
          <div className="flex flex-col gap-5 justify-center items-center rounded-md p-4 w-[600px] h-[400px] bg-themeText-5 border border-themeText-10">
            <div className="flex justify-center items-center w-full">
              <h1 className="font-bold mb-2 w-full text-[18px]">Your Values</h1>
              <div className="flex justify-end w-full gap-3">
                <Link href="/main/values" className="hover:bg-themeText-10 rounded-full p-1" title="Values">
                  <MdOutlineModeEdit className="size-6" />
                </Link>
                <Button
                  className="font-semibold animate-bounce"
                  disabled={userValues.length < 1}
                  onClick={handleCreateValue}
                >
                  Generate Affirmations
                </Button>
              </div>
            </div>

            <div className="h-[30%] w-full flex flex-wrap place-content-start gap-2 overflow-auto text-[14px]">
              {userValues.length > 0 ? (
                userValues.map(({ valueName }) => (
                  <span key={valueName} className="rounded bg-themeText-20 p-1">
                    {valueName}
                  </span>
                ))
              ) : (
                <span className="">Please enter a custom or recommended value</span>
              )}
            </div>
            <div className="h-[60%] w-full flex flex-col gap-3 items-center ">
              {valuesError && <p className="text-[14px]">{valuesError}</p>}
              <div className="flex gap-5 items-center">
                <input
                  type="text"
                  placeholder="Custom value"
                  value={customValue}
                  name={customValue}
                  onChange={(e) => setCustomValue(e.target.value)}
                  onKeyDown={handleKeyDown}
                  className="bg-themeText-30 text-themeText rounded-md p-2 mt-2"
                />
                <Button className="w-[20%]" onClick={() => addCustomValue(customValue)}>
                  Add
                </Button>
              </div>

              <div className="flex flex-wrap gap-3 justify-center items-center mt-3 overflow-auto px-2">
                {recommendedValues.map((value) => (
                  <Button key={value} variant="ghost" className="rounded-full p-2" onClick={() => addValue(value)}>
                    {value}
                  </Button>
                ))}
              </div>
            </div>
          </div>
        </div>
        <div className="flex flex-col gap-5">
          <div className="overflow-auto h-[700px]">
            {!valuesIsLoading ? (
              <div className="flex flex-wrap justify-center gap-4">
                {values_Affirmations.map(({ valueId, valueName, affirmations }) => (
                  <ValueCard key={valueId} valueName={valueName} affirmations={affirmations} />
                ))}
              </div>
            ) : (
              <div className="flex gap-5 animate-pulse items-center justify-center mt-20">
                Loading Affirmations....
                <div className="rounded-full w-10 h-10 border-b-4 border-l-4 border-themeText animate-spin"></div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="">
      {/* nav div */}
      {body}
    </div>
  );
};

export default Home;
