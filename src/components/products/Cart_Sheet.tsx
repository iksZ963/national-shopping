"use client";
import React, { useState, useEffect } from "react";
import {
    Sheet,
    SheetContent,
    SheetHeader,
    SheetTitle,
    SheetTrigger,
} from "@/components/ui/sheet";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { useDispatch, useSelector } from "react-redux";
import {
    updateProductQuantity,
    removeProduct,
    clearCart,
} from "@/redux/splices/ProductAddToCartSlice";
import { playButtonSoundEffect } from "@/utils/functions";
import { ShoppingBasket, ShoppingCart, Trash2 } from "lucide-react";

const OpenCartSheet = () => {
    const dispatch = useDispatch();
    const products = useSelector((state: any) => state.productCart.products);
    const [totalQuantity, setTotalQuantity] = useState(0);
    const [totalCost, setTotalCost] = useState(0);

    useEffect(() => {
        let quantitySum = 0;
        let costSum = 0;

        products.forEach((item: any) => {
            if (item.price && item.quantity) {
                quantitySum += item.quantity;
                costSum += item.price * item.quantity;
            }
        });

        setTotalQuantity(quantitySum);
        setTotalCost(costSum);
    }, [products]);

    const handleUpdateQuantity = (id: string, newQuantity: number) => {
        if (newQuantity < 1) return;
        dispatch(updateProductQuantity({ id, quantity: newQuantity }));
    };

    const handleRemoveProduct = (id: string) => {
        dispatch(removeProduct(id));
        playButtonSoundEffect("/audios/delete-file-sound-effect.m4a");
    };

    const handleClearCart = () => {
        dispatch(clearCart());
        playButtonSoundEffect("/audios/delete-all-files-sound-effect.m4a");
    };

    return (
        <Sheet>
            <SheetTrigger asChild>
                <div className="flex items-center gap-2 cursor-pointer select-none">
                    <ShoppingCart size={25} />
                    <div className="flex flex-col items-start">
                        <span className="w-5 h-5 text-xs bg-primary text-white grid place-content-center rounded-full font-semibold">
                            {totalQuantity < 100 ? totalQuantity : "99+"}
                        </span>
                        <span className="text-sm font-medium text-gray-700">Cart</span>
                    </div>
                </div>
            </SheetTrigger>
            <SheetContent className="w-full max-w-md md:max-w-sm p-4 flex flex-col">
                <SheetHeader>
                    <SheetTitle className="text-lg font-semibold mb-4">Your Cart</SheetTitle>
                </SheetHeader>

                {products.length === 0 ? (
                    <div className="flex flex-col flex-1 items-center justify-center gap-4 text-gray-600">
                        <ShoppingBasket size={60} />
                        <p className="text-lg font-medium">Your cart is empty</p>
                    </div>
                ) : (
                    <>
                        <ul className="flex flex-col gap-3 overflow-y-auto max-h-[60vh] pb-4">
                            {products.map((item: any) => (
                                <li
                                    key={item.id}
                                    className="flex items-center justify-between gap-3"
                                >
                                    <Image
                                        alt={item.title}
                                        src={item.image}
                                        width={60}
                                        height={60}
                                        className="rounded-md object-cover flex-shrink-0"
                                    />
                                    <div className="flex flex-col flex-1 min-w-0">
                                        <h3 className="text-sm font-semibold truncate">{item.title}</h3>
                                        <p className="text-xs text-gray-500">Size: XXL</p>
                                        <p className="text-xs text-gray-500">Color: Red</p>
                                    </div>
                                    <div className="flex items-center gap-2">
                                        <Input
                                            type="number"
                                            min={1}
                                            value={item.quantity}
                                            onChange={(e) =>
                                                handleUpdateQuantity(item.id, parseInt(e.target.value))
                                            }
                                            className="w-14 h-8 rounded-md p-0 text-center text-sm"
                                        />
                                        <Button
                                            variant="outline"
                                            size="sm"
                                            onClick={() => handleRemoveProduct(item.id)}
                                            aria-label={`Remove ${item.title} from cart`}
                                            className="p-1"
                                        >
                                            <Trash2 size={18} />
                                        </Button>
                                    </div>
                                </li>
                            ))}
                        </ul>

                        <div className="border-t pt-4 flex flex-col gap-4 sticky bottom-0 bg-white">
                            <div className="flex justify-between text-base font-semibold">
                                <span>Total Cost:</span>
                                <span>${totalCost.toFixed(2)}</span>
                            </div>
                            <Button
                                variant="destructive"
                                onClick={handleClearCart}
                                className="w-full"
                                aria-label="Clear all items from cart"
                            >
                                Clear All
                            </Button>
                            <Button variant="default" className="w-full" aria-label="Proceed to checkout">
                                Checkout
                            </Button>
                        </div>
                    </>
                )}
            </SheetContent>
        </Sheet>
    );
};

export default OpenCartSheet;
