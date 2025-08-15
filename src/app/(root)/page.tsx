import Banner from "@/components/Banner";
import HeroSection from "@/components/Heros/HeroSection";
import OpenModelButton from "@/components/OpenModelButton";
import CategoryCard from "@/components/products/Cards/CategoryCard";
import ProductCard from "@/components/products/Cards/ProductCard";
import ProductCarousel from "@/components/products/ProductCarousel";
import ProductGrid from "@/components/products/ProductGrid";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <div className="container p-2 md:p-[2rem] mx-auto">
        <HeroSection />
        {/* <OpenModelButton/> */}
        <div className="w-full my-4">
          <Banner img="/images/ehKH4d8b8AE9vz5UU2rhBytvHeKlUZYZeRMdqtFx.jpg" />
        </div>
        <div className="my-4">
          <ProductGrid />
        </div>
        <div className="my-4">
          <CategoryCard />
        </div>
        <div className="my-4">
          <ProductCarousel />
        </div>
        <div className="grid md:grid-cols-2 gap-4">
          <div>
            <Banner img="/images/Hz8M6bVJa8ivRf2PvlFK57nnPhp1CxfBnyqD8AT9.jpg" />
          </div>
          <div>
            <Banner img="/images/Hz8M6bVJa8ivRf2PvlFK57nnPhp1CxfBnyqD8AT9.jpg" />
          </div>
        </div>
      </div>
    </main>
  );
}
