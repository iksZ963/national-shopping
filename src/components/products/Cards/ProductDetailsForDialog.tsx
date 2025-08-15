"use client";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { addProduct } from "@/redux/splices/ProductAddToCartSlice";
import { DialogClose } from "@/components/ui/dialog";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { SiTicktick } from "react-icons/si";
import { BiShoppingBag, BiStar } from "react-icons/bi";
import { Card } from "@/components/ui/card";
import { OrderConfirmationForm } from "./OrderConfirmationForm";
import { Product } from "@/types/Product";

interface Props {
  product: Product;
}

const ProductDetailsForDialog = ({ product }: Props) => {
  const [addedToCart, setAddedToCart] = useState(false);
  const [timeToChackOut, setTimeToChackOut] = useState(false);
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    dispatch(
      addProduct({
        id: String(product.id),
        title: product.name,
        image: product.imageUrl,
        price: product.price,
        quantity: 1,
      })
    );
    setAddedToCart(true);
  };

  return (
    <>
      {timeToChackOut ? (
         <OrderConfirmationForm product={product} />
      ) : addedToCart ? (
        <div className="flex flex-col justify-center md:min-w-[450px] gap-4">
          <div className="flex flex-col items-center gap-2 text-primary">
            <SiTicktick size={35} />
            <h3 className="text-2xl">Item added to your cart!</h3>
          </div>
          <div className="flex items-center gap-4">
            <Card className="w-20 h-20">
              <Image
                width={80}
                height={80}
                src={product.imageUrl}
                alt="product-image"
              />
            </Card>
            <div className="flex flex-col">
              <h2 className="font-bold">{product.name}</h2>
              <div className="flex gap-4">
                <span>Price:</span>{" "}
                <b className="text-primary">৳{product.price}</b>
              </div>
            </div>
          </div>
          <div className="flex justify-center gap-2">
            <DialogClose asChild>
              <Button variant="outline" className="min-w-40">
                Back to shopping
              </Button>
            </DialogClose>
            <Button
              className="min-w-40"
              onClick={() => setTimeToChackOut(true)}
            >
              Proceed to Checkout
            </Button>
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-[800px]">
          <div className="hidden md:block md:col-span-1">
            <Image
              src={product.imageUrl}
              alt="Product Thumbnail"
              className="object-cover w-full h-full rounded-md"
              height={400}
              width={400}
              style={{ aspectRatio: "400/400" }}
            />
          </div>
          <div className="md:hidden aspect-w-16 aspect-h-9">
            <Image
              src={product.imageUrl}
              alt="Product Thumbnail"
              className="object-cover w-full h-full rounded-md"
              height={400}
              width={400}
              style={{ aspectRatio: "400/400" }}
            />
            <span className="absolute top-2 left-2 bg-red-500 text-white text-xs font-semibold py-1 px-2 rounded">
              Sale
            </span>
          </div>
          <div className="flex flex-col justify-center">
            <h2 className="text-2xl font-bold mb-2 text-gray-800">
              {product.name}
            </h2>
            <p className="text-sm text-gray-600 mb-4">By Fancy Brand</p>
            <div className="flex items-center gap-2 mb-4">
              <div className="flex items-center gap-1 bg-primary text-white px-2 py-1.5 rounded-md text-sm">
                <BiStar className="h-4 w-4" />
                <span className="text-xs">{product.rating ?? "4.0"}</span>
              </div>
              <span className="text-sm text-gray-600">56 ratings</span>
            </div>

            {/* Size */}
            <div className="mb-4">
              <p className="text-sm text-gray-600 mb-1">Size:</p>
              <div className="flex gap-2">
                {["XS", "S", "M", "L", "XL"].map((size, index) => (
                  <button
                    key={index}
                    className={`flex items-center justify-center w-8 h-8 rounded-md border border-gray-300 hover:bg-gray-100 ${
                      size === "M" ? "bg-primary text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            {/* Quantity */}
            <div className="w-full mb-4">
              <p className="text-sm text-gray-600 mb-1">Quantity:</p>
              <div className="flex items-center gap-2">
                <Button size="sm">+</Button>
                <Input
                  type="number"
                  min="1"
                  className="h-8 w-12 rounded p-0 text-center text-xs focus:outline-none"
                />
                <Button size="sm">-</Button>
              </div>
            </div>

            {/* Price */}
            <div className="flex items-center gap-2 mb-4">
              <span className="text-2xl font-semibold text-gray-800">
                ৳{product.price}
              </span>
              {product.oldPrice && (
                <span className="text-sm text-gray-400 line-through">
                  ৳{product.oldPrice}
                </span>
              )}
            </div>

            <div className="mb-4 flex items-center gap-2 text-gray-600">
              <BiShoppingBag className="h-6 w-6" />
              <span className="text-sm">2-4 day shipping</span>
            </div>
            <Button variant="secondary" onClick={handleAddProduct}>
              Add To Cart
            </Button>
          </div>
        </div>
      )}
    </>
  );
};

export default ProductDetailsForDialog;
