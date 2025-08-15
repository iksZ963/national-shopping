"use client";
import React from "react";
import { Card, CardContent } from "../ui/card";
import {
  Breadcrumb,
  BreadcrumbEllipsis,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import Image from "next/image";
import Link from "next/link";

import { Badge } from "../ui/badge";
import Slider from "./Slider";

const HeroSection = () => {
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
      <div className="">
        <Slider />
        {/* <Card className="max-w-[300px] min-w-[300px] hidden xl:flex flex-col"> */}
        <div className="p-2 px-4">
          {/* <Breadcrumb> */}
          <BreadcrumbList>
            {/* <BreadcrumbItem>
                  <h3 className="text-lg font-bold">Catagory</h3>
                </BreadcrumbItem> */}
            {/* <BreadcrumbSeparator /> */}
            {/* <BreadcrumbItem> */}
            {/* <BreadcrumbLink href="/components">
                    All Catagorys
                  </BreadcrumbLink> */}
            {/* </BreadcrumbItem> */}
          </BreadcrumbList>
          {/* </Breadcrumb> */}
        </div>
        {/* <ul className="flex flex-col pt-1 overflow-y-auto max-h-[400px] scrollbar-none">
            {CategoryMenu.map((item, index) => (
              <li
                className="px-4 hover:bg-muted/50 py-2 select-none"
                key={index}
              >
                <Link href="/" className="flex items-center gap-2">
                  <Image
                    src={item.icon ?? "/images/icons/placeholder.jpg"}
                    alt="icon"
                    width={15}
                    height={15}
                  />
                  <span className="text-sm">{item.title}</span>
                </Link>
              </li>
            ))}
          </ul> */}
        {/* </Card> */}
        <div className="w-full flex gap-4">
          <div className="flex flex-col gap-4 w-full">
            {/* <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-8 gap-2">
              {CategoryMenu.slice(0, 8).map((item, index) => (
                <Link key={index} href="">
                  <Card
                    key={index}
                    className="p-2 flex flex-col h-full items-center"
                  >
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
          </div>
          {/* <Card className="min-w-[200px] hidden xl:flex flex-col">
            <div className="flex items-center justify-between p-2">
              <h3 className="font-bold">Todays Deal</h3> <Badge>Hot</Badge>
            </div>
            <div className="w-full h-full bg-[hsl(var(--primary))]/5">
              <ul className="p-2  h-full max-h-[400px] overflow-y-auto scrollbar-none flex flex-col gap-3">
                <li>
                  <Card className="p-2">
                    <Link href="">
                      <div className="flex items-center gap-2 select-none">
                        <Image
                          src="/images/JAZRVxcURsIiFR7rPr0ZtAP4KfM6wv6xAh3OmN5w.jpg"
                          alt="icon"
                          width={60}
                          height={60}
                        />
                        <span className="text-sm font-bold text-primary">
                          140.00
                        </span>
                      </div>
                    </Link>
                  </Card>
                </li>
                <li>
                  <Card className="p-2">
                    <Link href="">
                      <div className="flex items-center gap-2 select-none">
                        <Image
                          src="/images/JAZRVxcURsIiFR7rPr0ZtAP4KfM6wv6xAh3OmN5w.jpg"
                          alt="icon"
                          width={60}
                          height={60}
                        />
                        <span className="text-sm font-bold text-primary">
                          140.00
                        </span>
                      </div>
                    </Link>
                  </Card>
                </li>
                <li>
                  <Card className="p-2">
                    <Link href="">
                      <div className="flex items-center gap-2 select-none">
                        <Image
                          src="/images/JAZRVxcURsIiFR7rPr0ZtAP4KfM6wv6xAh3OmN5w.jpg"
                          alt="icon"
                          width={60}
                          height={60}
                        />
                        <span className="text-sm font-bold text-primary">
                          140.00
                        </span>
                      </div>
                    </Link>
                  </Card>
                </li>
                <li>
                  <Card className="p-2">
                    <Link href="">
                      <div className="flex items-center gap-2 select-none">
                        <Image
                          src="/images/JAZRVxcURsIiFR7rPr0ZtAP4KfM6wv6xAh3OmN5w.jpg"
                          alt="icon"
                          width={60}
                          height={60}
                        />
                        <span className="text-sm font-bold text-primary">
                          140.00
                        </span>
                      </div>
                    </Link>
                  </Card>
                </li>
                <li>
                  <Card className="p-2">
                    <Link href="">
                      <div className="flex items-center gap-2 select-none">
                        <Image
                          src="/images/JAZRVxcURsIiFR7rPr0ZtAP4KfM6wv6xAh3OmN5w.jpg"
                          alt="icon"
                          width={60}
                          height={60}
                        />
                        <span className="text-sm font-bold text-primary">
                          140.00
                        </span>
                      </div>
                    </Link>
                  </Card>
                </li>
                <li>
                  <Card className="p-2">
                    <Link href="">
                      <div className="flex items-center gap-2 select-none">
                        <Image
                          src="/images/JAZRVxcURsIiFR7rPr0ZtAP4KfM6wv6xAh3OmN5w.jpg"
                          alt="icon"
                          width={60}
                          height={60}
                        />
                        <span className="text-sm font-bold text-primary">
                          140.00
                        </span>
                      </div>
                    </Link>
                  </Card>
                </li>
              </ul>
            </div>
          </Card> */}
        </div>
      </div>
    </>
  );
};

export default HeroSection;
