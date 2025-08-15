"use client";
import React from "react";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

interface GoBackBTNType {
  varient?: "ghost" | "secondary" | "outline" | "link" | "text" | "default";
}

const GoBackBTN = ({ varient }: GoBackBTNType) => {
  const router = useRouter();

  const GoBack = () => {
    router.back();
  };
  return (
    <>
      <Button
        type="button"
        variant={varient ? varient : ("ghost" as any)}
        className="flex items-center gap-2"
        onClick={GoBack}
      >
        <svg
          className="w-5 h-5 rtl:rotate-180"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M6.75 15.75L3 12m0 0l3.75-3.75M3 12h18"
          />
        </svg>
        <span>Go back</span>
      </Button>
    </>
  );
};

export default GoBackBTN;
