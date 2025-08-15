"use client";

import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Heart, ShoppingCart } from "lucide-react";
import DynamicStarRating from "@/components/ui/DynamicStarRating";
import ProductDialog from "../ProductDialog";
import { Product } from "@/types/Product";

interface ProductCardProps {
  products: Product[];
}

const ProductCard = ({ products }: ProductCardProps) => {
  return (
    <>
      {products.map((product) => (
        <Card
          key={product.id}
          className="w-full max-w-sm mx-auto transition-all duration-300 hover:shadow-lg relative group select-none border-2 border-green-500 rounded-2xl bg-white overflow-hidden"
        >
          {/* Discount Badge */}
          {product.oldPrice && (
            <div className="absolute top-3 right-3 z-10 bg-red-500 text-white text-xs font-bold px-2 py-1 rounded-md">
              {Math.round(((product.oldPrice - product.price) / product.oldPrice) * 100)}% OFF
            </div>
          )}

          <div className="w-full">
            <Link href={`/shop/${product.slug}`} className="block">
              <figure className="p-4">
                <div className="bg-green-50 rounded-xl p-6 flex items-center justify-center min-h-[200px]">
                  <div className="w-full max-w-[160px] h-[160px] bg-white rounded-lg overflow-hidden flex items-center justify-center shadow-sm">
                    <Image
                      src={product.imageUrl}
                      alt={product.name}
                      width={160}
                      height={160}
                      className="object-contain w-full h-full"
                    />
                  </div>
                </div>
              </figure>
            </Link>

            <div className="px-4 pb-4 space-y-3">
              {/* Product Title */}
              <h2 className="text-lg font-bold text-gray-900 leading-tight">
                {product.name}
              </h2>

              {/* Product Description */}
              <p className="text-sm text-gray-600 leading-relaxed">
                {product.description || `Same as ${product.name} but with a larger display and battery.`}
              </p>

              {/* Star Rating */}
              <div className="flex items-center">
                <DynamicStarRating rating={product.rating || 0} />
              </div>

              {/* Pricing */}
              <div className="flex items-center gap-2">
                <span className="text-xl font-bold text-red-500">
                  BDT {product.price.toLocaleString()}
                </span>
                {product.oldPrice && (
                  <span className="text-sm text-gray-400 line-through">
                    BDT {product.oldPrice.toLocaleString()}
                  </span>
                )}
              </div>

              {/* Action Buttons */}
              <div className="flex items-center gap-2 pt-2">
                <ProductDialog product={product}>
                  <Button 
                    size="sm"
                    className="flex-1 bg-green-500 hover:bg-green-600 text-white rounded-full font-medium transition-colors"
                  >
                    Add to Cart
                  </Button>
                </ProductDialog>

                <Button
                  size="sm"
                  variant="outline"
                  className="bg-green-500 hover:bg-green-600 text-white border-green-500 hover:border-green-600 rounded-full px-4 transition-colors"
                >
                  Add to Wishlist
                </Button>
              </div>
            </div>
          </div>
        </Card>
      ))}
    </>
  );
};

export default ProductCard;