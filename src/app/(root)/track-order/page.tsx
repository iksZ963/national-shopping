"use client";
import GoBackBTN from "@/components/GoBackBTN";
import OrderDetails from "@/components/products/OrderDetails";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { useSearchParams } from "next/navigation";
import React, { useState, useEffect, useCallback, Suspense } from "react";
import NoOrderFound from "./NoOrderFound"; // Make sure to create this component

const sampleOrders = [
  {
    orderNumber: "123456",
    orderDate: "2024-05-30",
    customerName: "John Doe",
    items: [
      { id: 1, name: "Product 1", quantity: 2, price: 10.0 },
      { id: 2, name: "Product 2", quantity: 1, price: 20.0 },
      { id: 3, name: "Product 3", quantity: 3, price: 5.0 },
    ],
  },
  // Add more sample orders as needed
];

const TrackOrder = () => {
  const searchParams = useSearchParams();
  const initialOrderID = searchParams.get("orderID");
  const [orderID, setOrderID] = useState(initialOrderID || "");
  const [order, setOrder] = useState<any | null>(null);
  const [searchPerformed, setSearchPerformed] = useState(false);

  const handleSearch = useCallback(
    (searchOrderID = orderID) => {
      setSearchPerformed(true);
      const foundOrder = sampleOrders.find(
        (order) => order.orderNumber === searchOrderID
      );
      setOrder(foundOrder || null);
    },
    [orderID]
  );

  useEffect(() => {
    if (initialOrderID) {
      handleSearch(initialOrderID);
    }
  }, [initialOrderID, handleSearch]);

  return (
    <div className="max-w-5xl p-2 md:p-[2rem] mx-auto min-h-screen">
      <div className="flex items-center justify-between w-full gap-2 py-2">
        <GoBackBTN />
        <Breadcrumb>
          <BreadcrumbList>
            <BreadcrumbItem>
              <BreadcrumbLink href="/">Home</BreadcrumbLink>
            </BreadcrumbItem>
            <BreadcrumbSeparator />
            <BreadcrumbItem>
              <BreadcrumbLink href="/track-order" className="text-black">
                Track Order
              </BreadcrumbLink>
            </BreadcrumbItem>
          </BreadcrumbList>
        </Breadcrumb>
      </div>
      <div className="flex flex-col gap-8">
        <Card>
          <div className="h-11 grid place-content-center border-b-[1px]">
            <h1>Check Your Order Status</h1>
          </div>
          <div className="p-4 flex flex-col gap-4">
            <Input
              type="text"
              value={orderID}
              onChange={(e) => setOrderID(e.target.value)}
              placeholder="Order Code 123456"
              className="h-8 w-full focus:outline-none"
            />
            <Button onClick={() => handleSearch()}>Track Order</Button>
          </div>
        </Card>
        {searchPerformed && (
          <div>{order ? <OrderDetails {...order} /> : <NoOrderFound />}</div>
        )}
      </div>
    </div>
  );
};

const TrackOrderPage = () => (
  <Suspense
    fallback={
      <>
        <div className="flex items-center justify-center min-h-screen">
          <div className="relative w-16 h-16">
            <div className="absolute border-4 border-solid border-gray-200 rounded-full w-full h-full"></div>
            <div className="absolute border-4 border-solid border-primary-500 border-t-transparent rounded-full w-full h-full animate-spin"></div>
          </div>
        </div>
      </>
    }
  >
    <TrackOrder />
  </Suspense>
);

export default TrackOrderPage;
