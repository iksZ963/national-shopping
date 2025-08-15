import React from "react";
import ProductViewComponent from "./components/productView";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import Image from "next/image";
import DynamicStarRating from "@/components/ui/DynamicStarRating";
import ProductDetailsTab from "./components/Tab";
import RelatedProductGridForViewPage from "./components/ProductGrid";

const ProductView = async ({ params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params;
  return (
    <div className="container p-2 md:p-8 mx-auto">
      <div className="flex flex-col gap-8">
        <div className="w-full">
          <ProductViewComponent />
        </div>
        <div className="flex flex-col lg:flex-row gap-8">
          <Card className="w-full lg:max-w-72 min-w-72 lg:order-1">
            <div className="w-full py-4">
              <div className="w-full flex h-8 items-center  border-[1px] border-b border-x-0 border-t-0  px-4">
                <div
                  className={`border border-b h-8 border-[hsl(var(--primary))] border-x-0 border-t-0`}
                >
                  <h3 className="font-bold">Top Selling Products</h3>
                </div>
              </div>
            </div>
            <div className="flex flex-col gap-4">
              {Array.from({ length: 5 }).map((_, index) => (
                <div key={index} className="flex border-b-[1px] p-4">
                  <div>
                    <Link
                      href={`/shop/1231512165`}
                      className="aspect-[1/1] min-w-[150px]"
                    >
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
                    </Link>
                  </div>
                  <div className="w-full flex flex-col gap-1 items-start">
                    <div className="w-full flex flex-col gap-2 items-start">
                      <div>
                        <DynamicStarRating rating={3.5} />
                      </div>
                      <h3 className="text-[12px] font-bold text-gray-900">
                        <Link className="line-clamp-2 " href={`/product/25`}>
                          আতিকা হোম মেড দেশী ধণিয়া গুড়া
                        </Link>
                      </h3>
                    </div>
                    <span className="text-lg font-semibold text-primary">
                      ৳140.00
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </Card>
          <div className="flex flex-col w-full gap-8 lg:order-1">
            <Card>
              <ProductDetailsTab />
            </Card>
            <RelatedProductGridForViewPage />
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductView;
