"use client";
import { useEffect, useState } from "react";

interface CarouselProps {
  texts: string[];
  duration: number;
  styling: string;
}

const Carousel = ({ texts, duration, styling }: CarouselProps) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const textCopy = [...texts];
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === textCopy.length - 1 ? 0 : prevIndex + 1));
    }, duration); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, [currentIndex]);
  return <div className={styling}>{textCopy[currentIndex]}</div>;
};

export default Carousel;
