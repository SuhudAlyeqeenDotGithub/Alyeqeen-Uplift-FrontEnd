"use client";
import { useEffect, useState } from "react";

interface CarouselProps {
  texts: string[];
  duration: number;
  styling: string
}

const Carousel = ({ texts, duration, styling }: CarouselProps) => {

  const [currentIndex, setCurrentIndex] = useState(0);
  useEffect(() => {

    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => prevIndex === texts.length - 1 ? 0 : prevIndex + 1);
    }, duration); // Change text every 3 seconds

    return () => clearInterval(interval); // Cleanup on unmount

  }, [currentIndex])

  return <div className={styling}>{texts[currentIndex]}</div>;
};

export default Carousel;
