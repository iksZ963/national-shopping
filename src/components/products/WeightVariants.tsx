"use client";
import { Fragment, useState } from "react";

interface Weight {
  value: string;
}

const productWeights: Weight[] = [
  { value: "1kg" },
  { value: "2kg" },
  { value: "5kg" },
];

export default function WeightVariants() {
  const [selectedWeight, setSelectedWeight] = useState<Weight>(
    productWeights[0]
  );

  return (
    <>
      <div className="flex flex-col gap-2 select-none">
        <div className="flex items-center flex-wrap gap-4">
          {productWeights.map((weight, index) => (
            <Fragment key={index}>
              <input
                type="radio"
                name="weight"
                id={`weight-${index}`}
                className="hidden"
                onChange={() => setSelectedWeight(weight??'1kg')}
                checked={selectedWeight === weight}
              />
              <label
                htmlFor={`weight-${index}`}
                className={`
              w-20 h-10 rounded-md border border-gray-300 cursor-pointer transition-colors flex items-center justify-center
              ${selectedWeight === weight ? "border-2 border-white" : ""}
              ${selectedWeight === weight ? "ring-2 ring-primary/80 bg-primary/10" : ""}
            `}
              >
                {weight.value}
              </label>
            </Fragment>
          ))}
        </div>
      </div>
    </>
  );
}
