'use client'

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useRef, useState } from "react";

interface Category {
  id: string;
  name: string;
  imageSrc: string;
}

const categories: Category[] = [
  { id: "1", name: "Rods", imageSrc: "/category-image/rods.png" },
  { id: "2", name: "Cosmetics", imageSrc: "/category-image/cosmetics-img.png" },
  { id: "3", name: "Cement", imageSrc: "/category-image/cement-img.png" },
  { id: "4", name: "Tin Sheets", imageSrc: "/category-image/corrugated-tin-sheet.png" },
  { id: "5", name: "Stone & Sand", imageSrc: "/category-image/stone-&-sand.png" },
  { id: "6", name: "Hardware", imageSrc: "/category-image/Hardware.png" },
  { id: "7", name: "Grocery", imageSrc: "/category-image/grocery-img.png" },
  { id: "8", name: "Electrical Items", imageSrc: "/category-image/electrical-items.png" },
  { id: "9", name: "Electronics", imageSrc: "/category-image/electronics-img.png" },
  { id: "10", name: "Furniture", imageSrc: "/category-image/furniture-img.png" },
  { id: "11", name: "Motorcycles", imageSrc: "/category-image/motorcycle.png" },
  { id: "12", name: "Garments", imageSrc: "/category-image/Garments.jpeg" },
  { id: "13", name: "Fish Feed", imageSrc: "/category-image/fish-feed.png" },
  { id: "14", name: "Poultry Feed", imageSrc: "/category-image/poultry-feed.png" },
  { id: "15", name: "Cattle Feed", imageSrc: "/category-image/cattle-feed.png" },
  { id: "16", name: "Ceramics", imageSrc: "/category-image/ceramics.png" },
  { id: "17", name: "Tiles", imageSrc: "/category-image/tiles.png" },
  { id: "18", name: "Tires", imageSrc: "/category-image/tires.png" },
  { id: "19", name: "Lubricants", imageSrc: "/category-image/lubricants.png" },
  { id: "20", name: "Bicycles", imageSrc: "/category-image/Bycycle.png" },
  { id: "21", name: "Housing", imageSrc: "/category-image/housing.png" },
  { id: "22", name: "Land development", imageSrc: "/category-image/land-development.png" },
  { id: "23", name: "Expatriate Network", imageSrc: "/category-image/expatriate-network.png" },
];

const CategoryCard = () => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(false);

  const updateButtons = () => {
    const el = containerRef.current;
    if (!el) {
      setCanScrollLeft(false);
      setCanScrollRight(false);
      return;
    }
    const { scrollLeft, scrollWidth, clientWidth } = el;
    setCanScrollLeft(scrollLeft > 10);
    setCanScrollRight(scrollLeft + clientWidth < scrollWidth - 10);
  };

  useEffect(() => {
    updateButtons();
    const handleResize = () => updateButtons();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <Card className="w-full p-6 rounded-xl shadow-sm">
      <div className="flex flex-col space-y-6">
        {/* Header */}
        <div className="flex items-center justify-between">
          <div className="space-y-1">
            <h2 className="text-2xl font-bold tracking-tight">Browse Categories</h2>
            <p className="text-sm text-muted-foreground">
              Explore our wide range of product categories
            </p>
          </div>
        </div>

        {/* Categories Carousel: 2 rows, horizontal scroll with side buttons */}
        <div className="relative">
          {/* left button */}
          {canScrollLeft && (
            <button
              aria-label="Scroll left"
              onClick={() => {
                const el = containerRef.current;
                if (!el) return;
                el.scrollBy({ left: -Math.round(el.clientWidth * 0.7), behavior: "smooth" });
                setTimeout(updateButtons, 300);
              }}
              className="absolute z-20 left-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1 rounded-full shadow-md hidden md:inline-flex border-2 border-green-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* scrollable area */}
          <div
            ref={containerRef}
            onScroll={() => updateButtons()}
            className="hide-scrollbar overflow-x-auto scroll-smooth py-1"
          >
            <div className="grid grid-flow-col auto-cols-max grid-rows-2 gap-4 items-start">
              {categories.map((category) => (
                <Link
                  href={`/shop?catagory=${category.name}`}
                  key={category.id}
                  className="group relative flex flex-col items-center p-3 w-28 md:w-32"
                >
                  {/* outer green ring */}
                  <div className="flex items-center justify-center mb-2">
                    <div className="rounded-full border-2 border-green-600 p-1 transition-shadow duration-300 group-hover:shadow-lg">
                      {/* pale green inner circle */}
                      <div className="rounded-full bg-green-50 p-2">
                        {/* image circle */}
                        <div className="w-16 h-16 md:w-24 md:h-24 rounded-full overflow-hidden bg-white flex items-center justify-center transition-transform duration-300 group-hover:scale-110">
                          <Image
                            src={category.imageSrc}
                            alt={category.name}
                            width={80}
                            height={80}
                            className="object-contain"
                          />
                        </div>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xs md:text-sm font-medium text-center">{category.name}</h3>
                </Link>
              ))}
            </div>
          </div>

          {/* scoped styles: hide horizontal scrollbar and improve appearance */}
          <style jsx>{`
            .hide-scrollbar {
              -ms-overflow-style: none; /* IE and Edge */
              scrollbar-width: none; /* Firefox */
            }
            .hide-scrollbar::-webkit-scrollbar {
              display: none; /* Safari and Chrome */
            }
          `}</style>

          {/* right button */}
          {canScrollRight && (
            <button
              aria-label="Scroll right"
              onClick={() => {
                const el = containerRef.current;
                if (!el) return;
                el.scrollBy({ left: Math.round(el.clientWidth * 0.7), behavior: "smooth" });
                setTimeout(updateButtons, 300);
              }}
              className="absolute z-20 right-0 top-1/2 -translate-y-1/2 bg-white/90 hover:bg-white p-1 rounded-full shadow-md hidden md:inline-flex border-2 border-green-600"
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-700" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}
        </div>
      </div>
    </Card>
  );
};

export default CategoryCard;