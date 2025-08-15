"use client";
import Image from "next/image";
/* eslint-disable @next/next/no-img-element */
import { useState, useRef, MouseEvent } from "react";

interface MagnifierProps {
  src: string;
  alt: string;
}

const Magnifier: React.FC<MagnifierProps> = ({ src, alt }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [backgroundPosition, setBackgroundPosition] = useState("0% 0%");
  const magnifierRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    if (magnifierRef.current) {
      const rect = magnifierRef.current.getBoundingClientRect();
      const x = ((e.clientX - rect.left) / rect.width) * 100;
      const y = ((e.clientY - rect.top) / rect.height) * 100;
      setBackgroundPosition(`${x}% ${y}%`);
    }
  };

  return (
    <div className="relative w-full h-full group">
      <div
        className="w-full h-full overflow-hidden cursor-zoom-in"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
        onMouseMove={handleMouseMove}
        ref={magnifierRef}
        style={{
          backgroundImage: `url(${src})`,
          backgroundSize: isHovered ? "200%" : "contain",
          backgroundPosition: backgroundPosition,
        }}
      >
        {/* <img src={src} alt={alt} className="w-full h-auto object-cover" /> */}
        <Image
          width={400}
          height={400}
          src={src}
          alt={alt}
          className="w-full h-auto object-cover group-hover:opacity-0"
        />
      </div>
    </div>
  );
};

export default Magnifier;
