import Image from "next/image";
import React from "react";

const Banner = ({img}:any) => {
  return (
    <>
      <div className="w-full relative aspect-[4/1]">
        {/* banner image */}
        <Image
          src={`${img}`}
          alt="banner"
          layout="fill"
          objectFit="cover"
        />
      </div>
    </>
  );
};

export default Banner;
