import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import { Card, CardContent } from "../ui/card";
import { Button } from "../ui/button";

const Slider = () => {
  const sliders = [
    {
      img: "/images/xAqVFqvStHRm4Z7AWjZA5UHRDxDxHdUgdrZ46892.jpg",
      alt: "Sale Banner 1",
      heading: "Discover the New Collection",
      subtext: "Shop the latest arrivals now",
      actionText: "Shop Now",
      actionLink: "/shop",
    },
    {
      img: "/images/RH6xJquYbh0Yj6xf1f2nnpiJaFwlYV6kOUvpGINa.jpg",
      alt: "Sale Banner 2",
      heading: "Unbeatable Deals",
      subtext: "Up to 50% off selected items",
      actionText: "Explore Deals",
      actionLink: "/deals",
    },
  ];

  return (
    <div className="w-full">
      <Carousel className="w-full">
        <CarouselContent>
          {sliders.map((item, index) => (
            <CarouselItem key={index} className="p-1">
              <Card className="aspect-[16/7] relative overflow-hidden rounded-md">
                {/* Background Image */}
                <CardContent className="relative w-full h-full p-0">
                  <Image
                    src={item.img}
                    alt={item.alt}
                    fill
                    style={{ objectFit: "cover", objectPosition: "center" }}
                    className="transition-all duration-500"
                    priority
                  />

                  {/* Overlay Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-black/60 via-black/40 to-black/20 z-10" />

                  {/* Text Content */}
                  <div className="absolute inset-0 z-20 flex flex-col items-start justify-center p-6 md:p-24 text-white">
                    <h2 className="text-2xl md:text-4xl font-bold mb-2">
                      {item.heading}
                    </h2>
                    <p className="text-sm md:text-lg mb-4 max-w-md">
                      {item.subtext}
                    </p>
                    <Button asChild className="bg-primary hover:bg-primary/80 transition">
                      <a href={item.actionLink}>{item.actionText}</a>
                    </Button>
                  </div>
                </CardContent>
              </Card>
            </CarouselItem>
          ))}
        </CarouselContent>
        <CarouselPrevious className="translate-x-10 md:scale-125 z-30" />
        <CarouselNext className="-translate-x-10 md:scale-125 z-30" />
      </Carousel>
    </div>
  );
};

export default Slider;
