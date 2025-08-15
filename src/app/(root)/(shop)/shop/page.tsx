import { Card } from "@/components/ui/card";
import React from "react";
import ShopSidebar from "./components/sidebar/ShopSidebar";
import MobileShopSidebar from "./components/sidebar/MobileShopSidebar";
import ShopHeader from "./components/header/ShopHeader";
import ProductCard from "@/components/products/Cards/ProductCard";
import ShopPagination from "./components/ShopPagination";
import { Product } from "@/types/Product";

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

const Shop = () => {
  return (
    <>
      {/* --> */}
      <div>
        <div>
          <div>
            <ShopHeader />
          </div>
          <main className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            <section aria-labelledby="products-heading" className="pb-24 pt-6">
              <h2 id="products-heading" className="sr-only">
                Productss
              </h2>

              <div className="grid grid-cols-1 gap-x-8 gap-y-10 lg:grid-cols-4">
                {/* <!-- Filters --> */}
                <ShopSidebar />

                {/* <!-- Product grid --> */}
                <div className="lg:col-span-3">
                  {/* <!-- Your content --> */}
                  <div className="w-full h-full min-h-screen flex flex-col justify-between">
                    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                      <ProductCard products={relatedProducts} />
                    </div>
                    <ShopPagination />
                  </div>
                </div>
              </div>
            </section>
          </main>
        </div>
      </div>
    </>
  );
};

export default Shop;
