import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import Image from "next/image";
import DynamicStarRating from "@/components/ui/DynamicStarRating";
import { Button } from "@/components/ui/button";
import WeightVariants from "@/components/products/WeightVariants";
import { Input } from "@/components/ui/input";
import { IoHeartOutline, IoLogoWhatsapp } from "react-icons/io5";
import { IoIosGitCompare } from "react-icons/io";
import { AiOutlineTwitter, AiTwotoneMail } from "react-icons/ai";
import { RiFacebookCircleFill } from "react-icons/ri";
import { FaLinkedin } from "react-icons/fa";
import Magnifier from "./ProductMagnifier";

const ProductViewComponent = () => {
  return (
    <>
      <Card className="p-1 py-4 md:p-4 lg:p-6">
        <div className="w-full min-h-96 grid lg:grid-cols-5 gap-6">
          <div className="w-full lg:col-span-2 flex flex-col gap-4">
            <div className="flex-grow flex bg-gray-300 justify-center items-center">
              <Magnifier
                src="/images/JAZRVxcURsIiFR7rPr0ZtAP4KfM6wv6xAh3OmN5w.jpg"
                alt="Product Image"
              />
            </div>
            <div className="w-full">
              <Carousel className="w-full select-none">
                <CarouselContent className="flex -ml-1">
                  {Array.from({ length: 5 }).map((_, index) => (
                    <CarouselItem
                      key={index}
                      className="pl-2 basis-1/3 md:basis-1/5 lg:basis-1/4"
                    >
                      <Card>
                        <CardContent className="flex aspect-square items-center justify-center p-6">
                          {/* <span className="text-2xl font-semibold">
                            {index + 1}
                          </span> */}
                          <Image
                            src="/images/JAZRVxcURsIiFR7rPr0ZtAP4KfM6wv6xAh3OmN5w.jpg"
                            alt="Product Image"
                            className="object-cover pointer-events-none transition-all"
                            height={150}
                            style={{
                              aspectRatio: "150/150",
                              objectFit: "cover",
                            }}
                            width={150}
                          />
                        </CardContent>
                      </Card>
                    </CarouselItem>
                  ))}
                </CarouselContent>
                {/* <CarouselPrevious className="translate-x-10 md:translate-x-9" />
                <CarouselNext className="-translate-x-10 md:-translate-x-9" /> */}
              </Carousel>
            </div>
          </div>
          <div className="w-full lg:col-span-3 flex flex-col gap-4 p-4 md:px-4 lg:px-6">
            <div className="flex flex-col gap-2 pb-4 border-b-[1px]">
              <h1 className="text-2xl">আতিকা হোম মেড দেশী ধণিয়া গুড়া</h1>
              <div className="flex gap-2">
                <DynamicStarRating rating={3.5} />{" "}
                <span className="text-sm text-gray-500">{`(0 reviews)`}</span>
              </div>
              <p className="text-gray-500 text-sm">
                Estimate Shipping Time:{" "}
                <span className="text-black">5 Days</span>
              </p>
            </div>
            <div className="pb-4 border-b-[1px] flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Solid by:</span>
                <span className="text-sm">Inhouse product</span>
              </div>
              <div>
                <Button
                  variant={"ghost"}
                  className="hover:bg-primary hover:text-white"
                >
                  Message Seller
                </Button>
              </div>
            </div>
            <div className="pb-4 border-b-[1px] flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Price:</span>
              </div>
              <div>
                <h2 className="text-2xl text-primary font-bold">
                  ৳140.00 - ৳200.00
                </h2>
              </div>
            </div>
            <div className="pb-4 border-b-[1px] flex flex-col gap-4">
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <span className="text-sm text-gray-400">Weigh:</span>
                <div>
                  <WeightVariants />
                </div>
              </div>
              <div className="flex flex-col lg:flex-row lg:items-center gap-4">
                <div className="flex flex-col">
                  <span className="text-sm text-gray-400">Quantity:</span>
                </div>
                <div className="flex items-center gap-4">
                  <Button>+</Button>
                  <Input
                    type="number"
                    className="h-8 w-12 rounded p-0 text-center text-xs [-moz-appearance:_textfield] focus:outline-none [&::-webkit-inner-spin-button]:m-0 [&::-webkit-inner-spin-button]:appearance-none [&::-webkit-outer-spin-button]:m-0 [&::-webkit-outer-spin-button]:appearance-none"
                    name=""
                    id=""
                  />
                  <Button>-</Button>
                </div>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:items-center gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Total Price:</span>
              </div>
              <div>
                <h2 className="text-2xl text-primary font-bold">৳140.00</h2>
              </div>
            </div>
            <div className="flex flex-col lg:flex-row lg:justify-between gap-2">
              <div className="flex items-center gap-4">
                <Button variant={"outline"} className="text-primary">
                  Add to cart
                </Button>
                <Button>অর্ডার করুন</Button>
              </div>
              <div className="flex items-center gap-4">
                <Button variant={"outline"} className="text-primary">
                  <IoHeartOutline />
                </Button>
                <Button variant={"outline"} className="text-primary">
                  <IoIosGitCompare />
                </Button>
              </div>
            </div>
            <div className="py-4 flex items-center gap-4">
              <div className="flex flex-col">
                <span className="text-sm text-gray-400">Share:</span>
              </div>
              <div className="flex items-center gap-4">
                <a
                  href={`mailto:?subject=sorishar%20oil&amp;body=https%3A%2F%2Ffood.vibeflora.com%2Fproduct%2Fsorishar-oil`}
                >
                  <Button variant={"outline"} className="text-primary">
                    <AiTwotoneMail size={20} />
                  </Button>
                </a>
                <a
                  href={`https://twitter.com/share?url=https%3A%2F%2Ffood.vibeflora.com%2Fproduct%2Fsorishar-oil&text=sorishar%20oil`}
                >
                  <Button variant={"outline"} className="text-primary">
                    <AiOutlineTwitter size={20} />
                  </Button>
                </a>
                <a
                  href={`https://facebook.com/sharer/sharer.php?u=https%3A%2F%2Ffood.vibeflora.com%2Fproduct%2Fsorishar-oil`}
                >
                  <Button variant={"outline"} className="text-primary">
                    <RiFacebookCircleFill size={20} />
                  </Button>
                </a>
                <a
                  href={`https://www.linkedin.com/shareArticle?mini=true&url=https%3A%2F%2Ffood.vibeflora.com%2Fproduct%2Fsorishar-oil`}
                >
                  <Button variant={"outline"} className="text-primary">
                    <FaLinkedin size={20} />
                  </Button>
                </a>
                <a
                  href={`whatsapp://send?text=https%3A%2F%2Ffood.vibeflora.com%2Fproduct%2Fsorishar-oil sorishar%20oil`}
                >
                  <Button variant={"outline"} className="text-primary">
                    <IoLogoWhatsapp size={20} />
                  </Button>
                </a>
              </div>
            </div>
          </div>
        </div>
      </Card>
    </>
  );
};

export default ProductViewComponent;
