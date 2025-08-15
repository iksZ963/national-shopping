import React from "react";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import ProductCard from "./Cards/ProductCard";
import Link from "next/link";
import Image from "next/image";

const ProductGrid = () => {
  const CategoryMenu = [
    {
      icon: "/images/icons/1W1bLM2nn77k0GmBnxdahhG3GEEMpS70sW2rQF8C.png",
      title: "Winter Special",
      iconName: "pumpkin",
    },
    {
      icon: "/images/icons/UM2zN8i03mIDbHcIwFkdiPU31VwZZYBx5ltrPB6T.png",
      title: "Cooking Essentials",
      iconName: "pumpkin",
    },
    {
      icon: "/images/icons/Z5pryK9SRPJeH5E6TipSVgiHOAaiO6mmnvJrQlKS.webp",
      title: "Fruits & Vegetables",
      iconName: "pumpkin",
    },
    {
      icon: "/images/icons/BPp2JNrxiNOeLSRaCYdz33vJjtoz93iWokBE09RA.png",
      title: "Meat & Fish",
      iconName: "pumpkin",
    },
    {
      icon: "/images/icons/RR3ShvxFov15zUd8OpP04RT2nzAdd7ZsDoNhDeYw.png",
      title: "Sauces & Catchup",
      iconName: "pumpkin",
    },
    {
      icon: "/images/icons/5k2C3AZ8SN6HUFKAWFAGrFd6zfnIRlu5zH5PidKP.png",
      title: "Dairy & Eggs",
      iconName: "pumpkin",
    },
    {
      icon: null,
      title: "Health & Wellness",
      iconName: "pumpkin",
    },
    {
      icon: null,
      title: "Baking Ingradient",
      iconName: "pumpkin",
    },
    {
      icon: "/images/icons/H8NU4kkQbFWOw89EBosOUkFbPSgXI5ygHUGIkNwk.png",
      title: "Frozen Items",
      iconName: "pumpkin",
    },
    {
      icon: "/images/icons/ozkRB4psYLramD0ma5idBQDML3OsPXCUyziaSY7r.jpg",
      title: "Spacial Baby Foods",
      iconName: "pumpkin",
    },
    {
      icon: null,
      title: "Sea Foods",
      iconName: "pumpkin",
    },
  ];
  return (
    <>
      {/* <Card className="w-full min-h-40 p-3 md:p-4 md:px-6">
        <div className="w-full">
          <div className="w-full flex h-11 items-center justify-between border-[1px] border-b border-x-0 border-t-0">
            <div
              className={`border border-b h-11 border-[hsl(var(--primary))] border-x-0 border-t-0`}
            >
              <h3 className="text-2xl font-bold">Cooking Essent</h3>
            </div>
            <div className="h-11">
              <Button size={"sm"}>View More</Button>
            </div>
          </div>
        </div>
        <div className="py-4 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4 ">
          <ProductCard title={"আতিকা হোম মেড দেশী ধণিয়া গুড়া"} />
          <ProductCard title={"আতিকা হোম মেড দেশী ধণিয়া গুড়া"} />
        </div>
      </Card> */}

      {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
        {CategoryMenu.slice(0, 8).map((item, index) => (
          <Link key={index} href="">
            <Card key={index} className="p-2 flex flex-col h-full items-center">
              <div className="aspect-[1/1.3] min-w-11">
                <Image
                  src={item.icon ?? "/images/icons/placeholder.jpg"}
                  alt="banner"
                  style={{
                    aspectRatio: "50/60",
                    objectFit: "cover",
                  }}
                  width={50}
                  height={50}
                />
              </div>
              <div className="my-2">
                <span className="line-clamp-1 text-sm">{item.title}</span>
              </div>
            </Card>
          </Link>
        ))}
      </div> */}
    </>
  );
};

export default ProductGrid;
