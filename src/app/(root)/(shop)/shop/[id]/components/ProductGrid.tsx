import ProductCard from "@/components/products/Cards/ProductCard";
import { Card } from "@/components/ui/card";
import { Product } from "@/types/Product";
import React from "react";

export const relatedProducts: Product[] = [
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
];

const RelatedProductGridForViewPage = () => {
  return (
    <Card className="w-full min-h-40 p-3 md:p-4 md:px-6">
      {/* header section */}
      <div className="w-full">
        <div className="w-full flex h-11 items-center justify-between border-[1px] border-b border-x-0 border-t-0">
          <div className="border border-b h-11 border-[hsl(var(--primary))] border-x-0 border-t-0">
            <h3 className="text-2xl font-bold">Related Products</h3>
          </div>
        </div>
      </div>

      {/* product grid Section */}
      <div className="py-4 grid grid-cols-2 sm:grid-cols-3 gap-4 md:gap-6">
        <ProductCard products={relatedProducts} />
      </div>
    </Card>
  );
};

export default RelatedProductGridForViewPage;
