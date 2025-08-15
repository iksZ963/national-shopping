"use client";
import React, { useState } from "react";
import Slider from "rc-slider";
import "rc-slider/assets/index.css";

const PriceRange: React.FC = () => {
  const [priceRange, setPriceRange] = useState<[number, number]>([0, 100]);

  const handlePriceChange = (value: number | [number, number]) => {
    if (!Array.isArray(value)) {
      // If value is a single number, assume it's the first value of the range
      setPriceRange([value, priceRange[1]]);
    } else {
      setPriceRange(value);
    }
  };

  return (
    <>
      <div className=" my-6">
        <div className="my-4">
          <h2 className="font-bold">Price Range</h2>
        </div>
        <div className="flex flex-col justify-center items-center">
          <div className="flex justify-between w-64 px-4 mb-2">
            <span>${priceRange[0]}</span>
            <span>${priceRange[1]}</span>
          </div>
          <Slider
            range
            min={0}
            max={1000} // Adjust maximum value according to your needs
            value={priceRange}
            onChange={handlePriceChange as any}
            step={10} // Adjust step size according to your needs
          />
        </div>
      </div>
    </>
  );
};

export default PriceRange;
