import ProductCard from "@/components/products/Cards/ProductCard";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Product } from "@/types/Product";
import React from "react";

const relatedProducts: Product[] = [
  {
    id: '1',
    name: "iPhone 15 Pro",
    slug: "iphone-15-pro",
    price: 145000,
    oldPrice: 150000,
    imageUrl: "/phones/iphone.jpeg",
    rating: 4.5,
  },
  {
    id: '2',
    name: "Samsung Galaxy S23",
    slug: "samsung-s23",
    price: 120000,
    oldPrice: 130000,
    imageUrl: "/phones/samsung.jpeg",
    rating: 4.0,
  },
  {
    id: '3',
    name: "Nokia 3310",
    slug: "nokia-3310",
    price: 2500,
    oldPrice: 3000,
    imageUrl: "/phones/nokia.jpeg",
    rating: 3.5,
  },
  {
    id: '4',
    name: "Vivo V27",
    slug: "vivo-v27",
    price: 30000,
    oldPrice: 35000,
    imageUrl: "/phones/vivo.jpeg",
    rating: 3.8,
  },
  {
    id: '5',
    name: "Realme Narzo 50",
    slug: "realme-narzo-50",
    price: 22000,
    oldPrice: 25000,
    imageUrl: "/phones/realme.jpeg",
    rating: 4.2,
  },
  {
    id: '6',
    name: "Oppo A78",
    slug: "oppo-a78",
    price: 27000,
    oldPrice: 29000,
    imageUrl: "/phones/oppo.jpeg",
    rating: 4.1,
  },
];

const FlashSale = () => {
  return (
    <>
      <div className="bg-gray-100 py-8 px-4 sm:px-6 lg:px-8 min-h-screen">
        <div className="max-w-screen-xl mx-auto">
          <div className="flex flex-col items-center justify-center md:flex-row md:justify-between w-full gap-2 py-2">
            <div className="flex flex-col">
              <h2 className="text-2xl font-bold">Flash Sale</h2>
              <p className="mt-3 text-xl text-gray-500 sm:mt-4">
                Limited-time offers on your favorite products.
              </p>
            </div>
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/">Home</BreadcrumbLink>
                </BreadcrumbItem>
                <BreadcrumbSeparator />
                <BreadcrumbItem>
                  <BreadcrumbLink href="/flash-sale" className="text-black">
                    Flash Sale
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>
          </div>

          <div className="mt-8 grid gap-2 md:gap-4 grid-cols-2 lg:grid-cols-6">
            {/* Flash sale item 2 */}
            <ProductCard products={relatedProducts} />
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashSale;
