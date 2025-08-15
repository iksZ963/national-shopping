"use client"

import { Card } from "@/components/ui/card";

const NoOrderFound = () => {


  return (
    <Card className="max-w-lg mx-auto  p-6 text-center">
      <h1 className="text-2xl font-bold mb-4">Order Not Found</h1>
      <p className="text-gray-600 mb-6">{`We couldn't find any order with the provided Order ID. Please check the ID and try again.`}</p>
      
    </Card>
  );
};

export default NoOrderFound;