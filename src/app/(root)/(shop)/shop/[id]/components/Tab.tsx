/* eslint-disable @next/next/no-img-element */
"use client";
import { useState } from "react";
import { PriductCustomerDetails } from "./productDetailsJson";
import DynamicStarRating from "@/components/ui/DynamicStarRating";
import { Button } from "@/components/ui/button";

const ProductDetailsTab = () => {
  const [activeTab, setActiveTab] = useState<"description" | "reviews">(
    "description"
  );

  return (
    <>
      {/* Tabs */}
      <div className="w-full h-11 flex border-b-[1px]">
        <div
          className={`grid place-content-center h-11 px-4 cursor-pointer ${
            activeTab === "description"
              ? "border-primary border-b-2 font-bold"
              : ""
          }`}
          onClick={() => setActiveTab("description")}
        >
          Description
        </div>
        <div
          className={`grid place-content-center h-11 px-4 cursor-pointer ${
            activeTab === "reviews" ? "border-primary border-b-2 font-bold" : ""
          }`}
          onClick={() => setActiveTab("reviews")}
        >
          Reviews
        </div>
      </div>
      {/* Tab Content */}
      <div className="p-4">
        {activeTab === "description" ? (
          <div>
            <h2 className="text-lg font-bold mb-4">Product Description</h2>
            <div
              dangerouslySetInnerHTML={{ __html: PriductCustomerDetails }}
            ></div>
          </div>
        ) : (
          <div>
            <div className="w-full flex justify-between items-center">
                <h2 className="text-lg font-bold mb-4">Customer Reviews</h2>
                <Button>Your Review</Button>
            </div>
            <div className="bg-white border-b-[1px] rounded-lg p-6 w-full">
              <div className="flex items-center mb-4">
                <img
                  src="https://via.placeholder.com/40"
                  alt="User Avatar"
                  className="rounded-full mr-4"
                />
                <div>
                  <h2 className="text-lg font-semibold">John Doe</h2>
                  <p className="text-gray-500">Product Enthusiast</p>
                </div>
              </div>
              <div className="mb-4">
                <h3 className="text-xl font-semibold">Great Product!</h3>
                <p className="text-gray-600">{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam lacinia neque sit amet quam dapibus, vel euismod turpis sodales.`}</p>
              </div>
              <div className="flex justify-between items-center">
                <DynamicStarRating rating={3.5} />
                <span className="text-gray-500 text-sm">2 days ago</span>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default ProductDetailsTab;
