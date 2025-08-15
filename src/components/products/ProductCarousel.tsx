import React from "react";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card } from "../ui/card";
import { Button } from "../ui/button";
import ProductCard from "./Cards/ProductCard";
import CategoryCard from "./Cards/CategoryCard";
import { relatedProducts } from "@/app/(root)/(shop)/shop/[id]/components/ProductGrid";

const ProductCarousel = () => {
  const allCategoryProducts = [
    {
      name: "Rods",
      img: "https://i.ibb.co/MxkLYP1Q/Rods.jpg",
      price: 1200,
      rating: 4.5,
    },
    {
      name: "Cements",
      img: "https://i.ibb.co/tMyhtyCX/cements.jpg",
      price: 900,
      rating: 4.2,
    },
    // {
    //   name: "Corrugated Tin Sheets",
    //   img: "https://i.ibb.co/Ndn785T2/corrugated-tin-sheets.jpg",
    //   price: 1500,
    //   rating: 4.4,
    // },
    // {
    //   name: "Stone & Sand",
    //   img: "https://i.ibb.co/KxZc0fMg/Stone-Sand.jpg",
    //   price: 700,
    //   rating: 4.0,
    // },
    // {
    //   name: "Hardware",
    //   img: "https://i.ibb.co/6Js2wKvM/Hardware.jpg",
    //   price: 500,
    //   rating: 4.3,
    // },
    // {
    //   name: "Grocery",
    //   img: "https://i.ibb.co/BVcssS6Y/grocery.jpg",
    //   price: 150,
    //   rating: 4.6,
    // },
    // {
    //   name: "Cosmetics",
    //   img: "https://i.ibb.co/nsgm7rt6/cosmetics.jpg",
    //   price: 400,
    //   rating: 4.7,
    // },
    // {
    //   name: "Mobile phones",
    //   img: "https://i.ibb.co/BHD7NgqC/Mobile-phones.jpg",
    //   price: 25000,
    //   rating: 4.8,
    // },
    // {
    //   name: "Electrical Items",
    //   img: "https://i.ibb.co/dJXRXvZn/Electrical-items.jpg",
    //   price: 1200,
    //   rating: 4.4,
    // },
    // {
    //   name: "Electronics",
    //   img: "https://i.ibb.co/yFQY0jhT/Electronics.jpg",
    //   price: 20000,
    //   rating: 4.5,
    // },
    // {
    //   name: "Furniture",
    //   img: "https://i.ibb.co/hxdwYrkM/Furniture.jpg",
    //   price: 8000,
    //   rating: 4.3,
    // },
    // {
    //   name: "Motorcycles",
    //   img: "https://i.ibb.co/b5Lq3j4X/Motorcycle.jpg",
    //   price: 150000,
    //   rating: 4.6,
    // },
    // {
    //   name: "Garments",
    //   img: "https://i.ibb.co/Q78TsBcn/Garments.jpg",
    //   price: 1200,
    //   rating: 4.4,
    // },
    // {
    //   name: "Fish Feed",
    //   img: "https://i.ibb.co/SFdtmFB/Fish-Feed.jpg",
    //   price: 800,
    //   rating: 4.2,
    // },
    // {
    //   name: "Poultry Feed",
    //   img: "https://i.ibb.co/DPn49C5Q/Poultry-Feed.jpg",
    //   price: 750,
    //   rating: 4.3,
    // },
    // {
    //   name: "Cattle Feed",
    //   img: "https://i.ibb.co/pBdvXLgH/Cattle-Feed.jpg",
    //   price: 700,
    //   rating: 4.1,
    // },
    // {
    //   name: "Ceramics",
    //   img: "https://i.ibb.co/VWx513zc/ceramics.jpg",
    //   price: 1500,
    //   rating: 4.5,
    // },
    // {
    //   name: "Tiles",
    //   img: "https://i.ibb.co/cKJRV8XD/Tiles.jpg",
    //   price: 1800,
    //   rating: 4.4,
    // },
    // {
    //   name: "Tires",
    //   img: "https://i.ibb.co/rRmQL9Z4/Tiresjpg.jpg",
    //   price: 5000,
    //   rating: 4.2,
    // },
    // {
    //   name: "Lubricants",
    //   img: "https://i.ibb.co/GQh1wKPW/Lubricants.jpg",
    //   price: 600,
    //   rating: 4.3,
    // },
    // {
    //   name: "Bicycles",
    //   img: "https://i.ibb.co/9kv4C5m6/Bicycles.jpg",
    //   price: 8000,
    //   rating: 4.5,
    // },
    // {
    //   name: "Glass",
    //   img: "https://i.ibb.co/gMmhtJK7/Glass.jpg",
    //   price: 2000,
    //   rating: 4.2,
    // },
    // {
    //   name: "Housing",
    //   img: "https://i.ibb.co/1Gtxz6tL/housing.jpg",
    //   price: 2500000,
    //   rating: 4.8,
    // },
    // {
    //   name: "Land development",
    //   img: "https://i.ibb.co/DPbrTjLH/Land-Development.jpg",
    //   price: 500000,
    //   rating: 4.6,
    // },
    // {
    //   name: "Expatriate Network",
    //   img: "https://i.ibb.co/xKvn3Sfs/Expatriate-Network.jpg",
    //   price: 0,
    //   rating: 4.0,
    // },
  ];

  return (
    <>
      <Card className="w-full min-h-40 p-3 md:p-4 md:px-6">
        <div className="w-full">
          <div className="w-full flex h-11 items-center justify-between border-[1px] border-b border-x-0 border-t-0">
            <div
              className={`border-2 border-b h-11 border-[hsl(var(--primary))] border-x-0 border-t-0`}
            >
              <h3 className="text-2xl font-bold">Phones</h3>
            </div>
            {/* <div className="h-11">
              <Button size={"sm"}>Top 25</Button>
            </div> */}
          </div>
        </div>
        {/* product grid Carousel Section */}

        <div className="py-4">
          <Carousel
            opts={{
              align: "start",
            }}
            className="w-full"
          >
            <CarouselContent>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5 mx-5">
                {/* {allCategoryProducts.map((product, index) => (
                  <ProductCard key={index} product={product} />
                ))} */}
                <ProductCard products={relatedProducts} />
              </div>

              {/* <CarouselItem className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-5">
                <ProductCard />
              </CarouselItem> */}
            </CarouselContent>

            {/* <CarouselPrevious className="translate-x-9 md:scale-125" />
            <CarouselNext className="-translate-x-9 md:scale-125" /> */}
          </Carousel>
        </div>
      </Card>
    </>
  );
};

export default ProductCarousel;
