import React from "react";
import { FaSearch } from "react-icons/fa";
import AffirmationCard from "@/components/mainApp/affirmationCard";

const AffirmationPage = () => {
  const affirmations = [
    {
      value: "Kindness",
      affirmations: [
        "I choose to be kind, even when it's hard, because kindness creates peace.",
        "I speak and act with love, offering kindness freely to others and myself.",
        "Every day, I look for ways to brighten someone’s day with a kind word or gesture.",
      ],
    },
    {
      value: "Compassion",
      affirmations: [
        "I show compassion by being gentle with others and understanding their pain.",
        "I care deeply about people and offer support without judgement.",
        "My heart is open to those who suffer, and I respond with warmth and care.",
      ],
    },
    {
      value: "Empathy",
      affirmations: [
        "I listen to understand, not to respond, and I honour other people’s feelings.",
        "I put myself in others’ shoes, allowing their experiences to shape my understanding.",
        "Empathy guides my actions and helps me connect with others deeply.",
      ],
    },
    {
      value: "Gratitude",
      affirmations: [
        "I am thankful for what I have, and I celebrate the small wins each day.",
        "Gratitude fills my heart and helps me see beauty in every moment.",
        "I focus on what is good in my life and express thanks freely and often.",
      ],
    },
    {
      value: "Respect",
      affirmations: [
        "I treat everyone I meet with dignity and honour, including myself.",
        "I value differences and listen with an open heart and mind.",
        "Respect starts with how I speak, act, and show up in the world.",
      ],
    },
    {
      value: "Integrity",
      affirmations: [
        "I do the right thing, even when it’s not the easy thing.",
        "I stand by my values and live honestly and truthfully.",
        "My actions reflect my inner truth, and I remain grounded in who I am.",
      ],
    },
    {
      value: "Courage",
      affirmations: [
        "I face challenges with strength and take brave steps forward.",
        "Fear does not stop me; I move forward with courage and confidence.",
        "Each act of courage brings me closer to the life I want to live.",
      ],
    },
    {
      value: "Perseverance",
      affirmations: [
        "I keep going, even when it gets tough, because I believe in my path.",
        "Setbacks do not stop me—they shape me into someone stronger.",
        "I am committed to my goals and I rise every time I fall.",
      ],
    },
    {
      value: "Patience",
      affirmations: [
        "I allow things to unfold in their own time, trusting the process.",
        "I remain calm and present, even in moments of waiting or delay.",
        "With patience, I give space for growth, healing, and change to happen.",
      ],
    },
  ];
  return (
    <div className="flex flex-col min-h-screen p-10">
      {/* top div */}
      <div className="flex flex-col gap-3 mb-20">
        <h1 className="text-[30px] font-bold">
          Feel Free to Share, Download Affirmations
        </h1>
        <h1 className="text-[20px] font-semibold">
          A tip for you - Change the theme before downloading
        </h1>
      </div>
      {/* search div */}
      <div className="flex justify-center mr-20 mb-10">
        <div className="flex w-[500px] items-center bg-white p-2 rounded-md border border-greenStroke1">
          <input
            className="w-full outline-none border-none"
            placeholder="Quickly Find Affirmations - By Value"
          />
          <FaSearch className="text-gray-400 size-5" />
        </div>
      </div>
      {/* affirmations div */}
      <div className="flex flex-wrap gap-5 justify-center items-center">
        {affirmations.map(({ value, affirmations }) =>
          affirmations.map((affirmation) => (
            <AffirmationCard
              key={affirmation.slice(0, 10)}
              value={value}
              affirmation={affirmation}
            />
          ))
        )}
      </div>
    </div>
  );
};

export default AffirmationPage;
